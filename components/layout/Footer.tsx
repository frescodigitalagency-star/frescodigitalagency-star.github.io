"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="fixed bottom-0 w-full z-50 flex items-center px-4 md:px-margin-page justify-between h-12 border-t border-outline bg-inverse-surface dark:bg-inverse-surface text-inverse-on-surface font-data-mono text-data-mono">
      <div className="font-bold text-tertiary-fixed text-xs md:text-sm truncate mr-4">
        {t("footer", "status")}
      </div>
      <div className="flex gap-4 md:gap-6 hidden sm:flex text-xs md:text-sm">
        <a className="text-surface-variant hover:text-primary-fixed transition-none whitespace-nowrap" href="#">
          {t("footer", "prompt")}
        </a>
        <a className="text-surface-variant hover:text-primary-fixed transition-none whitespace-nowrap" href="#">
          {t("footer", "diagnostic")}
        </a>
        <a className="text-surface-variant hover:text-primary-fixed transition-none whitespace-nowrap" href="#">
          {t("footer", "logoff")}
        </a>
      </div>
    </footer>
  );
}
