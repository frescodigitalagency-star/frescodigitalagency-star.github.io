import { NextResponse } from "next/server";
import archiveData from "@/data/archive.json";

export const dynamic = 'force-dynamic';

export interface LocalizedText {
  en: string;
  ru: string;
}

export interface LogEntry {
  id: string;
  date: string;
  title: LocalizedText;
  content: LocalizedText;
  imageUrl?: string;
  links?: {
    label: LocalizedText;
    url: string;
  }[];
}

export async function GET() {
  // Simulate network delay for effect
  await new Promise(resolve => setTimeout(resolve, 800));
  return NextResponse.json(archiveData);
}
