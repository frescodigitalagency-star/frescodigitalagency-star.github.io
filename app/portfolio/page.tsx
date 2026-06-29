"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AppLayout } from "@/components/layout/AppLayout";
import { useLanguage } from "@/i18n/LanguageContext";

import PORTFOLIO_ITEMS from "@/data/portfolio.json";

export default function PortfolioPage() {
  const { t, lang } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [time, setTime] = useState("");
  const [glitch, setGlitch] = useState(false);

  const currentItem = PORTFOLIO_ITEMS[currentIndex];

  useEffect(() => {
    // Clock for the CCTV overlay
    const interval = setInterval(() => {
      setTime(new Date().toISOString().replace('T', ' ').slice(0, 19));
    }, 1000);
    // Set initial time right away to avoid hydration mismatch delay if possible,
    // though Next.js might complain if server and client mismatch. We'll let it be empty on initial render.
    setTime(new Date().toISOString().replace('T', ' ').slice(0, 19));
    
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    triggerGlitch();
    setCurrentIndex((prev) => (prev + 1) % PORTFOLIO_ITEMS.length);
  };

  const handlePrev = () => {
    triggerGlitch();
    setCurrentIndex((prev) => (prev - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length);
  };

  const triggerGlitch = () => {
    setGlitch(true);
    setTimeout(() => setGlitch(false), 250);
  };

  return (
    <AppLayout>
      <div className="w-full max-w-6xl mx-auto flex flex-col font-data-mono">
        
        {/* CCTV Monitor Frame */}
        <div className="border-[6px] md:border-[12px] border-[#553E16] bg-black p-2 md:p-6 shadow-[16px_16px_0_rgba(85,62,22,0.3)] relative">
          
          {/* Main Feed Container */}
          <div className="relative w-full aspect-video bg-[#0a0a0a] border-2 border-[#553E16]/30 overflow-hidden flex items-center justify-center group">
            
            {/* The actual image feed */}
            <div className={`relative w-full h-full transition-transform duration-200 ${glitch ? 'scale-105 blur-sm opacity-50' : 'scale-100 blur-none opacity-80 group-hover:opacity-100'}`}>
              <Image 
                src={currentItem.src}
                alt={currentItem.title}
                fill
                className={`object-cover ${['ADAM_AUDIO', 'AVRALAB'].includes(currentItem.id) ? 'object-top' : 'grayscale mix-blend-screen'}`}
              />
            </div>

            {/* Scanline / CRT overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay" style={{
              backgroundImage: "linear-gradient(transparent 50%, rgba(0, 0, 0, 0.5) 50%)",
              backgroundSize: "100% 4px"
            }}></div>
            
            {/* Vignette */}
            <div className="absolute inset-0 pointer-events-none opacity-60" style={{
              background: "radial-gradient(circle, transparent 50%, rgba(0,0,0,0.8) 100%)"
            }}></div>

            {/* OSD (On-Screen Display) */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8 flex items-center gap-3 z-10 text-white font-mono text-lg md:text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
              <span className="w-4 h-4 md:w-5 md:h-5 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(255,0,0,0.8)]"></span>
              REC
            </div>
            
            <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10 text-white font-mono text-lg md:text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
              CAM {String(currentIndex + 1).padStart(2, '0')}
            </div>
            
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-10 text-white font-mono text-sm md:text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
              {time || "LOADING..."}
            </div>
            
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-10 text-[#00FF00] font-mono text-sm md:text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
              [ NODE: {currentItem.id} ]
            </div>

            {/* Navigation Arrows overlaying the video on hover */}
            <button 
              onClick={handlePrev} 
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-[#553E16] text-[#B5B48B] p-4 h-32 md:h-48 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity border-r-2 border-[#553E16] cursor-pointer"
            >
              <span className="font-bold text-4xl md:text-6xl font-mono">{"<"}</span>
            </button>
            <button 
              onClick={handleNext} 
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-[#553E16] text-[#B5B48B] p-4 h-32 md:h-48 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity border-l-2 border-[#553E16] cursor-pointer"
            >
              <span className="font-bold text-4xl md:text-6xl font-mono">{">"}</span>
            </button>
            
          </div>
        </div>

        {/* Camera Selector (Mini-map) */}
        <div className="mt-4 flex gap-2 overflow-x-auto custom-scrollbar pb-2">
          {PORTFOLIO_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                if (idx !== currentIndex) {
                  triggerGlitch();
                  setCurrentIndex(idx);
                }
              }}
              className={`flex-shrink-0 px-4 py-2 font-bold uppercase text-xs border-2 transition-colors ${
                currentIndex === idx 
                  ? "bg-[#553E16] border-[#553E16] text-[#B5B48B]" 
                  : "border-[#553E16]/30 text-[#553E16] hover:border-[#553E16] bg-transparent"
              }`}
            >
              CAM {String(idx + 1).padStart(2, '0')}
            </button>
          ))}
        </div>

        {/* Info Terminal Below */}
        <div className="mt-6 border-[4px] border-[#553E16] bg-[#B5B48B] p-6 md:p-8 shadow-[8px_8px_0_rgba(85,62,22,0.3)] flex flex-col md:flex-row justify-between gap-8 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#553E16] opacity-5 transform rotate-45 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

          <div className="flex-1 relative z-10">
            <h2 className="text-sm font-bold opacity-60 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="font-mono text-lg font-bold">[*]</span>
              {lang === "ru" ? "ДОСЬЕ КЕЙСА" : "CASE DOSSIER"}
            </h2>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#553E16] mb-6">
              {currentItem.title}
            </h3>
            {/* @ts-ignore */}
            <p className="text-lg md:text-xl font-bold leading-relaxed max-w-3xl text-[#553E16] border-l-4 border-[#553E16] pl-6 bg-[#553E16]/5 py-4">
              {/* @ts-ignore */}
              {currentItem.desc || "Данные засекречены. Описание отсутствует."}
            </p>
          </div>
          
          <div className="flex flex-col items-start md:items-end justify-between border-t-4 md:border-t-0 md:border-l-4 border-[#553E16] pt-6 md:pt-0 md:pl-8 relative z-10 min-w-[200px]">
            <div className="text-left md:text-right mb-8 w-full">
              <div className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">
                {lang === "ru" ? "СТАТУС ИНДЕКСАЦИИ" : "INDEX STATUS"}
              </div>
              <div className="bg-[#553E16] text-[#B5B48B] px-4 py-2 font-bold inline-block text-sm">
                {t("portfolio", "indexed")}
              </div>
            </div>
            
            {currentItem.link ? (
              <a 
                href={currentItem.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full md:w-auto border-[3px] border-[#553E16] text-[#553E16] hover:bg-[#553E16] hover:text-[#B5B48B] font-bold uppercase tracking-widest px-8 py-4 transition-colors flex justify-center items-center gap-3 shadow-[4px_4px_0_rgba(85,62,22,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
              >
                {lang === "ru" ? "ОТКРЫТЬ ДЕЛО" : "OPEN FILE"}
                <span className="font-bold text-xl font-mono">{">"}</span>
              </a>
            ) : (
              <div className="w-full md:w-auto text-xs font-bold uppercase opacity-50 border-2 border-dashed border-[#553E16]/50 p-4 text-center">
                {lang === "ru" ? "[ ССЫЛКА ЗАСЕКРЕЧЕНА ]" : "[ LINK CLASSIFIED ]"}
              </div>
            )}
          </div>
        </div>

      </div>
    </AppLayout>
  );
}
