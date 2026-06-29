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
  title: "Terreya: Liminal CRT Archive",
  description: "TERREYA HOLDING // INSTITUTIONAL ARCHIVE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`}>
      <body className="antialiased min-h-screen relative font-body-md text-body-md selection:bg-primary-container selection:text-on-primary-container crt-flicker">
        <LanguageProvider>
          {/* Physical TV Frame Image Overlay (Covers the whole window) */}
          <div 
            className="fixed inset-0 pointer-events-none z-[999999]"
            style={{
              backgroundImage: "url('/tv-frame.png')",
              backgroundSize: "115% 115%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          ></div>

          {/* TV Screen Bounding Box (Traps all fixed elements inside the TV Bezel) */}
          <div 
            className="fixed z-10 bg-black overflow-hidden" 
            style={{
              top: '5%',
              bottom: '8%',
              left: '5%',
              right: '5%',
              borderRadius: '2rem',
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
                boxShadow: "inset 0 0 120px rgba(0,0,0,0.8), inset 0 0 30px rgba(0,0,0,0.5)",
                background: "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.65) 120%)"
              }}
            ></div>
            {/* Intense Convex center highlight */}
            <div 
              className="fixed inset-0 pointer-events-none z-[99999] opacity-70 mix-blend-screen"
              style={{
                background: "radial-gradient(ellipse at 50% 15%, rgba(255,255,255,0.25) 0%, transparent 60%)"
              }}
            ></div>
            
            <div className="relative w-full h-full overflow-hidden">
              {children}
            </div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
