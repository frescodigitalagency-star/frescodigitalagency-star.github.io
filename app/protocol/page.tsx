"use client";

import { MonitorFrame } from "@/components/ui/MonitorFrame";
import { AppLayout } from "@/components/layout/AppLayout";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ProtocolPage() {
  const { t } = useLanguage();

  return (
    <AppLayout>
      <MonitorFrame title={t("protocol", "title")} status={t("protocol", "enforced")} icon="terminal">
        <div className="text-[#553E16] font-data-mono w-full">
          <h2 className="text-headline-md uppercase mb-6 flex items-center gap-3 border-b border-[#553E16] pb-2">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>gpp_maybe</span>
            {t("protocol", "header")}
          </h2>
          
          <ul className="space-y-6 text-body-md">
            <li className="flex gap-4 items-start p-4 bg-[#553E16]/10 border-l-4 border-[#553E16]">
              <span className="font-bold mt-1 text-error animate-pulse">!</span>
              <span>{t("protocol", "p1")}</span>
            </li>
            <li className="flex gap-4 items-start p-4 bg-[#553E16]/10 border-l-4 border-[#553E16]">
              <span className="font-bold mt-1 opacity-50">{">"}</span>
              <span>{t("protocol", "p2")}</span>
            </li>
            <li className="flex gap-4 items-start p-4 bg-[#553E16]/10 border-l-4 border-[#553E16]">
              <span className="font-bold mt-1 opacity-50">{">"}</span>
              <span>{t("protocol", "p3")}</span>
            </li>
          </ul>
        </div>
      </MonitorFrame>
    </AppLayout>
  );
}
