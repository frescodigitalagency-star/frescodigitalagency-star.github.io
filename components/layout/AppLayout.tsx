"use client";

import React, { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header onMenuClick={() => setIsMenuOpen(!isMenuOpen)} />
      <div className="flex h-screen pt-16">
        <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        <main className="flex-1 ml-0 md:ml-64 p-4 md:p-margin-page pb-24 relative z-10 flex flex-col justify-start items-center overflow-y-auto">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
