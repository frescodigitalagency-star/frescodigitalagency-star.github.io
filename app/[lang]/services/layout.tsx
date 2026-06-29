// [Added by Antigravity Mac: per-page metadata for /services]
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Услуги и Цены — TERREYA HOLDING | AI-автоматизация, Боты, Веб-разработка",
  description: "AI-автоматизация бизнес-процессов от $300, Telegram-боты, веб-приложения, SaaS MVP, кибербезопасность. Полный прайс-лист Terreya Holding.",
  openGraph: {
    title: "Услуги и Цены — TERREYA HOLDING",
    description: "AI-автоматизация, Telegram-боты, веб-приложения, кибербезопасность. Прайс-лист.",
    url: "https://terreya.com/services",
  },
  alternates: {
    canonical: "https://terreya.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
