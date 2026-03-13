"use client";

import { useTranslations } from "next-intl";

export function Farmers() {
  const t = useTranslations("farmers");

  return (
    <section className="section-dark farmers-section">
      <div className="section-inner">
        <h2 className="farmers-title" data-animate>{t("title")}</h2>
        <h3 className="farmers-subtitle" data-animate data-animate-delay="1">{t("subtitle")}</h3>
        <div className="farmers-grid">
          {([0, 1, 2] as const).map((i) => (
            <div key={i} data-animate data-animate-delay={String(i + 1)}>
              <h3 style={{
                fontFamily: "var(--font-serif)",
                fontSize: 20,
                fontWeight: 300,
                marginBottom: 12,
                color: "var(--color-accent-light)",
              }}>
                {t(`cards.${i}.title`)}
              </h3>
              <p style={{
                fontSize: 13,
                fontWeight: 200,
                lineHeight: 1.9,
                color: "var(--color-dark-text-secondary)",
              }}>
                {t(`cards.${i}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
