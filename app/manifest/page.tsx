"use client";

import { MonitorFrame } from "@/components/ui/MonitorFrame";
import { AppLayout } from "@/components/layout/AppLayout";
import { useLanguage } from "@/i18n/LanguageContext";
import { useState } from "react";

export default function ManifestPage() {
  const { t } = useLanguage();
  const [selectedBlock, setSelectedBlock] = useState<"1" | "2" | "3" | null>(null);

  return (
    <AppLayout>
      <MonitorFrame title={t("manifest", "title")} status={t("manifest", "verified")} icon="assignment">
        <div className="text-[#553E16] font-data-mono w-full">
          <h2 className="text-headline-md uppercase mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>policy</span>
            {t("manifest", "header")}
          </h2>
          
          <div className="space-y-6 text-body-md border border-[#553E16] p-4 md:p-6 bg-[#B5B48B]/10 flex-1">
            <div className="flex flex-col gap-2 border-b border-[#553E16]/30 pb-4">
              <span className="font-bold opacity-70">{t("manifest", "origin")}</span>
              <span className="text-lg md:text-xl tracking-widest">{t("manifest", "origin_val")}</span>
            </div>
            
            <div className="flex flex-col gap-2 py-2">
              <span className="font-bold opacity-70">{t("manifest", "directive")}</span>
              <p className="leading-relaxed max-w-2xl font-bold">
                {t("manifest", "directive_val")}
              </p>
            </div>

            <div className="pt-4 border-t border-[#553E16] border-dashed space-y-6">
              <button 
                onClick={() => setSelectedBlock("1")}
                className="w-full text-left group border-l-4 border-[#553E16] pl-4 hover:bg-[#553E16]/10 py-2 transition-colors cursor-pointer block"
              >
                <h3 className="font-bold uppercase tracking-widest bg-[#553E16] text-[#B5B48B] inline-block px-2 py-1 mb-2 group-hover:bg-[#B5B48B] group-hover:text-[#553E16] transition-colors">
                  {t("manifest", "block1_title")}
                </h3>
                <p className="opacity-90">{t("manifest", "block1_desc")}</p>
              </button>

              <button 
                onClick={() => setSelectedBlock("2")}
                className="w-full text-left group border-l-4 border-[#553E16] pl-4 hover:bg-[#553E16]/10 py-2 transition-colors cursor-pointer block"
              >
                <h3 className="font-bold uppercase tracking-widest bg-[#553E16] text-[#B5B48B] inline-block px-2 py-1 mb-2 group-hover:bg-[#B5B48B] group-hover:text-[#553E16] transition-colors">
                  {t("manifest", "block2_title")}
                </h3>
                <p className="opacity-90">{t("manifest", "block2_desc")}</p>
              </button>

              <button 
                onClick={() => setSelectedBlock("3")}
                className="w-full text-left group border-l-4 border-[#553E16] pl-4 hover:bg-[#553E16]/10 py-2 transition-colors cursor-pointer block"
              >
                <h3 className="font-bold uppercase tracking-widest bg-[#553E16] text-[#B5B48B] inline-block px-2 py-1 mb-2 group-hover:bg-[#B5B48B] group-hover:text-[#553E16] transition-colors">
                  {t("manifest", "block3_title")}
                </h3>
                <p className="opacity-90">{t("manifest", "block3_desc")}</p>
              </button>
            </div>
          </div>
        </div>
      </MonitorFrame>

      {/* Dynamic Detail Modal */}
      {selectedBlock && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedBlock(null)}
        >
          <div 
            className="border border-[#553E16] bg-[#0A0A0A] p-6 max-w-3xl w-full text-[#B5B48B] font-data-mono relative shadow-[0_0_20px_rgba(85,62,22,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedBlock(null);
              }}
              className="absolute top-4 right-4 text-[#553E16] hover:text-[#B5B48B] transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h2 className="text-2xl font-bold uppercase tracking-widest mb-6 border-b border-[#553E16]/50 pb-2 flex items-center gap-3">
              <span className="material-symbols-outlined text-[#553E16]">
                {selectedBlock === "1" ? "terminal" : selectedBlock === "2" ? "brush" : "graphic_eq"}
              </span>
              {t("manifest", `block${selectedBlock}_title`)}
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              {t("manifest", `block${selectedBlock}_detail`)}
            </p>
          </div>
        </div>
      )}
    </AppLayout>
  );
}
