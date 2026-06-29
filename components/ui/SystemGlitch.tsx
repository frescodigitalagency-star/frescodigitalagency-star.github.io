"use client";

import { useState, useEffect } from "react";

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
      // Apply physical distortion to the whole site body
      const skew = Math.random() > 0.5 ? 2 : -2;
      const y = Math.random() > 0.5 ? 10 : -10;
      document.body.style.transform = `skewX(${skew}deg) translateY(${y}px)`;
      document.body.style.filter = "contrast(150%) saturate(0.5)";
      
      return () => {
        document.body.style.transform = "";
        document.body.style.filter = "";
      };
    }
  }, [isGlitching]);

  if (!isGlitching) return null;

  // The glitch overlay: harsh noise, high contrast, mix-blend effects
  return (
    <div className="fixed inset-0 z-[99999998] pointer-events-none mix-blend-difference opacity-80 flex items-center justify-center">
       <img 
        src="/portfolio/POST_VHS_TRACKING_ERROR.png" 
        alt="GLITCH" 
        className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 scale-150 animate-pulse"
      />
      <div className="absolute inset-0 bg-white mix-blend-overlay animate-pulse opacity-50"></div>
    </div>
  );
}
