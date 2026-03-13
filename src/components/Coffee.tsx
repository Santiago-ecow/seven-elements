"use client";

import { useTranslations } from "next-intl";

export function Coffee() {
  const t = useTranslations("coffee");

  return (
    <section className="coffee-section">
      <div className="coffee-bg" style={{ backgroundImage: "url('/images/mikazuki.jpg')" }} />
      <div className="coffee-overlay" />
      <div className="coffee-content" data-animate>
        <p className="section-label" style={{ color: "var(--color-accent-light)", textAlign: "center" }}>
          {t("label")}
        </p>
        <p className="coffee-name">{t("name")}</p>
        <p style={{ fontSize: 14, fontWeight: 200, opacity: 0.7, maxWidth: 480, margin: "0 auto", lineHeight: 1.9 }}>
          {t("description").split("\n").map((line, i) => (
            <span key={i}>{line}{i < 2 && <br />}</span>
          ))}
        </p>
      </div>
    </section>
  );
}
