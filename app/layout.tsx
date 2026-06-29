import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { CRTShader } from "@/components/layout/CRTShader";
import { BootSequence } from "@/components/ui/BootSequence";
import { SystemGlitch } from "@/components/ui/SystemGlitch";
import { LanguageProvider } from "@/i18n/LanguageContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const spaceMono = Roboto_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono", // keeping variable name the same so css works
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "TERREYA HOLDING | AI Orchestration & Digital Systems",
  description: "Terreya Holding — создание ИИ-архитектуры, автоматизация бизнес-процессов, макро-системы и премиальная разработка.",
  keywords: ["AI Architecture", "Digital Agency", "Business Automation", "Terreya", "ИИ автоматизация", "Разработка"],
  openGraph: {
    title: "TERREYA HOLDING | AI Architecture",
    description: "Надежные ИИ-системы для бизнеса.",
    url: "https://terreya.com",
    siteName: "TERREYA",
    images: [
      {
        url: "/portfolio/dvor.png",
        width: 1200,
        height: 630,
        alt: "Terreya Architecture"
      }
    ],
    locale: "ru_RU",
    type: "website"
  },
  alternates: {
    canonical: "https://terreya.com"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Terreya Holding",
  "url": "https://terreya.com",
  "logo": "https://terreya.com/portfolio/avralab-v2.png",
  "description": "ИИ-архитектура, автоматизация бизнес-процессов, макро-системы и премиальная разработка.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tashkent",
    "addressCountry": "UZ"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "contact@terreya.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`}>
      <head>
        <link rel="preload" as="image" href="/tv-frame.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen relative font-body-md text-body-md selection:bg-primary-container selection:text-on-primary-container bg-black">
        <LanguageProvider>
          {/* TV Screen Bounding Box (Expanded to bleed UNDER the TV Bezel on desktop, fullscreen on mobile) */}
          <div 
            id="tv-screen"
            className="fixed z-10 bg-background overflow-hidden crt-flicker inset-0 rounded-none md:inset-[1%] md:rounded-[2rem]" 
            style={{
              transform: 'translate3d(0,0,0)'
            }}
          >
            <BootSequence />
            <SystemGlitch />
            <div className="fixed inset-0 z-0 pointer-events-none">
              <CRTShader />
            </div>
            {/* Scanline Overlay */}
            <div className="fixed inset-0 scanlines z-[100] pointer-events-none mix-blend-multiply"></div>
            
            {/* Extreme CRT TV Convex Glass Reflection Overlay */}
            <div 
              className="fixed inset-0 pointer-events-none z-[99999] mix-blend-multiply" 
              style={{
                boxShadow: "inset 0 0 30px 10px rgba(0,0,0,1), inset 0 0 200px rgba(0,0,0,0.95), inset 0 0 80px rgba(0,0,0,0.8)",
                background: "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.8) 130%)"
              }}
            ></div>
            {/* Intense Convex center highlight */}
            <div 
              className="fixed inset-0 pointer-events-none z-[99999] opacity-70 mix-blend-screen"
              style={{
                background: "radial-gradient(ellipse at 50% 15%, rgba(255,255,255,0.3) 0%, transparent 60%)"
              }}
            ></div>
            
            {/* Inner Content Wrapper */}
            <div className="relative w-full h-full overflow-hidden">
              {children}
            </div>
          </div>

          {/* Physical TV Frame Image Overlay (Covers the whole window) - Hidden on Mobile */}
          <div 
            className="fixed inset-0 pointer-events-none z-[2147483647] hidden md:block"
            style={{
              backgroundImage: "url('/tv-frame.png')",
              backgroundSize: "115% 115%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          ></div>
        </LanguageProvider>
      </body>
    </html>
  );
}
