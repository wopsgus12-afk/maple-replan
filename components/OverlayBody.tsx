"use client";

import { useEffect } from "react";
import { isElectron } from "@/lib/electron";

/** Electron transparent overlay: clear page chrome background */
export function OverlayBody({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!isElectron()) return;
    document.documentElement.classList.add("electron-app");
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlBg = html.style.background;
    const prevBodyBg = body.style.background;
    const prevBodyMinH = body.style.minHeight;

    html.style.background = "transparent";
    body.style.background = "transparent";
    body.style.minHeight = "0";

    return () => {
      document.documentElement.classList.remove("electron-app");
      html.style.background = prevHtmlBg;
      body.style.background = prevBodyBg;
      body.style.minHeight = prevBodyMinH;
    };
  }, []);

  return <div className="electron-no-drag min-h-0">{children}</div>;
}
