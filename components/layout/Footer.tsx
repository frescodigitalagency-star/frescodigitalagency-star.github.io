"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="fixed bottom-0 w-full z-50 flex items-center px-8 md:px-12 justify-between h-12 border-t border-outline bg-inverse-surface dark:bg-inverse-surface text-inverse-on-surface font-data-mono text-data-mono">
      <div className="font-bold text-tertiary-fixed text-xs md:text-sm truncate mr-4">
        {t("footer", "status")}
      </div>
      <div className="flex gap-4 md:gap-6 hidden sm:flex text-xs md:text-sm">
        <div className="hidden md:block opacity-70">
          {t("footer", "copyright")}
        </div>
      </div>
    </footer>
  );
}
