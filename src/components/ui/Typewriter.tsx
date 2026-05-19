"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  texts: string[];
  delay?: number;
  period?: number;
}

export function Typewriter({ texts, delay = 100, period = 2000 }: TypewriterProps) {
  const [currentText, setCurrentText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const textIndex = loopNum % texts.length;
    const fullText = texts[textIndex];

    const tick = () => {
      if (isDeleting) {
        setCurrentText((prev) => prev.substring(0, prev.length - 1));
      } else {
        setCurrentText((prev) => fullText.substring(0, prev.length + 1));
      }

      let tickerSpeed = delay;
      if (isDeleting) {
        tickerSpeed /= 2; // Delete faster
      }

      if (!isDeleting && currentText === fullText) {
        tickerSpeed = period; // Pause at full text
        setIsDeleting(true);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        tickerSpeed = 500; // Pause before typing next word
      }

      timer = setTimeout(tick, tickerSpeed);
    };

    timer = setTimeout(tick, isDeleting && currentText === fullText ? period : delay);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, texts, delay, period]);

  return (
    <span className="relative inline-block min-w-[200px]">
      {currentText}
      <span className="animate-pulse font-light ml-1">|</span>
    </span>
  );
}
