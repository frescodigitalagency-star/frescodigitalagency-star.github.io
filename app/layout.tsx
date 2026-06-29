import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { CRTShader } from "@/components/layout/CRTShader";
import { BootSequence } from "@/components/ui/BootSequence";
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
          <BootSequence />
          <div className="fixed inset-0 z-0">
            <CRTShader />
          </div>
          {/* Scanline Overlay */}
          <div className="fixed inset-0 scanlines z-[100] pointer-events-none mix-blend-multiply"></div>
          
          {/* CRT TV Bezel & Glass Reflection Overlay */}
          <div 
            className="fixed inset-0 pointer-events-none z-[99999]" 
            style={{
              boxShadow: "inset 0 0 100px rgba(0,0,0,0.9), inset 0 0 20px rgba(0,0,0,0.8)",
              border: "16px solid #050505",
              borderRadius: "40px",
              background: "radial-gradient(circle, transparent 60%, rgba(0,0,0,0.4) 100%)"
            }}
          ></div>
          {/* Inner Glass Highlight */}
          <div 
            className="fixed inset-0 pointer-events-none z-[99999] opacity-20"
            style={{
              boxShadow: "inset 0 10px 30px rgba(255,255,255,0.1)",
              borderRadius: "40px",
              margin: "16px"
            }}
          ></div>
          
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
