"use client";

import { InteractiveTerminal } from "@/components/ui/InteractiveTerminal";
import { AppLayout } from "@/components/layout/AppLayout";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Home() {
  const { t, lang } = useLanguage();

  return (
    <AppLayout>
      <div className="w-full h-full min-h-[75vh] flex items-center justify-center font-data-mono p-4">
        
        {/* Main Gateway Terminal Block */}
        <div className="w-full max-w-4xl bg-[#B5B48B] border-[6px] border-[#553E16] shadow-[12px_12px_0_rgba(85,62,22,1)] p-4 md:p-8 relative">
          
          {/* Top Bar */}
          <div className="border-b-[4px] border-[#553E16] pb-4 mb-8 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-4xl animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>
                lock
              </span>
              <div>
                <h1 className="text-2xl md:text-4xl font-bold uppercase tracking-widest text-[#553E16]">
                  {t("home", "title")}
                </h1>
                <div className="text-xs font-bold opacity-70 tracking-widest">
                  SECURE_GATEWAY_V1.0
                </div>
              </div>
            </div>
            <div className="text-right hidden md:block">
              <div className="text-sm font-bold opacity-80 uppercase">STATUS: ACTIVE</div>
              <div className="text-xs opacity-50">NODE: 88.X.01</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left Column: Intro Text */}
            <div className="flex flex-col justify-center border-r-0 md:border-r-[4px] border-[#553E16] pr-0 md:pr-8 border-dashed">
              <h2 className="text-headline-md font-bold uppercase mb-6 text-[#553E16] flex items-start gap-2">
                <span className="text-error animate-pulse">■</span>
                {t("home", "welcome")}
              </h2>
              <p className="text-[#553E16]/80 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
                {t("home", "scroll")}
              </p>
              
              <div className="mt-auto border-t-[4px] border-[#553E16] pt-4 flex gap-4">
                <div className="w-1/2 h-4 bg-[#553E16] opacity-20"></div>
                <div className="w-1/4 h-4 bg-[#553E16] opacity-50"></div>
                <div className="w-1/4 h-4 bg-error animate-pulse"></div>
              </div>
            </div>

            {/* Right Column: Terminal */}
            <div className="bg-black p-4 border-[4px] border-[#553E16] relative shadow-inner">
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20" style={{
                backgroundImage: "linear-gradient(transparent 50%, rgba(0, 0, 0, 0.25) 50%)",
                backgroundSize: "100% 4px"
              }}></div>
              
              <div className="text-xs text-[#00FF00] font-mono opacity-50 mb-2 border-b border-[#00FF00]/30 pb-2">
                {lang === "ru" ? "ИНИЦИАЛИЗАЦИЯ ИНТЕРФЕЙСА..." : "INITIALIZING INTERFACE..."}
              </div>
              
              <div className="h-[250px] md:h-[300px]">
                {/* Wrap the InteractiveTerminal and force it to use green text instead of brown */}
                <div className="interactive-terminal-override w-full h-full text-[#00FF00]">
                  <InteractiveTerminal />
                </div>
              </div>
            </div>
            
          </div>
          
          {/* Decorative Corner Elements */}
          <div className="absolute top-2 right-2 w-4 h-4 border-t-4 border-r-4 border-[#553E16]"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-4 border-l-4 border-[#553E16]"></div>
        </div>
        
      </div>
    </AppLayout>
  );
}
