"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import Image from "next/image";

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const [timeString, setTimeString] = useState("--:--:--");
  const { lang, setLang, t } = useLanguage();
  const [showVideo, setShowVideo] = useState(false);
  const [destructCounter, setDestructCounter] = useState<number | null>(null);

  useEffect(() => {
    function updateClock() {
      const now = new Date();
      setTimeString(now.toTimeString().split(" ")[0]);
    }
    const interval = setInterval(updateClock, 1000);
    updateClock();
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (destructCounter !== null && destructCounter > 0) {
      const timer = setTimeout(() => setDestructCounter(destructCounter - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [destructCounter]);

  return (
    <>
      <header className="flex justify-between items-center w-full px-8 md:px-24 pb-2 pt-6 md:pt-14 h-20 md:h-28 bg-surface dark:bg-surface text-primary dark:text-primary-fixed font-data-mono text-data-mono border-b border-outline shadow-[2px_2px_0px_0px_#553E16] fixed top-0 z-40">
        
        {/* Mobile Burger Menu */}
        <button 
          onClick={onMenuClick}
          className="md:hidden flex items-center justify-center p-2 mr-2 border border-outline bg-surface-container active:bg-primary active:text-on-primary cursor-pointer"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            menu
          </span>
        </button>

        <div className="font-data-mono text-interface-label md:text-headline-md uppercase tracking-tighter text-on-surface flex items-center gap-2 md:gap-4 flex-1">
          <span className="hidden sm:inline">{t("header", "title")}</span>
          <span className="sm:hidden text-lg">TERREYA</span>
          <span className="text-data-mono font-bold text-error flex items-center gap-1 md:gap-2 tracking-normal text-xs md:text-sm">
            <span className="inline-block w-2 h-2 bg-error rounded-full animate-pulse"></span>
            {t("header", "rec")}
          </span>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="font-data-mono font-bold text-on-surface hidden md:block">
            {timeString}
          </div>
          
          {/* Language Switcher */}
          <div className="flex items-center border border-outline bg-surface-container text-xs cursor-pointer">
            <div 
              onClick={() => setLang("ru")}
              className={`px-2 py-1 ${lang === "ru" ? "bg-primary text-on-primary" : "text-on-surface hover:bg-secondary-container"}`}
            >
              RU
            </div>
            <div 
              onClick={() => setLang("en")}
              className={`px-2 py-1 ${lang === "en" ? "bg-primary text-on-primary" : "text-on-surface hover:bg-secondary-container"}`}
            >
              EN
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4 text-on-surface">
            <span
              className="material-symbols-outlined hover:text-error transition-none cursor-pointer hidden sm:block"
              style={{ fontVariationSettings: "'FILL' 0" }}
              onClick={() => {
                setShowVideo(true);
                setTimeout(() => setShowVideo(false), 2000);
              }}
            >
              videocam
            </span>
            <span
              className="material-symbols-outlined hover:text-error transition-none cursor-pointer"
              style={{ fontVariationSettings: "'FILL' 0" }}
              onClick={() => {
                if (destructCounter === null) setDestructCounter(10);
              }}
            >
              radio_button_checked
            </span>
          </div>
        </div>
      </header>

      {/* Secret CCTV Video Popup */}
      {showVideo && (
        <div className="fixed inset-0 z-[999999] bg-black flex items-center justify-center overflow-hidden cursor-none pointer-events-auto">
          {/* OSD Overlays */}
          <div className="absolute top-8 left-8 text-white font-mono text-2xl md:text-4xl z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
            <span className="w-4 h-4 md:w-6 md:h-6 bg-red-600 rounded-full inline-block mr-3 animate-pulse shadow-[0_0_10px_rgba(255,0,0,1)]"></span>
            REC
          </div>
          <div className="absolute top-8 right-8 text-white font-mono text-2xl md:text-4xl z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
            CAM_SYS_OVERRIDE
          </div>
          <div className="absolute bottom-8 left-8 text-white font-mono text-xl z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
            {timeString}
          </div>

          {/* Glitchy CCTV feed */}
          <Image 
            src="/portfolio/POST_VHS_TRACKING_ERROR.png" 
            alt="CCTV OVERRIDE" 
            fill
            className="absolute inset-0 object-cover grayscale opacity-70 scale-110 animate-pulse"
          />

          {/* CRT Scanline Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay z-20" style={{
            backgroundImage: "linear-gradient(transparent 50%, rgba(0, 0, 0, 0.8) 50%)",
            backgroundSize: "100% 4px"
          }}></div>
          
          <div className="absolute inset-0 pointer-events-none z-20" style={{
            background: "radial-gradient(circle, transparent 30%, rgba(0,0,0,0.95) 100%)"
          }}></div>
        </div>
      )}

      {/* Self-Destruct Sequence */}
      {destructCounter !== null && (
        <div className="fixed inset-0 z-[9999999] bg-[#050505] text-[#ba1a1a] flex flex-col items-center justify-center overflow-hidden cursor-none pointer-events-auto font-data-mono">
          {destructCounter > 0 ? (
            <>
              <h1 className="text-4xl md:text-6xl font-black mb-8 animate-pulse text-center tracking-tighter drop-shadow-[0_0_10px_rgba(186,26,26,0.8)]">
                PROTOCOL: SELF-DESTRUCT
              </h1>
              <div className="text-[12rem] md:text-[20rem] leading-none font-black tabular-nums tracking-tighter drop-shadow-[0_0_20px_rgba(186,26,26,0.8)]">
                {String(destructCounter).padStart(2, '0')}
              </div>
              <p className="mt-8 text-xl md:text-3xl font-bold opacity-80 uppercase tracking-widest">
                {lang === "ru" ? "ИДЕТ УДАЛЕНИЕ ДАННЫХ..." : "PURGING ALL DATA..."}
              </p>
            </>
          ) : (
            <>
              <Image 
                src="/portfolio/POST_CORRUPTED_FILE.png" 
                alt="TERMINAL DESTROYED" 
                fill
                className="absolute inset-0 object-cover grayscale opacity-80 animate-pulse scale-110"
              />
              <div className="z-10 text-6xl md:text-9xl font-black text-[#ba1a1a] drop-shadow-[0_0_20px_rgba(186,26,26,1)] tracking-tighter text-center">
                SYSTEM<br/>PURGED
              </div>
            </>
          )}
          
          {/* CRT Scanline Overlay for Destruct */}
          <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay z-20" style={{
            backgroundImage: "linear-gradient(transparent 50%, rgba(0, 0, 0, 0.8) 50%)",
            backgroundSize: "100% 4px"
          }}></div>
          
          <div className={`absolute inset-0 pointer-events-none z-20 transition-opacity duration-1000 ${destructCounter === 0 ? 'opacity-100' : 'opacity-50'}`} style={{
            background: destructCounter === 0 ? "rgba(0,0,0,0.5)" : "radial-gradient(circle, transparent 30%, rgba(186,26,26,0.3) 100%)"
          }}></div>
        </div>
      )}
    </>
  );
}
