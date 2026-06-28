"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/i18n/LanguageContext";

const NAV_KEYS = [
  { key: "threshold", href: "/", icon: "door_front" },
  { key: "manifest", href: "/manifest", icon: "assignment" },
  { key: "portfolio", href: "/portfolio", icon: "folder_special" },
  { key: "archive", href: "/archive", icon: "inventory_2" },
  { key: "protocol", href: "/protocol", icon: "terminal" },
  { key: "services", href: "/services", icon: "dns" },
  { key: "uplink", href: "/uplink", icon: "settings_input_antenna" },
];

export function Sidebar({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-30 md:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar container */}
      <nav className={`
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 transition-transform duration-200 ease-in-out
        flex flex-col z-40 fixed left-0 top-16 bottom-0 md:bottom-12 h-[calc(100vh-4rem)] md:h-[calc(100vh-7rem)] w-64 border-r border-outline bg-surface-container dark:bg-surface-container
      `}>
        <div className="p-4 border-b border-outline mb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-primary-container border border-outline flex items-center justify-center">
              <span
                className="material-symbols-outlined text-on-primary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                assured_workload
              </span>
            </div>
            <div>
              <div className="font-data-mono text-interface-label font-bold text-on-surface">
                {t("sidebar", "root")}
              </div>
              <div className="font-data-mono text-data-mono text-on-surface-variant">
                {t("sidebar", "sector")}
              </div>
            </div>
          </div>
        </div>
        <ul className="flex-grow overflow-y-auto pb-4">
          {NAV_KEYS.map((item) => {
            const isActive = pathname === item.href;
            const name = t("nav", item.key);
            
            if (isActive) {
              return (
                <li
                  key={item.key}
                  className="bg-primary text-on-primary font-bold border border-outline mx-2 mb-1 cursor-pointer"
                  onClick={onClose}
                >
                  <Link
                    className="flex items-center gap-3 px-4 py-3 font-data-mono text-data-mono"
                    href={item.href}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {item.icon}
                    </span>
                    <span>{name}</span>
                  </Link>
                </li>
              );
            }

            return (
              <li
                key={item.key}
                className="text-on-surface-variant border-b border-outline-variant hover:bg-secondary-container hover:text-on-secondary-container transition-none active:translate-x-0.5 active:translate-y-0.5 mx-2 mb-1 cursor-pointer"
                onClick={onClose}
              >
                <Link
                  className="flex items-center gap-3 px-4 py-3 font-data-mono text-data-mono"
                  href={item.href}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    {item.icon}
                  </span>
                  <span>{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="p-4 border-t border-outline mt-auto bg-surface-container">
          <button className="w-full py-2 px-4 border border-outline bg-surface hover:bg-primary-container text-on-surface font-data-mono text-data-mono font-bold transition-none active:translate-x-0.5 active:translate-y-0.5 shadow-[2px_2px_0px_0px_#553E16]">
            {t("sidebar", "initiate")}
          </button>
        </div>
      </nav>
    </>
  );
}
