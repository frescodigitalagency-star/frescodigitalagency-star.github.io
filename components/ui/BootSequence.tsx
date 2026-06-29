"use client";

import { useState, useEffect } from "react";

export function BootSequence() {
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    // Check session storage to see if we already booted this session
    // If you want it on *every* reload, we just skip session storage
    // The prompt says "когда сайт перезагружается", meaning every reload.
    
    // Play a quick glitch sequence
    const timer = setTimeout(() => {
      setIsBooting(false);
    }, 1200); // 1.2 seconds
    
    return () => clearTimeout(timer);
  }, []);

  if (!isBooting) return null;

  return (
    <div className="fixed inset-0 z-[99999999] bg-black pointer-events-auto flex items-center justify-center font-data-mono">
      {/* Heavy CRT noise image */}
      <img 
        src="/portfolio/POST_VHS_TRACKING_ERROR.png" 
        alt="SYSTEM BOOT" 
        className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 animate-pulse scale-110"
        style={{ animationDuration: "0.1s" }} // Extremely fast pulse for a noise effect
      />
      
      {/* Booting Text */}
      <div className="z-10 text-white text-3xl md:text-6xl font-black drop-shadow-[0_0_15px_rgba(255,255,255,1)] animate-pulse" style={{ animationDuration: "0.3s" }}>
        SYSTEM BOOT...
      </div>

      {/* CRT Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-50 mix-blend-overlay z-20" style={{
        backgroundImage: "linear-gradient(transparent 50%, rgba(0, 0, 0, 1) 50%)",
        backgroundSize: "100% 4px"
      }}></div>
      
      <div className="absolute inset-0 pointer-events-none z-20" style={{
        background: "radial-gradient(circle, transparent 30%, rgba(0,0,0,0.95) 100%)"
      }}></div>
    </div>
  );
}
