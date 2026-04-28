"use client";

import {createContext, useContext, useState, useEffect} from "react";
import enMessages from "../messages/en.json";
import esMessages from "../messages/es.json";

const LanguageContext = createContext();

export function LanguageProvider({children}) {
  const [locale, setLocale] = useState("es");
  const [messages, setMessages] = useState(esMessages);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load saved locale from localStorage, default to Spanish
    if (typeof window !== "undefined") {
      const savedLocale = localStorage.getItem("locale");
      // Only use saved locale if it exists, otherwise default to Spanish
      const currentLocale = savedLocale || "es";
      setLocale(currentLocale);
      setMessages(currentLocale === "es" ? esMessages : enMessages);
      setMounted(true);
    }
  }, []);

  const changeLocale = (newLocale) => {
    setLocale(newLocale);
    setMessages(newLocale === "es" ? esMessages : enMessages);
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", newLocale);
    }
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{locale, messages, changeLocale}}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
