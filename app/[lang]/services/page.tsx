"use client";

import { useState } from "react";
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
            <div className="border-2 border-error p-4 bg-error/10 relative mt-4 shadow-[4px_4px_0_#553E16]">
              <span className="absolute -top-3 left-4 bg-error text-white px-2 font-bold uppercase text-xs">BUNDLE_01</span>
              <h4 className="font-bold text-error">{t("services", "p1_title")}</h4>
              <p className="text-sm opacity-80 my-2">{t("services", "p1_desc")}</p>
              <p className="text-xs font-bold text-error mt-4 bg-[#553E16] inline-block px-2 py-1 text-[#B5B48B]">{t("services", "p1_price")}</p>
            </div>
            <div className="border-2 border-error p-4 bg-error/10 relative mt-6 shadow-[4px_4px_0_#553E16]">
              <span className="absolute -top-3 left-4 bg-error text-white px-2 font-bold uppercase text-xs">BUNDLE_02</span>
              <h4 className="font-bold text-error">{t("services", "p2_title")}</h4>
              <p className="text-sm opacity-80 my-2">{t("services", "p2_desc")}</p>
              <p className="text-xs font-bold text-error mt-4 bg-[#553E16] inline-block px-2 py-1 text-[#B5B48B]">{t("services", "p2_price")}</p>
            </div>
            <div className="border-2 border-error p-4 bg-error/10 relative mt-6 shadow-[4px_4px_0_#553E16]">
              <span className="absolute -top-3 left-4 bg-error text-white px-2 font-bold uppercase text-xs">BUNDLE_03</span>
              <h4 className="font-bold text-error">{t("services", "p3_title")}</h4>
              <p className="text-sm opacity-80 my-2">{t("services", "p3_desc")}</p>
              <p className="text-xs font-bold text-error mt-4 bg-[#553E16] inline-block px-2 py-1 text-[#B5B48B]">{t("services", "p3_price")}</p>
            </div>
          </div>
        );
    }
  };

  return (
    <AppLayout>
      <main className="w-full max-w-6xl mx-auto flex flex-col font-data-mono">
        <h1 className="sr-only">{t("services", "title")}</h1>
        
        {/* FOLDER TAB */}
        <div className="flex items-end">
          <div className="border-t-[3px] border-l-[3px] border-r-[3px] border-[#553E16] px-6 md:px-12 py-3 bg-[#553E16] text-[#B5B48B] font-bold uppercase tracking-widest text-lg md:text-xl flex items-center relative z-10 skew-x-[-10deg] ml-4 origin-bottom shadow-[-4px_-4px_0_rgba(0,0,0,0.1)]">
            <div className="skew-x-[10deg] flex items-center">
              <span className="material-symbols-outlined mr-3 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>folder_open</span>
              DIR: {t("services", "title")}
            </div>
          </div>
          <div className="flex-1 border-b-[3px] border-[#553E16] relative z-0"></div>
        </div>

        {/* FOLDER BODY */}
        <section className="border-[3px] border-t-0 border-[#553E16] bg-[#B5B48B] p-4 md:p-8 shadow-[8px_8px_0_rgba(0,0,0,0.2)]">
          <div className="w-full flex flex-col md:flex-row min-h-[60vh]">
            
            {/* DOS/BIOS Style Left Navigation */}
            <nav aria-label="Services Navigation" className="w-full md:w-1/3 border-b-2 md:border-b-0 md:border-r-2 border-[#553E16] flex flex-col pr-0 md:pr-6 pb-6 md:pb-0 mb-6 md:mb-0 shrink-0">
              <h2 className="text-sm font-bold uppercase mb-6 opacity-70 tracking-widest border-b border-[#553E16] pb-2">
                {lang === "ru" ? "ИЕРАРХИЯ ПАПОК:" : "FOLDER HIERARCHY:"}
              </h2>
              <div className="flex flex-col gap-3">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-left p-3 uppercase text-xs md:text-sm font-bold border-2 transition-all flex items-center group ${
                      activeTab === tab.id 
                        ? "border-[#553E16] bg-[#553E16] text-[#B5B48B]" 
                        : "border-[#553E16]/30 text-[#553E16] hover:border-[#553E16]"
                    }`}
                  >
                    <span className="material-symbols-outlined mr-3 text-lg opacity-80 group-hover:scale-110 transition-transform">
                      {activeTab === tab.id ? "folder_open" : "folder"}
                    </span>
                    {tab.title}
                  </button>
                ))}
              </div>
              <div className="mt-auto pt-6 text-xs font-bold opacity-50 border-t-2 border-[#553E16] border-dashed">
                [ {t("services", "available")} ]
                <br/>
                {t("services", "support")}
              </div>
            </nav>

            {/* Details Content Panel */}
            <article aria-labelledby="service-panel-title" className="w-full md:w-2/3 md:pl-8 overflow-y-auto custom-scrollbar relative">
              <div className="absolute top-0 right-0 text-xs font-bold bg-[#553E16]/10 px-2 py-1">
                INDEX_FILE: 0x{activeTab.toString().padStart(4, "0")}A.dat
              </div>
              <div className="mt-8 mb-8">
                {renderContent()}
              </div>
            </article>

          </div>
        </section>
      </main>
    </AppLayout>
  );
}

function ServiceItem({ title, desc, price }: { title: string, desc: string, price: string }) {
  return (
    <article className="group border-b-2 border-[#553E16] border-dashed pb-6 hover:bg-[#553E16]/5 transition-all p-2 -mx-2">
      <h4 className="font-bold uppercase tracking-wide group-hover:text-error transition-colors flex items-center">
        <span className="material-symbols-outlined mr-2 text-sm opacity-50">description</span>
        {title}
      </h4>
      <p className="text-sm opacity-80 my-2 max-w-xl pl-6">{desc}</p>
      <div className="flex items-center gap-2 mt-3 pl-6">
        <span className="w-2 h-2 rounded-full bg-[#553E16] inline-block animate-pulse"></span>
        <span className="text-xs font-bold uppercase tracking-widest bg-[#553E16] text-[#B5B48B] px-2 py-1 shadow-[2px_2px_0_rgba(0,0,0,0.1)]">
          {price}
        </span>
      </div>
    </article>
  );
}
