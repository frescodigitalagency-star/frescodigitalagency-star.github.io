"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const [timeString, setTimeString] = useState("--:--:--");
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    function updateClock() {
      const now = new Date();
      setTimeString(now.toTimeString().split(" ")[0]);
    }
    const interval = setInterval(updateClock, 1000);
    updateClock();
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex justify-between items-center w-full px-4 md:px-margin-page py-unit h-16 bg-surface dark:bg-surface text-primary dark:text-primary-fixed font-data-mono text-data-mono border-b border-outline shadow-[2px_2px_0px_0px_#553E16] fixed top-0 z-50">
      
      {/* Mobile Burger Menu */}
      <button 
        onClick={onMenuClick}
        className="md:hidden flex items-center justify-center p-2 mr-2 border border-outline bg-surface-container active:bg-primary active:text-on-primary"
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
            className="material-symbols-outlined hover:text-primary-container transition-none cursor-pointer hidden sm:block"
            style={{ fontVariationSettings: "'FILL' 0" }}
          >
            videocam
          </span>
          <span
            className="material-symbols-outlined hover:text-primary-container transition-none cursor-pointer"
            style={{ fontVariationSettings: "'FILL' 0" }}
          >
            radio_button_checked
          </span>
        </div>
      </div>
    </header>
  );
}
