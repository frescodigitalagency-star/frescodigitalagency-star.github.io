import { NextResponse } from "next/server";
import portfolioData from "@/data/portfolio.json";

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json(portfolioData);
}
