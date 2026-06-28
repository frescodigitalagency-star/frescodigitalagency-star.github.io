"use client";

import { useState } from "react";
import { MonitorFrame } from "@/components/ui/MonitorFrame";
import { AppLayout } from "@/components/layout/AppLayout";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ServicesPage() {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<number>(1);

  const TABS = [
    { id: 1, title: t("services", "block1"), key: "b1" },
    { id: 2, title: t("services", "block2"), key: "b2" },
    { id: 3, title: t("services", "block3"), key: "b3" },
    { id: 4, title: t("services", "block4"), key: "b4" },
    { id: 5, title: t("services", "packages"), key: "p" },
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 1:
        return (
          <div className="space-y-6 animate-pulse-fast">
            <ServiceItem title={t("services", "b1_1_title")} desc={t("services", "b1_1_desc")} price={t("services", "b1_1_price")} />
            <ServiceItem title={t("services", "b1_2_title")} desc={t("services", "b1_2_desc")} price={t("services", "b1_2_price")} />
            <ServiceItem title={t("services", "b1_3_title")} desc={t("services", "b1_3_desc")} price={t("services", "b1_3_price")} />
            <ServiceItem title={t("services", "b1_4_title")} desc={t("services", "b1_4_desc")} price={t("services", "b1_4_price")} />
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-pulse-fast">
            <ServiceItem title={t("services", "b2_1_title")} desc={t("services", "b2_1_desc")} price={t("services", "b2_1_price")} />
            <ServiceItem title={t("services", "b2_2_title")} desc={t("services", "b2_2_desc")} price={t("services", "b2_2_price")} />
            <ServiceItem title={t("services", "b2_3_title")} desc={t("services", "b2_3_desc")} price={t("services", "b2_3_price")} />
            <ServiceItem title={t("services", "b2_4_title")} desc={t("services", "b2_4_desc")} price={t("services", "b2_4_price")} />
            <ServiceItem title={t("services", "b2_5_title")} desc={t("services", "b2_5_desc")} price={t("services", "b2_5_price")} />
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-pulse-fast">
            <ServiceItem title={t("services", "b3_1_title")} desc={t("services", "b3_1_desc")} price={t("services", "b3_1_price")} />
            <ServiceItem title={t("services", "b3_2_title")} desc={t("services", "b3_2_desc")} price={t("services", "b3_2_price")} />
            <ServiceItem title={t("services", "b3_3_title")} desc={t("services", "b3_3_desc")} price={t("services", "b3_3_price")} />
          </div>
        );
      case 4:
        return (
          <div className="space-y-6 animate-pulse-fast">
            <ServiceItem title={t("services", "b4_1_title")} desc={t("services", "b4_1_desc")} price={t("services", "b4_1_price")} />
            <ServiceItem title={t("services", "b4_2_title")} desc={t("services", "b4_2_desc")} price={t("services", "b4_2_price")} />
          </div>
        );
      case 5:
        return (
          <div className="space-y-6 animate-pulse-fast">
            <div className="border-2 border-error p-4 bg-error/10 relative">
              <span className="absolute -top-3 left-4 bg-[#B5B48B] text-[#553E16] px-2 font-bold uppercase text-xs">BUNDLE_01</span>
              <h4 className="font-bold text-error">{t("services", "p1_title")}</h4>
              <p className="text-sm opacity-80 my-2">{t("services", "p1_desc")}</p>
              <p className="text-xs font-bold text-error mt-4">{t("services", "p1_price")}</p>
            </div>
            <div className="border-2 border-error p-4 bg-error/10 relative">
              <span className="absolute -top-3 left-4 bg-[#B5B48B] text-[#553E16] px-2 font-bold uppercase text-xs">BUNDLE_02</span>
              <h4 className="font-bold text-error">{t("services", "p2_title")}</h4>
              <p className="text-sm opacity-80 my-2">{t("services", "p2_desc")}</p>
              <p className="text-xs font-bold text-error mt-4">{t("services", "p2_price")}</p>
            </div>
            <div className="border-2 border-error p-4 bg-error/10 relative">
              <span className="absolute -top-3 left-4 bg-[#B5B48B] text-[#553E16] px-2 font-bold uppercase text-xs">BUNDLE_03</span>
              <h4 className="font-bold text-error">{t("services", "p3_title")}</h4>
              <p className="text-sm opacity-80 my-2">{t("services", "p3_desc")}</p>
              <p className="text-xs font-bold text-error mt-4">{t("services", "p3_price")}</p>
            </div>
          </div>
        );
    }
  };

  return (
    <AppLayout>
      <MonitorFrame title={t("services", "title")} status={t("services", "available")} icon="dns">
        <div className="text-[#553E16] font-data-mono w-full flex flex-col md:flex-row h-[65vh]">
          
          {/* DOS/BIOS Style Left Navigation */}
          <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-[#553E16] flex flex-col pr-0 md:pr-4 pb-4 md:pb-0 mb-4 md:mb-0 shrink-0">
            <h2 className="text-sm font-bold uppercase mb-4 opacity-70 tracking-widest bg-[#553E16] text-[#B5B48B] p-1">
              {lang === "ru" ? "ВЫБЕРИТЕ МОДУЛЬ:" : "SELECT MODULE:"}
            </h2>
            <div className="flex flex-col gap-2">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-left p-2 uppercase text-xs md:text-sm font-bold border transition-all ${
                    activeTab === tab.id 
                      ? "border-[#553E16] bg-[#553E16]/20 before:content-['>_'] before:mr-2" 
                      : "border-transparent opacity-60 hover:opacity-100 hover:border-[#553E16]/30 before:content-['[_'] after:content-['_]']"
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            <div className="mt-auto pt-4 text-xs opacity-50 border-t border-[#553E16] border-dashed">
              {t("services", "support")}
            </div>
          </div>

          {/* Details Content Panel */}
          <div className="w-full md:w-2/3 md:pl-6 overflow-y-auto custom-scrollbar relative">
            <div className="absolute top-0 right-0 text-xs opacity-50 font-bold">
              SYS.MEMORY_ADDR: 0x{activeTab.toString().padStart(4, "0")}A
            </div>
            <div className="mt-6 mb-8">
              {renderContent()}
            </div>
          </div>

        </div>
      </MonitorFrame>
    </AppLayout>
  );
}

function ServiceItem({ title, desc, price }: { title: string, desc: string, price: string }) {
  return (
    <div className="group border-l-2 border-[#553E16] pl-4 hover:border-l-8 transition-all hover:bg-[#553E16]/5 py-2">
      <h4 className="font-bold uppercase tracking-wide group-hover:text-error transition-colors">{title}</h4>
      <p className="text-sm opacity-80 my-2 max-w-xl">{desc}</p>
      <div className="flex items-center gap-2 mt-3">
        <span className="w-2 h-2 bg-[#553E16] inline-block animate-pulse"></span>
        <span className="text-xs font-bold uppercase tracking-widest bg-[#553E16] text-[#B5B48B] px-2 py-1">
          {price}
        </span>
      </div>
    </div>
  );
}

