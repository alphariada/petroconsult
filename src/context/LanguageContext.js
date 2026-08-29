"use client";

import { createContext, useContext, useEffect, useState } from "react";
import ro from "@/locales/ro";
import en from "@/locales/en";

const dictionaries = { ro, en };
const STORAGE_KEY = "petroconsult-locale";

const LanguageContext = createContext(null);

function getByPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState("ro");

  useEffect(() => {
    // Reading localStorage/navigator.language must wait for the client, so the
    // server-rendered "ro" default has to be corrected here, after mount, once
    // we actually know the visitor's stored or browser-detected preference.
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "ro" || stored === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocaleState(stored);
      return;
    }
    const browserLang = window.navigator.language || "";
    if (browserLang.toLowerCase().startsWith("en")) {
      setLocaleState("en");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (next) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const t = (path) => {
    const value = getByPath(dictionaries[locale], path);
    return value ?? getByPath(dictionaries.ro, path) ?? path;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
