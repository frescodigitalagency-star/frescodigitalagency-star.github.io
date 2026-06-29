"use client";

import { MonitorFrame } from "@/components/ui/MonitorFrame";
import Image from "next/image";
import { AppLayout } from "@/components/layout/AppLayout";
import { useLanguage } from "@/i18n/LanguageContext";

import PORTFOLIO_ITEMS from "@/data/portfolio.json";

export default function PortfolioPage() {
  const { t } = useLanguage();

  return (
    <AppLayout>
      <MonitorFrame title={t("portfolio", "title")} status={t("portfolio", "indexed")} icon="folder_special">
        <div className="w-full text-[#553E16]">
          <h2 className="text-headline-md font-data-mono uppercase mb-6 border-b border-[#553E16] pb-2">
            {t("portfolio", "header")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {PORTFOLIO_ITEMS.map((item) => {
              const content = (
                <>
                  <div className={`relative aspect-[4/5] w-full overflow-hidden border border-[#553E16]/50 transition-all duration-500 ${['ADAM_AUDIO', 'AVRALAB'].includes(item.id) ? 'bg-[#553E16]/10' : 'grayscale group-hover:grayscale-0 bg-black/5'}`}>
                    {['ADAM_AUDIO', 'AVRALAB'].includes(item.id) ? (
                      <img 
                        src={item.src}
                        alt={item.title}
                        className={`object-cover w-full h-full ${item.id === 'ADAM_AUDIO' ? 'object-left-top' : ''}`}
                      />
                    ) : (
                      <Image 
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover mix-blend-multiply"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    )}
                  </div>
                  <div className="mt-2 text-interface-label font-data-mono font-bold">
                    {item.title}
                  </div>
                </>
              );

              return item.link ? (
                <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="border border-[#553E16] bg-[#B5B48B]/10 p-2 group hover:bg-[#553E16]/20 transition-all cursor-pointer block">
                  {content}
                </a>
              ) : (
                <div key={item.id} className="border border-[#553E16] bg-[#B5B48B]/10 p-2 group hover:bg-[#553E16]/20 transition-all cursor-pointer">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </MonitorFrame>
    </AppLayout>
  );
}
