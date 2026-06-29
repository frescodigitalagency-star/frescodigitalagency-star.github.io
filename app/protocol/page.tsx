"use client";

import { useState, KeyboardEvent, useEffect } from "react";
import { createPortal } from "react-dom";
import { MonitorFrame } from "@/components/ui/MonitorFrame";
import { AppLayout } from "@/components/layout/AppLayout";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ProtocolPage() {
  const { t, lang } = useLanguage();
  
  // Easter Egg States
  const [inputCode, setInputCode] = useState("");
  const [isMatrixMode, setIsMatrixMode] = useState(false);
  const [isGlitchMode, setIsGlitchMode] = useState(false);
  const [systemMessage, setSystemMessage] = useState("");
  const [showTerreyaLogo, setShowTerreyaLogo] = useState(false);

  // Punishment States
  const [punishment, setPunishment] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const resetStates = () => {
    setIsMatrixMode(false);
    setIsGlitchMode(false);
    setSystemMessage("");
    setShowTerreyaLogo(false);
    setPunishment(null);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const code = inputCode.trim().toUpperCase();
      resetStates();

      if (!code) return;

      // Check for Easter Eggs
      if (code === "MATRIX") {
        setIsMatrixMode(true);
        setSystemMessage("WAKE UP, NEO...");
      } else if (code === "GLITCH") {
        setIsGlitchMode(true);
        setSystemMessage("CRITICAL ERROR: RENDERING MODULE FAILURE");
      } else if (code === "WHOAMI") {
        setSystemMessage("UNREGISTERED ENTITY DETECTED. INITIATING TRACE... TRACE FAILED.");
      } else if (code === "TERREYA" || code === "AVRALAB") {
        setShowTerreyaLogo(true);
        setSystemMessage("ACCESS GRANTED: LEVEL-5 CLEARANCE. WELCOME TO THE ARCHIVE.");
      } else {
        // INVALID CODE: Trigger random punishment (1 to 5)
        const randomScenario = Math.floor(Math.random() * 5) + 1;
        setPunishment(randomScenario);
        setInputCode(""); // clear input

        // For scenario 2 (Turn off/on), auto reset after 2 seconds
        if (randomScenario === 2) {
          setTimeout(() => setPunishment(null), 2500);
        }
      }
    }
  };

  // Dynamic classes for Easter Eggs
  const containerClasses = `text-[#553E16] font-data-mono w-full transition-all duration-300 ${
    isMatrixMode ? "text-[#00FF00] font-mono tracking-widest bg-black p-4" : ""
  } ${isGlitchMode ? "animate-pulse blur-[2px] skew-x-2" : ""}`;

  return (
    <AppLayout>
      {/* PUNISHMENT OVERLAYS (PORTALED TO BODY TO GUARANTEE FULLSCREEN) */}
      {mounted && punishment && createPortal(
        <>
          {/* SCENARIO 1: FULL SCREEN OVERLOAD (BACKDROP) */}
          {punishment === 1 && (
            <div className="fixed inset-0 z-[99999] backdrop-blur-md backdrop-contrast-200 backdrop-saturate-200 bg-white/10 pointer-events-none animate-pulse"></div>
          )}

          {/* SCENARIO 2: TURN OFF AND ON */}
          {punishment === 2 && (
            <div className="fixed inset-0 z-[99999] bg-black animate-pulse flex items-center justify-center">
              <div className="w-1 h-1 bg-white rounded-full animate-ping"></div>
            </div>
          )}

          {/* SCENARIO 3: FULL SCREEN ALERT */}
          {punishment === 3 && (
            <div className="fixed inset-0 z-[99999] bg-red-600/90 flex flex-col items-center justify-center text-black font-data-mono cursor-pointer" onClick={() => setPunishment(null)}>
              <span className="material-symbols-outlined text-9xl mb-8 animate-bounce">warning</span>
              <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter text-center">SYSTEM OVERLOAD</h1>
              <p className="mt-8 text-2xl font-bold border-b-2 border-black pb-1 uppercase">Click anywhere to abort</p>
            </div>
          )}

          {/* SCENARIO 4: FAKE 404 */}
          {punishment === 4 && (
            <div className="fixed inset-0 z-[99999] bg-blue-800 text-white font-mono flex flex-col p-8 md:p-24 cursor-pointer" onClick={() => setPunishment(null)}>
              <div className="bg-white text-blue-800 px-4 py-1 self-start font-bold mb-12">Terreya OS</div>
              <h1 className="text-4xl mb-8">A fatal exception 404 has occurred at 0028:C0011E36.</h1>
              <p className="text-xl mb-4">* The requested override code does not exist.</p>
              <p className="text-xl mb-4">* Your session is unstable.</p>
              <p className="text-xl mb-12">* Press any key (or click) to terminate the current application.</p>
              <p className="text-xl animate-pulse">Press any key to continue _</p>
            </div>
          )}

          {/* SCENARIO 5: KERNEL PANIC TEXT */}
          {punishment === 5 && (
            <div className="fixed inset-0 z-[99999] bg-black text-[#00FF00] font-mono p-4 overflow-hidden text-sm cursor-pointer opacity-90" onClick={() => setPunishment(null)}>
              {Array.from({ length: 50 }).map((_, i) => (
                <div key={i} className="whitespace-pre">
                  [{(Math.random() * 1000).toFixed(4)}] kernel_panic: CPU {i % 4} unable to parse override token. Dumping memory: 0x{Math.random().toString(16).substr(2, 8).toUpperCase()}...
                </div>
              ))}
              <div className="mt-8 text-red-500 font-bold text-2xl animate-pulse">SYSTEM HALTED. CLICK TO REBOOT.</div>
            </div>
          )}
        </>,
        document.body
      )}

      <MonitorFrame title={t("protocol", "title")} status={t("protocol", "enforced")} icon="terminal">
        <div className={containerClasses}>
          <h2 className={`text-headline-md uppercase mb-6 flex items-center gap-3 border-b pb-2 ${isMatrixMode ? "border-[#00FF00]" : "border-[#553E16]"}`}>
            {!isMatrixMode && <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>gpp_maybe</span>}
            {t("protocol", "header")}
          </h2>
          
          <ul className="space-y-6 text-body-md mb-12">
            <li className={`flex gap-4 items-start p-4 border-l-4 ${isMatrixMode ? "border-[#00FF00] bg-[#00FF00]/10" : "bg-[#553E16]/10 border-[#553E16]"}`}>
              <span className={`font-bold mt-1 ${isMatrixMode ? "text-[#00FF00]" : "text-error animate-pulse"}`}>!</span>
              <span>{t("protocol", "p1")}</span>
            </li>
            <li className={`flex gap-4 items-start p-4 border-l-4 ${isMatrixMode ? "border-[#00FF00] bg-[#00FF00]/10" : "bg-[#553E16]/10 border-[#553E16]"}`}>
              <span className="font-bold mt-1 opacity-50">{">"}</span>
              <span>{t("protocol", "p2")}</span>
            </li>
            <li className={`flex gap-4 items-start p-4 border-l-4 ${isMatrixMode ? "border-[#00FF00] bg-[#00FF00]/10" : "bg-[#553E16]/10 border-[#553E16]"}`}>
              <span className="font-bold mt-1 opacity-50">{">"}</span>
              <span>{t("protocol", "p3")}</span>
            </li>
          </ul>

          {/* EASTER EGG TERMINAL */}
          <div className={`mt-16 pt-8 border-t-2 border-dashed ${isMatrixMode ? "border-[#00FF00]/30" : "border-[#553E16]/30"}`}>
            <div className="flex flex-col mb-4">
              <label className="text-xs opacity-50 uppercase tracking-widest mb-2">
                [ SYSTEM OVERRIDE / MANUAL INPUT ] - PRESS ENTER
              </label>
              <div className="flex items-center gap-4">
                <span className={`text-xl font-bold ${isMatrixMode ? "text-[#00FF00]" : "text-error"}`}>{">"}</span>
                <input
                  type="text"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={lang === "ru" ? "ВВЕДИТЕ КОД И НАЖМИТЕ ENTER..." : "ENTER CODE AND PRESS ENTER..."}
                  className={`bg-transparent border-b-2 outline-none w-full max-w-sm text-xl uppercase ${
                    isMatrixMode 
                      ? "border-[#00FF00] text-[#00FF00] placeholder-[#00FF00]/30" 
                      : "border-[#553E16]/50 text-[#553E16] placeholder-[#553E16]/30 focus:border-[#553E16]"
                  }`}
                  spellCheck="false"
                  autoComplete="off"
                />
              </div>
            </div>

            {/* Dynamic System Output */}
            {systemMessage && (
              <div className={`mt-6 p-4 border ${isMatrixMode ? "border-[#00FF00] bg-[#00FF00]/10 text-[#00FF00]" : "border-[#553E16] bg-[#553E16]/10 text-[#553E16]"} animate-pulse`}>
                <span className="font-bold mr-2">SYS_RESP:</span>
                {systemMessage}
              </div>
            )}
            
            {/* Failure Message for Scenario 1 */}
            {punishment === 1 && (
              <div className="mt-6 p-4 border border-error bg-error/10 text-error font-bold uppercase animate-pulse">
                SYS_RESP: OVERLOAD DETECTED. INVALID TOKEN.
              </div>
            )}

            {/* Secret ASCII Logo */}
            {showTerreyaLogo && (
              <pre className="mt-8 text-[10px] md:text-sm leading-none opacity-80 whitespace-pre overflow-x-hidden">
{`
  _____  _____  ____  ____  _____  __  __  __   
 |_   _||  ___||  _ \\|  _ \\|  ___| \\ \\/ / /  \\  
   | |  | |__  | |_) | |_) | |__    \\  / / /\\ \\ 
   | |  |  __| |  _ <|  _ <|  __|   /  \\/ ____ \\
   | |  | |___ | | \\ \\ | \\ \\ |___  / /\\ \\/    \\ \\
   |_|  |_____||_|  \\_\\_|  \\_\\_____|/_/  \\_\\/      \\_\\
                                                    
          [ LIMINAL ARCHIVE EST. 2026 ]
`}
              </pre>
            )}
          </div>
        </div>
      </MonitorFrame>
    </AppLayout>
  );
}
