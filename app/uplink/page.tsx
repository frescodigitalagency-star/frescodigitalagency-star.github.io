"use client";

import { MonitorFrame } from "@/components/ui/MonitorFrame";
import { AppLayout } from "@/components/layout/AppLayout";
import { useLanguage } from "@/i18n/LanguageContext";

export default function UplinkPage() {
  const { t } = useLanguage();

  return (
    <AppLayout>
      <MonitorFrame title={t("uplink", "title")} status="OFFLINE" icon="settings_input_antenna">
        <div className="text-[#553E16] font-data-mono w-full flex flex-col items-center justify-center text-center h-64">
          <span className="material-symbols-outlined text-6xl mb-4 animate-pulse" style={{ fontVariationSettings: "'FILL' 0" }}>
            satellite_alt
          </span>
          <h2 className="text-headline-md uppercase mb-2">
            {t("uplink", "connecting")}
          </h2>
          <div className="space-y-1 text-sm opacity-70">
            <p>{t("uplink", "ping")}</p>
            <p>{t("uplink", "loss")}</p>
          </div>
          <div className="mt-8 border border-[#553E16] bg-[#553E16]/10 px-4 py-2 text-xs uppercase tracking-widest">
            {t("uplink", "awaiting")}
          </div>
        </div>
      </MonitorFrame>
    </AppLayout>
  );
}
