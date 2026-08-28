"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { PhoneIcon } from "@/components/icons";

export default function FloatingCallButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={siteConfig.phoneHref}
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-clay-500 text-white pl-4 pr-5 py-3.5 shadow-xl hover:bg-clay-600 transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <PhoneIcon className="w-4 h-4" />
      <span className="font-semibold text-sm">Sună acum</span>
    </a>
  );
}
