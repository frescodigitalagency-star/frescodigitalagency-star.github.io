"use client";

import { useState, useEffect } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useLanguage } from "@/i18n/LanguageContext";

export default function UplinkPage() {
  const { t, lang } = useLanguage();

  const [isConnected, setIsConnected] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  // Hacker terminal boot sequence
  useEffect(() => {
    const bootLogs = [
      "INITIALIZING SECURE UPLINK...",
      "ESTABLISHING HANDSHAKE PROTOCOL...",
      "BYPASSING FIREWALL [ Node 88.X.01 ]...",
      "DECRYPTING PGP KEYS...",
      "CONNECTION ESTABLISHED."
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < bootLogs.length) {
        setLogs(prev => [...prev, bootLogs[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => setIsConnected(true), 500);
      }
    }, 600); // Add a new log every 600ms

    return () => clearInterval(interval);
  }, []);

  return (
    <AppLayout>
      <div className="w-full min-h-[80vh] bg-black text-[#00FF00] font-mono p-4 md:p-8 border border-[#00FF00]/30 shadow-[0_0_20px_rgba(0,255,0,0.1)] flex flex-col relative overflow-hidden">
        
        {/* Terminal Header */}
        <div className="flex justify-between items-center border-b border-[#00FF00]/30 pb-2 mb-6 text-sm opacity-70">
          <span>{lang === "ru" ? "ТЕРМИНАЛ СВЯЗИ V2.0" : "UPLINK TERMINAL V2.0"}</span>
          <span className="animate-pulse">_ROOT_ACCESS</span>
        </div>

        {/* Boot Logs Sequence */}
        <div className="flex flex-col gap-2 mb-8 opacity-80 text-sm md:text-base">
          {logs.map((log, index) => (
            <div key={index} className="flex gap-4">
              <span className="opacity-50">[{new Date().toISOString().split('T')[1].slice(0,8)}]</span>
              <span>{log}</span>
            </div>
          ))}
          {!isConnected && (
            <div className="flex gap-4 animate-pulse">
              <span className="opacity-50">[--:--:--]</span>
              <span>_</span>
            </div>
          )}
        </div>

        {/* Connected State Content */}
        {isConnected && (
          <div className="flex flex-col animate-fade-in flex-1">
            <h1 className="text-3xl md:text-5xl font-bold uppercase mb-8 tracking-tighter border-l-4 border-[#00FF00] pl-4">
              {lang === "ru" ? "КАНАЛ ОТКРЫТ" : "CHANNEL OPEN"}
            </h1>
            
            <div className="flex flex-col gap-6 w-full max-w-2xl mt-4">
              <a 
                href="mailto:frescodigitalagency@gmail.com"
                className="flex items-center justify-between border border-[#00FF00]/50 bg-[#00FF00]/5 p-4 hover:bg-[#00FF00] hover:text-black transition-all group"
              >
                <div className="flex flex-col items-start text-left">
                  <span className="text-xs uppercase tracking-widest opacity-70 mb-1">E-MAIL PROTOCOL</span>
                  <span className="text-lg font-bold">frescodigitalagency@gmail.com</span>
                </div>
                <span className="font-bold text-2xl group-hover:translate-x-1 transition-transform">
                  {">"}
                </span>
              </a>

              <a 
                href="https://t.me/D_rag"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border border-[#00FF00]/50 bg-[#00FF00]/5 p-4 hover:bg-[#00FF00] hover:text-black transition-all group"
              >
                <div className="flex flex-col items-start text-left">
                  <span className="text-xs uppercase tracking-widest opacity-70 mb-1">SECURE ENCRYPTED CHANNEL</span>
                  <span className="text-lg font-bold">@D_rag (Telegram)</span>
                </div>
                <span className="font-bold text-2xl group-hover:translate-x-1 transition-transform">
                  {">"}
                </span>
              </a>
            </div>
            
            <div className="mt-auto pt-12 text-xs opacity-50 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00FF00] animate-pulse"></span>
              {lang === "ru" ? "ОЖИДАНИЕ ВВОДА ПОЛЬЗОВАТЕЛЯ..." : "WAITING FOR USER INPUT..."}
            </div>
          </div>
        )}

      </div>
    </AppLayout>
  );
}
