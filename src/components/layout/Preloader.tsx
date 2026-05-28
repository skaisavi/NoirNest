"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("noirnest-intro-shown");
    if (alreadyShown) {
      return;
    }

    setVisible(true);
    sessionStorage.setItem("noirnest-intro-shown", "true");

    const leaveTimer = window.setTimeout(() => setLeaving(true), 900);
    const hideTimer = window.setTimeout(() => setVisible(false), 1250);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] grid place-items-center bg-obsidian transition duration-500 ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center">
        <p className="font-serif text-5xl font-bold tracking-[0.08em] text-ivory">NoirNest</p>
        <span className="mx-auto mt-5 block h-px w-28 origin-left animate-line-reveal bg-gold" />
      </div>
    </div>
  );
}
