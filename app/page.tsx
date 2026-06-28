"use client";

import { MonitorFrame } from "@/components/ui/MonitorFrame";
import { InteractiveTerminal } from "@/components/ui/InteractiveTerminal";
import { AppLayout } from "@/components/layout/AppLayout";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <AppLayout>
      <MonitorFrame title={t("home", "title")} status="ACTIVE" icon="door_front">
        <div className="w-full">
          <h2 className="text-headline-md font-data-mono uppercase mb-4 text-[#553E16]">
            {t("home", "welcome")}
          </h2>
          <div className="font-data-mono text-data-mono text-[#553E16]/80 mb-8">
            {t("home", "scroll")}
          </div>

          <div className="border border-[#553E16] p-4 bg-[#B5B48B]/10 max-w-2xl">
            <InteractiveTerminal />
          </div>
        </div>
      </MonitorFrame>
    </AppLayout>
  );
}
