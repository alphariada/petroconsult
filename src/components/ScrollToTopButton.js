"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@/components/icons";
import { useLanguage } from "@/context/LanguageContext";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t("common.backToTop")}
      className={`fixed bottom-24 right-6 z-40 flex items-center justify-center w-11 h-11 rounded-full bg-navy-900 text-white shadow-xl hover:bg-navy-800 transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUpIcon className="w-5 h-5" />
    </button>
  );
}
