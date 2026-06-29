import React from "react";

export function MonitorFrame({ children, title = "CAM FEED", status = "OPTIMAL", icon = "visibility" }: { children: React.ReactNode, title?: string, status?: string, icon?: string }) {
  return (
    <div className="w-full max-w-3xl bg-surface-container-low border border-[#553E16] shadow-[4px_4px_0px_0px_#553E16] flex flex-col max-h-[calc(100vh-8rem)]">
      {/* Terminal Header */}
      <div className="bg-[#A1A06A] text-on-primary-fixed border-b border-[#553E16] px-4 py-2 flex justify-between items-center">
        <span className="font-data-mono text-data-mono font-bold uppercase tracking-wider">
          {title}
        </span>
        <span
          className="material-symbols-outlined text-[16px]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          {icon}
        </span>
      </div>
      
      {/* Terminal Body */}
      <div className="p-6 md:p-12 min-h-[300px] flex-1 flex flex-col bg-surface-dim relative overflow-hidden">
        {/* Subtle background image acting as 'feed' */}
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-luminosity grayscale"
          data-alt="Liminal background"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDh8jrQ6HPGzOBxvPRQCuCwlapxshQabbyj9CXlshW_mltxPCClK-vKbLjOYritCqkYcKHOxBso0DC4GwbWlSLeKVmOBTEcua8X93bLVxh2oCawuOQdgte5w7f2D6i8ebc3bb_pyXe_bQddAUgiW7__hclmh0ZB58PdJTxgI3mJ3JC_tGl4LZJZj2OxRDLCbEw8JCrc7fC-8g4kBzjSOGvoNACnOaek6_pRpngTqKsqR2reD1yttjFxAg9mR817gWe4VCyVCP52LE0')",
          }}
        ></div>
        
        <div className="relative z-10 w-full overflow-y-auto custom-scrollbar flex-1 flex flex-col pr-2">
          {children}
        </div>
      </div>
      
      {/* Terminal Footer Status */}
      <div className="bg-surface border-t border-[#553E16] px-4 py-2 flex justify-between items-center text-[#553E16] font-data-mono text-[11px] uppercase opacity-70">
        <span>SYS.STATUS: {status}</span>
        <span>ENCRYPTION: LEVEL-4</span>
        <span>NODE: 88.X.01</span>
      </div>
    </div>
  );
}
