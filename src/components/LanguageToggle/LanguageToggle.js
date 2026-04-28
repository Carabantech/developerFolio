"use client";

import React from "react";
import {useTranslation} from "../../contexts/LanguageContext";
import "./LanguageToggle.scss";

export default function LanguageToggle() {
  const {locale, changeLocale} = useTranslation();

  const handleChange = () => {
    const newLocale = locale === "en" ? "es" : "en";
    changeLocale(newLocale);
  };

  return (
    <div className="language-toggle-container">
      <button 
        onClick={handleChange}
        className="language-toggle-button"
        aria-label="Change Language"
        title={locale === "en" ? "Cambiar a Español" : "Change to English"}
      >
        {locale === "en" ? "🇪🇸 Español" : "🇺🇸 English"}
      </button>
    </div>
  );
}
