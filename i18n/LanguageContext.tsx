"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { translations, Language } from "./translations";

import { useRouter, usePathname } from "next/navigation";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (category: keyof typeof translations.ru, key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children, initialLang }: { children: ReactNode, initialLang: Language }) {
  const [lang, setLangState] = useState<Language>(initialLang || "ru");
  const router = useRouter();
  const pathname = usePathname();

  // Sync lang state if the URL changes
  useEffect(() => {
    if (initialLang && initialLang !== lang) {
      setLangState(initialLang);
    }
  }, [initialLang, lang]);

  const handleSetLang = (newLang: Language) => {
    if (newLang === lang) return;
    setLangState(newLang);
    
    // Replace the current language path segment with the new one
    // example: /ru/services -> /en/services
    // example: /ru -> /en
    if (pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`) {
      const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
      router.push(newPath);
    } else {
      router.push(`/${newLang}${pathname}`);
    }
  };

  const t = (category: keyof typeof translations.ru, key: string): string => {
    // @ts-ignore
    return translations[lang][category][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
