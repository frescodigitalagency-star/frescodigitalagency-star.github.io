// [Added by Antigravity Mac: per-page metadata for /uplink]
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Связь - TERREYA HOLDING | Контакты и Telegram",
  description: "Свяжитесь с Terreya Holding через защищённый канал Telegram (@D_rag) или email. Ташкент, Узбекистан.",
  openGraph: {
    title: "Связь - TERREYA HOLDING",
    description: "Контакты: Telegram @D_rag, email. Ташкент, Узбекистан.",
    url: "https://terreya.com/uplink",
  },
  alternates: {
    canonical: "https://terreya.com/uplink",
  },
};

export default function UplinkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
