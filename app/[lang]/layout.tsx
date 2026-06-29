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

export function generateStaticParams() {
  return [{ lang: 'ru' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    metadataBase: new URL("https://terreya.com"),
    title: "TERREYA HOLDING | AI Orchestration & Digital Systems",
    description: "Terreya Holding — создание ИИ-архитектуры, автоматизация бизнес-процессов, макро-системы и премиальная разработка.",
    keywords: ["AI Architecture", "Digital Agency", "Business Automation", "Terreya", "ИИ автоматизация", "Разработка"],
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: "TERREYA HOLDING | AI Architecture",
      description: "Надежные ИИ-системы для бизнеса.",
      url: `https://terreya.com/${lang}`,
      siteName: "TERREYA",
      images: [
        {
          url: "/og-banner.png",
          width: 1200,
          height: 630,
          alt: "Terreya Architecture"
        }
      ],
      locale: lang === 'ru' ? "ru_RU" : "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: "TERREYA HOLDING | AI Architecture",
      description: "Надежные ИИ-системы для бизнеса.",
      images: ["/portfolio/dvor.png"],
    },
    alternates: {
      canonical: `https://terreya.com/${lang}`,
      languages: {
        'ru': 'https://terreya.com/ru',
        'en': 'https://terreya.com/en',
        'x-default': 'https://terreya.com/ru'
      }
    }
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "name": "Terreya Holding",
  "url": "https://terreya.com",
  "logo": "https://terreya.com/portfolio/avralab-v2.png",
  "description": "ИИ-архитектура, автоматизация бизнес-процессов, макро-системы и премиальная разработка.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tashkent",
    "addressCountry": "UZ"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.2995,
    "longitude": 69.2401
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "contact@terreya.com"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  }
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return (
    // [Modified by Antigravity Mac: dynamic lang for i18n]
    <html lang={lang} className={`${inter.variable} ${spaceMono.variable}`}>
      <head>
        <link rel="preload" as="image" href="/tv-frame.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen relative font-body-md text-body-md selection:bg-primary-container selection:text-on-primary-container bg-black">
        <LanguageProvider initialLang={lang as any}>
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
            <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
              <CRTShader />
            </div>
            {/* Scanline Overlay */}
            <div className="fixed inset-0 scanlines z-[100] pointer-events-none mix-blend-multiply" aria-hidden="true"></div>
            
            {/* Extreme CRT TV Convex Glass Reflection Overlay */}
            <div 
              className="fixed inset-0 pointer-events-none z-[99999] mix-blend-multiply" 
              aria-hidden="true"
              style={{
                boxShadow: "inset 0 0 30px 10px rgba(0,0,0,1), inset 0 0 200px rgba(0,0,0,0.95), inset 0 0 80px rgba(0,0,0,0.8)",
                background: "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.8) 130%)"
              }}
            ></div>
            {/* Intense Convex center highlight */}
            <div 
              className="fixed inset-0 pointer-events-none z-[99999] opacity-70 mix-blend-screen"
              aria-hidden="true"
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
            aria-hidden="true"
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
