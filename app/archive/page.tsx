"use client";

import { MonitorFrame } from "@/components/ui/MonitorFrame";
import { AppLayout } from "@/components/layout/AppLayout";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ArchivePage() {
  const { t } = useLanguage();

  return (
    <AppLayout>
      <MonitorFrame title={t("archive", "title")} status="INDEXED" icon="inventory_2">
        <div className="text-[#553E16] font-data-mono w-full flex flex-col h-full">
          <div className="flex justify-between items-end mb-4 border-b border-[#553E16] pb-2">
            <h2 className="text-headline-md uppercase">{t("archive", "title")}</h2>
            <div className="text-sm opacity-70 animate-pulse">{t("archive", "searching")}...</div>
          </div>
          
          <div className="flex gap-4 mb-6">
            <div className="flex-1 border border-[#553E16] bg-[#B5B48B]/10 flex items-center p-2">
              <span className="opacity-50 mr-2">{">"}</span>
              <span className="opacity-50">{t("archive", "query")}</span>
              <span className="ml-2 w-2 h-4 bg-[#553E16] animate-pulse"></span>
            </div>
          </div>

          <div className="flex-1 border border-[#553E16] bg-[#B5B48B]/5">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#553E16] text-[#B5B48B]">
                <tr>
                  <th className="p-2 font-normal">{t("archive", "id")}</th>
                  <th className="p-2 font-normal">{t("archive", "type")}</th>
                  <th className="p-2 font-normal">{t("archive", "status")}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#553E16]/30 hover:bg-[#553E16]/10 cursor-pointer transition-colors">
                  <td className="p-2">31e7b34f8c6d45</td>
                  <td className="p-2">MANIFEST</td>
                  <td className="p-2">SECURE</td>
                </tr>
                <tr className="border-b border-[#553E16]/30 hover:bg-[#553E16]/10 cursor-pointer transition-colors">
                  <td className="p-2">a967abba53d342</td>
                  <td className="p-2">THRESHOLD</td>
                  <td className="p-2">ACTIVE</td>
                </tr>
                <tr className="border-b border-[#553E16]/30 hover:bg-[#553E16]/10 cursor-pointer transition-colors">
                  <td className="p-2 text-error">84de233c6e8c45</td>
                  <td className="p-2 text-error">PROTOCOL</td>
                  <td className="p-2 text-error animate-pulse">BREACH</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </MonitorFrame>
    </AppLayout>
  );
}
