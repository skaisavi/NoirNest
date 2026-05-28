"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[80] h-px w-full bg-transparent" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-gold/20 via-gold to-gold/20 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
