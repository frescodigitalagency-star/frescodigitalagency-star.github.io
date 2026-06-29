"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function SystemGlitch() {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const scheduleNextGlitch = () => {
      // Random interval between 15 and 35 seconds
      const nextTime = Math.random() * 20000 + 15000;
      timeoutId = setTimeout(() => {
        setIsGlitching(true);
        
        // Glitch lasts for 0.1 to 0.6 seconds
        setTimeout(() => {
          setIsGlitching(false);
          scheduleNextGlitch(); // schedule again
        }, Math.random() * 500 + 100);
        
      }, nextTime);
    };

    scheduleNextGlitch();
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (isGlitching) {
      // Apply physical distortion to the TV screen bounding box instead of the whole body
      const screen = document.getElementById('tv-screen');
      if (!screen) return;
      
      const skew = Math.random() > 0.5 ? 2 : -2;
      const y = Math.random() > 0.5 ? 10 : -10;
      screen.style.transform = `translate3d(0,0,0) skewX(${skew}deg) translateY(${y}px)`;
      screen.style.filter = "contrast(150%) saturate(0.5)";
      
      return () => {
        screen.style.transform = "translate3d(0,0,0)";
        screen.style.filter = "";
      };
    }
  }, [isGlitching]);

  if (!isGlitching) return null;

  // The glitch overlay: harsh noise, high contrast, mix-blend effects
  return (
    <div className="fixed inset-0 z-[99999998] pointer-events-none mix-blend-difference opacity-80 flex items-center justify-center">
       <Image 
        src="/portfolio/POST_VHS_TRACKING_ERROR.png" 
        alt="GLITCH" 
        fill
        priority
        className="absolute inset-0 object-cover grayscale opacity-90 scale-150 animate-pulse"
      />
      <div className="absolute inset-0 bg-white mix-blend-overlay animate-pulse opacity-50"></div>
    </div>
  );
}
