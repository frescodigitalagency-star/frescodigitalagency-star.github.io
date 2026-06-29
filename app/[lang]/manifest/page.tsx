"use client";

import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ManifestPage() {
  const { t } = useLanguage();
  const [expandedBlock, setExpandedBlock] = useState<"1" | "2" | "3" | null>(null);

  const toggleBlock = (block: "1" | "2" | "3") => {
    setExpandedBlock(expandedBlock === block ? null : block);
  };

  return (
    <AppLayout>
      {/* MONOLITHIC POSTER LAYOUT (Inverted Colors) */}
      <div className="w-full max-w-5xl mx-auto flex flex-col font-data-mono bg-[#553E16] text-[#B5B48B] p-4 md:p-12 shadow-[16px_16px_0_rgba(0,0,0,0.3)]">
        
        {/* Massive Header */}
        <div className="border-b-[8px] border-[#B5B48B] pb-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mix-blend-difference">
            {t("manifest", "title")}
          </h1>
          <div className="text-right flex flex-col items-start md:items-end">
            <span className="bg-[#B5B48B] text-[#553E16] px-2 py-1 font-bold uppercase text-xs tracking-widest mb-2 animate-pulse">
              {t("manifest", "verified")}
            </span>
            <span className="text-sm opacity-80 uppercase tracking-widest">
              DOC.REF: MNFST-01
            </span>
          </div>
        </div>

        {/* Origin & Directive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 border-b-[4px] border-[#B5B48B]/30 pb-16">
          
          <div className="flex flex-col">
            <h2 className="text-sm font-bold opacity-50 uppercase tracking-widest mb-4 border-b border-[#B5B48B]/30 pb-2">
              {t("manifest", "origin")}
            </h2>
            <div className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
              {t("manifest", "origin_val")}
            </div>
            <div className="mt-8">
              <div className="w-24 h-24 border-4 border-[#B5B48B] rounded-full flex items-center justify-center opacity-80 transform rotate-12">
                <span className="material-symbols-outlined text-5xl">fingerprint</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col">
            <h2 className="text-sm font-bold opacity-50 uppercase tracking-widest mb-4 border-b border-[#B5B48B]/30 pb-2">
              {t("manifest", "directive")}
            </h2>
            <p className="text-xl md:text-2xl font-bold leading-snug">
              {t("manifest", "directive_val")}
            </p>
          </div>

        </div>

        {/* Brutalist Accordion Blocks */}
        <div className="flex flex-col gap-4">
          {(["1", "2", "3"] as const).map((blockId) => (
            <div 
              key={blockId} 
              className={`border-[4px] transition-all duration-300 ${
                expandedBlock === blockId 
                  ? "border-[#B5B48B] bg-[#B5B48B] text-[#553E16]" 
                  : "border-[#B5B48B] hover:bg-[#B5B48B]/10"
              }`}
            >
              <button 
                onClick={() => toggleBlock(blockId)}
                className="w-full text-left p-6 md:p-8 flex justify-between items-center outline-none cursor-pointer"
              >
                <div className="flex flex-col">
                  <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-2">
                    {t("manifest", `block${blockId}_title`)}
                  </h3>
                  <p className={`text-sm md:text-base font-bold uppercase tracking-widest ${expandedBlock === blockId ? "opacity-100" : "opacity-60"}`}>
                    {t("manifest", `block${blockId}_desc`)}
                  </p>
                </div>
                <span className={`material-symbols-outlined text-4xl transition-transform duration-300 ${expandedBlock === blockId ? "rotate-45" : ""}`}>
                  add
                </span>
              </button>
              
              {/* Expandable Detail Content */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedBlock === blockId ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}>
                <div className="p-6 md:p-8 pt-0 border-t-[4px] border-[#553E16]">
                  <p className="text-lg md:text-2xl leading-relaxed font-bold">
                    {t("manifest", `block${blockId}_detail`)}
                  </p>
                  
                  {/* Decorative barcode/stamp */}
                  <div className="mt-8 flex items-center justify-between opacity-50">
                    <div className="font-mono text-xs tracking-widest">SYS.ID: 0x{blockId}00F2</div>
                    <div className="flex gap-1 h-6">
                      <div className="w-1 bg-[#553E16]"></div>
                      <div className="w-2 bg-[#553E16]"></div>
                      <div className="w-1 bg-[#553E16]"></div>
                      <div className="w-3 bg-[#553E16]"></div>
                      <div className="w-1 bg-[#553E16]"></div>
                      <div className="w-4 bg-[#553E16]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </AppLayout>
  );
}
