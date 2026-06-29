// [Added by Antigravity Mac: per-page metadata for /portfolio]
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Портфолио — TERREYA HOLDING | 8 Реальных Кейсов",
  description: "Портфолио Terreya Holding: CRM-системы, iOS-приложения с AES-шифрованием, AI-оркестраторы, YouTube-фабрики, Telegram-боты. 1500+ часов разработки.",
  openGraph: {
    title: "Портфолио — TERREYA HOLDING",
    description: "8 реальных кейсов: от CRM до AI-оркестраторов и мобильных приложений.",
    url: "https://terreya.com/portfolio",
  },
  alternates: {
    canonical: "https://terreya.com/portfolio",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
