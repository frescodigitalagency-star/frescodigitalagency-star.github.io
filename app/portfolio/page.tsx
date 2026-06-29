"use client";

import { MonitorFrame } from "@/components/ui/MonitorFrame";
import Image from "next/image";
import { AppLayout } from "@/components/layout/AppLayout";
import { useLanguage } from "@/i18n/LanguageContext";

// Reading from public/portfolio
const PORTFOLIO_ITEMS = [
  { id: "ADAM_AUDIO", src: "https://www.adam-audio.com/content/uploads/2018/03/adam-audio-t5v-studio-monitor-speaker-front-1024x1024.png", title: "ADAM AUDIO CATALOG", link: "https://frescodigitalagency-star.github.io/adam-audio-catalog/" },
  { id: "BIOS_SETUP", src: "/portfolio/POST_BIOS_SETUP.png", title: "BIOS" },
  { id: "SURVEILLANCE_FEED", src: "/portfolio/POST_SURVEILLANCE_FEED.png", title: "CCTV" },
  { id: "MACRO_CRT", src: "/portfolio/POST_MACRO_CRT.png", title: "CRT ZOOM" },
  { id: "REDACTED_DOCUMENT", src: "/portfolio/POST_REDACTED_DOCUMENT.png", title: "REDACTED" },
  { id: "INTERCOM_SPEAKER", src: "/portfolio/POST_INTERCOM_SPEAKER.png", title: "INTERCOM" },
  { id: "VHS_TRACKING_ERROR", src: "/portfolio/POST_VHS_TRACKING_ERROR.png", title: "VHS ERROR" }
];

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
                  <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#553E16]/50 grayscale group-hover:grayscale-0 transition-all duration-500 bg-black/5">
                    <Image 
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover mix-blend-multiply p-4"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
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
