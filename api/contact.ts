import type { VercelRequest, VercelResponse } from '@vercel/node';
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import { insertContactInquirySchema, contactInquiries } from "../shared/schema";
import { fromZodError } from "zod-validation-error";
import { desc } from "drizzle-orm";

// Initialize database connection
let db: ReturnType<typeof drizzle> | null = null;

function getDb() {
  if (!db) {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL environment variable is not set");
    }
    const pool = new pg.Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined
    });
    db = drizzle(pool);
  }
  return db;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const database = getDb();

    if (req.method === 'POST') {
      // Submit contact inquiry
      try {
        const validatedData = insertContactInquirySchema.parse(req.body);
        const [inquiry] = await database
          .insert(contactInquiries)
          .values(validatedData)
          .returning();

        return res.status(201).json({
          success: true,
          message: "Your inquiry has been received. We will respond shortly.",
          inquiry
        });
      } catch (error: any) {
        if (error.name === 'ZodError') {
          const validationError = fromZodError(error);
          return res.status(400).json({
            success: false,
            error: validationError.message
          });
        }
        throw error;
      }
    } else if (req.method === 'GET') {
      // Get all inquiries
      const inquiries = await database
        .select()
        .from(contactInquiries)
        .orderBy(desc(contactInquiries.createdAt));

      return res.json({ success: true, inquiries });
    } else {
      return res.status(405).json({
        success: false,
        error: 'Method not allowed'
      });
    }
  } catch (error) {
    console.error("Error in contact API:", error);
    return res.status(500).json({
      success: false,
      error: "Failed to process request. Please try again."
    });
  }
}
