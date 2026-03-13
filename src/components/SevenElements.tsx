"use client";

import { useTranslations } from "next-intl";

const topElements = ["fire", "water", "wind", "tree"] as const;
const bottomElements = ["earth", "thunder", "light"] as const;

const elementImages: Record<string, string> = {
  fire: "/images/stove.jpg",
  water: "/images/water.jpg",
  wind: "/images/wind.jpg",
  tree: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
  earth: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
  thunder: "/images/denki_solar.jpg",
  light: "/images/light.jpg",
};

export function SevenElements() {
  const t = useTranslations("elements");

  return (
    <section className="section-dark" id="elements">
      <div className="section-inner">
        <p className="section-label" data-animate style={{ color: "var(--color-accent-light)" }}>
          {t("label")}
        </p>
        <h2 className="section-title" data-animate data-animate-delay="1" style={{ marginBottom: 60 }}>
          {t("title")}
        </h2>
      </div>
      <div className="elements-grid">
        {topElements.map((key, i) => (
          <ElementCard key={key} elementKey={key} t={t} delay={i} />
        ))}
      </div>
      <div className="elements-bottom">
        {bottomElements.map((key, i) => (
          <ElementCard key={key} elementKey={key} t={t} delay={i} />
        ))}
      </div>
    </section>
  );
}

function ElementCard({
  elementKey,
  t,
  delay,
}: {
  elementKey: string;
  t: ReturnType<typeof useTranslations>;
  delay: number;
}) {
  return (
    <div className="element-card" data-animate data-animate-delay={delay > 0 ? String(delay) : undefined}>
      <div
        className="element-card-bg"
        style={{ backgroundImage: `url('${elementImages[elementKey]}')` }}
      />
      <div className="element-card-overlay" />
      <div className="element-card-content">
        <div className="element-card-icon">{t(`${elementKey}.icon`)}</div>
        <div className="element-card-name">
          {t(`${elementKey}.name`)}
          {elementKey === "thunder" && t(`${elementKey}.nameSub`) && (
            <>
              <br />
              <span style={{ fontSize: "0.5em", fontFamily: "var(--font-sans)", fontWeight: 200 }}>
                {t(`${elementKey}.nameSub`)}
              </span>
            </>
          )}
        </div>
        <div className="element-card-name-en">{t(`${elementKey}.enName`)}</div>
        <p className="element-card-desc">{t(`${elementKey}.description`)}</p>
      </div>
    </div>
  );
}
