"use client";

import { useEffect, useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useLanguage } from "@/i18n/LanguageContext";
import Image from "next/image";

interface LocalizedText {
  en: string;
  ru: string;
}

interface LogEntry {
  id: string;
  date: string;
  title: LocalizedText;
  content: LocalizedText;
  imageUrl?: string;
  links?: {
    label: LocalizedText;
    url: string;
  }[];
}

export default function ArchivePage() {
  const { t, lang } = useLanguage();
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch logs from API (with cache buster to prevent stale static data)
    fetch("/api/archive?t=" + Date.now())
      .then((res) => res.json())
      .then((data) => {
        setLogs(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch logs", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <AppLayout>
      <div className="w-full max-w-4xl mx-auto text-[#553E16] font-data-mono flex flex-col pt-8">
        {/* Page Header (No Monitor Frame) */}
        <div className="mb-12 border-b-2 border-[#553E16] pb-4 flex justify-between items-end">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">
              {t("archive", "title")}
            </h1>
            <div className="text-sm opacity-70 mt-2 uppercase">
              {lang === "ru" ? "ИСТОРИЧЕСКИЙ ЖУРНАЛ СОБЫТИЙ" : "HISTORICAL EVENT LOG"}
            </div>
          </div>
          <div className="text-xs opacity-50 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-[#553E16] rounded-full animate-pulse"></span>
            SYS.SYNC
          </div>
        </div>

        {/* Logs Feed */}
        <div className="flex flex-col gap-12 pb-12">
          {isLoading ? (
            <div className="flex items-center gap-4 text-xl opacity-70">
              <span className="material-symbols-outlined animate-spin" style={{ fontVariationSettings: "'FILL' 1" }}>
                sync
              </span>
              {t("archive", "searching")}...
            </div>
          ) : logs.length === 0 ? (
            <div className="text-lg opacity-50">NO LOGS FOUND.</div>
          ) : (
            logs.map((log) => (
              <article 
                key={log.id} 
                className="group relative border-l-4 border-[#553E16] pl-6 md:pl-8 py-2"
              >
                {/* Timestamp & ID */}
                <div className="flex items-center gap-4 mb-4 text-sm opacity-70 border-b border-[#553E16]/30 pb-2 inline-flex pr-8">
                  <span className="font-bold">{log.date}</span>
                  <span>|</span>
                  <span className="tracking-widest">ID: {log.id}</span>
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-6 bg-[#553E16] text-[#B5B48B] inline-block px-3 py-1">
                  {log.title[lang as keyof LocalizedText] || log.title.en}
                </h2>

                {/* Optional Image */}
                {log.imageUrl && (
                  <div className="relative w-full aspect-video mb-6 border border-[#553E16] overflow-hidden bg-[#553E16]/5 flex items-center justify-center">
                    <Image
                      src={log.imageUrl}
                      alt={log.title[lang as keyof LocalizedText] || log.title.en}
                      fill
                      unoptimized
                      className="object-contain grayscale group-hover:grayscale-0 mix-blend-multiply transition-all duration-700"
                    />
                  </div>
                )}

                {/* Content */}
                <p className="text-lg leading-relaxed max-w-3xl opacity-90 mb-6">
                  {log.content[lang as keyof LocalizedText] || log.content.en}
                </p>

                {/* Links */}
                {log.links && log.links.length > 0 && (
                  <div className="flex flex-wrap gap-4 mt-6">
                    {log.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        className="border border-[#553E16] px-4 py-2 hover:bg-[#553E16] hover:text-[#B5B48B] transition-colors font-bold text-sm flex items-center gap-2"
                      >
                        {link.label[lang as keyof LocalizedText] || link.label.en}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))
          )}
        </div>
      </div>
    </AppLayout>
  );
}
