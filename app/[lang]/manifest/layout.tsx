// [Added by Antigravity Mac: per-page metadata for /manifest]
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Манифест - TERREYA HOLDING | Миссия и Структура Холдинга",
  description: "Манифест Terreya Holding: три подразделения - Terreya (AI-архитектура), AVRALAB (дизайн и маркетинг), CORDBLANK (звукозапись). Полный цикл продукта под ключ.",
  openGraph: {
    title: "Манифест - TERREYA HOLDING",
    description: "Три подразделения: AI-архитектура, дизайн, звукозапись. Полный цикл под ключ.",
    url: "https://terreya.com/manifest",
  },
  alternates: {
    canonical: "https://terreya.com/manifest",
  },
};

export default function ManifestLayout({ children }: { children: React.ReactNode }) {
  return children;
}
