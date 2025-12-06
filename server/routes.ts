import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Submit contact inquiry
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Your inquiry has been received. We will respond shortly.",
        inquiry 
      });
    } catch (error: any) {
      if (error.name === 'ZodError') {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          error: validationError.message 
        });
      } else {
        console.error("Error creating contact inquiry:", error);
        res.status(500).json({ 
          success: false, 
          error: "Failed to submit inquiry. Please try again." 
        });
      }
    }
  });

  // Get all inquiries (for admin/review purposes)
  app.get("/api/contact/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getAllContactInquiries();
      res.json({ success: true, inquiries });
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch inquiries" 
      });
    }
  });

  return httpServer;
}
