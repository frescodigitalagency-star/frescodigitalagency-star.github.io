"use client";

import { useState, KeyboardEvent, useEffect } from "react";
import { createPortal } from "react-dom";
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

        if (randomScenario === 2) {
          setTimeout(() => setPunishment(null), 2500);
        }
      }
    }
  };

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

      {/* CLASSIFIED DOSSIER / WARNING PLACARD LAYOUT */}
      <div className={`w-full max-w-4xl mx-auto flex flex-col font-data-mono transition-all duration-300 ${
        isMatrixMode ? "bg-black text-[#00FF00] font-mono" : "bg-[#B5B48B] text-[#553E16]"
      } ${isGlitchMode ? "animate-pulse blur-[2px] skew-x-2" : ""}`}>
        
        {/* Warning / Hazard Top Border */}
        {!isMatrixMode && (
          <div className="h-8 w-full border-b-[4px] border-[#553E16]" style={{
            backgroundImage: "repeating-linear-gradient(45deg, #553E16, #553E16 10px, transparent 10px, transparent 20px)"
          }}></div>
        )}

        <div className={`border-[4px] border-t-0 p-6 md:p-12 shadow-[8px_8px_0_rgba(0,0,0,0.2)] ${
          isMatrixMode ? "border-[#00FF00]" : "border-[#553E16]"
        }`}>
          
          {/* Dossier Header */}
          <div className={`flex flex-col md:flex-row justify-between items-start md:items-end border-b-[4px] pb-6 mb-10 ${
            isMatrixMode ? "border-[#00FF00]" : "border-[#553E16]"
          }`}>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2">
                [ DOCUMENT ID: TR-0X-PRT ]
              </div>
              <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">
                {t("protocol", "title")}
              </h1>
            </div>
            
            {!isMatrixMode && (
              <div className="border-4 border-error text-error p-2 font-bold uppercase text-xl mt-4 md:mt-0 transform rotate-[-5deg] self-start md:self-auto">
                RESTRICTED
              </div>
            )}
          </div>

          {/* Rules Section */}
          <div className="mb-16">
            <h2 className="text-xl font-bold uppercase mb-8 flex items-center">
              {!isMatrixMode && <span className="material-symbols-outlined mr-4 text-3xl">warning</span>}
              {t("protocol", "header")}
            </h2>
            
            <ul className="space-y-8 text-lg">
              <li className={`flex gap-6 items-start p-6 border-l-8 ${isMatrixMode ? "border-[#00FF00] bg-[#00FF00]/10" : "bg-[#553E16]/10 border-error"}`}>
                <span className={`font-bold mt-1 text-2xl ${isMatrixMode ? "text-[#00FF00]" : "text-error animate-pulse"}`}>01</span>
                <span className="font-bold uppercase leading-relaxed">{t("protocol", "p1")}</span>
              </li>
              <li className={`flex gap-6 items-start p-6 border-l-8 ${isMatrixMode ? "border-[#00FF00] bg-[#00FF00]/10" : "bg-[#553E16]/10 border-[#553E16]"}`}>
                <span className="font-bold mt-1 text-2xl opacity-50">02</span>
                <span className="leading-relaxed">{t("protocol", "p2")}</span>
              </li>
              <li className={`flex gap-6 items-start p-6 border-l-8 ${isMatrixMode ? "border-[#00FF00] bg-[#00FF00]/10" : "bg-[#553E16]/10 border-[#553E16]"}`}>
                <span className="font-bold mt-1 text-2xl opacity-50">03</span>
                <span className="leading-relaxed">{t("protocol", "p3")}</span>
              </li>
            </ul>
          </div>

          {/* EASTER EGG TERMINAL */}
          <div className={`mt-auto pt-10 border-t-[4px] border-dashed ${isMatrixMode ? "border-[#00FF00]" : "border-error"}`}>
            <div className="flex flex-col mb-4">
              <label className={`text-sm font-bold uppercase tracking-widest mb-4 flex items-center ${isMatrixMode ? "" : "text-error"}`}>
                <span className="material-symbols-outlined mr-2">admin_panel_settings</span>
                [ SYSTEM OVERRIDE / MANUAL INPUT ] - PRESS ENTER
              </label>
              <div className="flex items-center gap-4 bg-black p-4 border-2 border-transparent focus-within:border-white transition-all">
                <span className={`text-2xl font-bold ${isMatrixMode ? "text-[#00FF00]" : "text-error"}`}>{">"}</span>
                <input
                  type="text"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={lang === "ru" ? "ВВЕДИТЕ КОД И НАЖМИТЕ ENTER..." : "ENTER CODE AND PRESS ENTER..."}
                  className={`bg-transparent outline-none w-full text-xl md:text-2xl uppercase font-mono ${
                    isMatrixMode 
                      ? "text-[#00FF00] placeholder-[#00FF00]/30" 
                      : "text-error placeholder-error/30"
                  }`}
                  spellCheck="false"
                  autoComplete="off"
                />
              </div>
            </div>

            {/* Dynamic System Output */}
            {systemMessage && (
              <div className={`mt-6 p-6 border-4 font-bold text-xl uppercase ${isMatrixMode ? "border-[#00FF00] bg-[#00FF00]/10 text-[#00FF00]" : "border-error bg-error/10 text-error"} animate-pulse`}>
                SYS_RESP: {systemMessage}
              </div>
            )}
            
            {/* Failure Message for Scenario 1 */}
            {punishment === 1 && (
              <div className="mt-6 p-6 border-4 border-error bg-error/10 text-error font-bold uppercase animate-pulse text-xl">
                SYS_RESP: OVERLOAD DETECTED. INVALID TOKEN.
              </div>
            )}

            {/* Secret ASCII Logo */}
            {showTerreyaLogo && (
              <pre className="mt-12 text-[10px] md:text-sm leading-none opacity-80 whitespace-pre overflow-x-hidden font-mono flex justify-center">
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
        
        {/* Warning / Hazard Bottom Border */}
        {!isMatrixMode && (
          <div className="h-8 w-full border-t-[4px] border-[#553E16]" style={{
            backgroundImage: "repeating-linear-gradient(-45deg, #553E16, #553E16 10px, transparent 10px, transparent 20px)"
          }}></div>
        )}
      </div>
    </AppLayout>
  );
}
