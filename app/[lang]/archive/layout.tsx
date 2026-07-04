// [Added by Antigravity Mac: per-page metadata for /archive]
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Архив - TERREYA HOLDING | Реестр Проектов и Логов",
  description: "Архивный реестр проектов Terreya Holding. Индексированные записи, логи разработки и техническая документация.",
  openGraph: {
    title: "Архив - TERREYA HOLDING",
    description: "Реестр проектов, логи разработки, техническая документация.",
    url: "https://terreya.com/archive",
  },
  alternates: {
    canonical: "https://terreya.com/archive",
  },
};

export default function ArchiveLayout({ children }: { children: React.ReactNode }) {
  return children;
}
