"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function BootSequence() {
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBooting(false);
    }, 250); // Just a quick 250ms flash of noise
    
    return () => clearTimeout(timer);
  }, []);

  if (!isBooting) return null;

  return (
    <div className="fixed inset-0 z-[99999999] bg-white pointer-events-none flex items-center justify-center mix-blend-difference">
      {/* Heavy CRT noise image */}
      <Image 
        src="/portfolio/POST_VHS_TRACKING_ERROR.png" 
        alt="STATIC" 
        fill
        priority
        className="absolute inset-0 object-cover grayscale opacity-90 scale-150"
      />

      {/* CRT Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-50 mix-blend-overlay z-20" style={{
        backgroundImage: "linear-gradient(transparent 50%, rgba(0, 0, 0, 1) 50%)",
        backgroundSize: "100% 4px"
      }}></div>
    </div>
  );
}
