"use client";

import { useEffect, useState, useRef } from "react";

export function Typewriter({ text, speed = 50, delay = 800 }: { text: string, speed?: number, delay?: number }) {
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    function type() {
      if (indexRef.current < text.length) {
        setDisplayedText(text.substring(0, indexRef.current + 1));
        indexRef.current++;
        timeoutId = setTimeout(type, Math.random() * speed + 30);
      }
    }

    timeoutId = setTimeout(type, delay);

    return () => clearTimeout(timeoutId);
  }, [text, speed, delay]);

  return (
    <>
      {displayedText}
      <span className="cursor-block"></span>
    </>
  );
}
