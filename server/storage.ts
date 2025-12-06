import { db } from "@db/index";
import { type ContactInquiry, type InsertContactInquiry, contactInquiries } from "@shared/schema";
import { desc } from "drizzle-orm";

export interface IStorage {
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getAllContactInquiries(): Promise<ContactInquiry[]>;
}

export class DatabaseStorage implements IStorage {
  async createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const [result] = await db
      .insert(contactInquiries)
      .values(inquiry)
      .returning();
    return result;
  }

  async getAllContactInquiries(): Promise<ContactInquiry[]> {
    return db
      .select()
      .from(contactInquiries)
      .orderBy(desc(contactInquiries.createdAt));
  }
}

export const storage = new DatabaseStorage();
