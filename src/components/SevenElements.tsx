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
      <div className="section-inner" style={{ textAlign: "center", marginBottom: 60 }}>
        {/* ロゴ＋ブランド説明 */}
        <div data-animate style={{ marginBottom: 48 }}>
          <img
            src="/logo.svg"
            alt="Seven Elements"
            className="elements-brand-logo"
            style={{
              width: "clamp(80px, 10vw, 120px)",
              height: "auto",
              margin: "0 auto 20px",
              display: "block",
              filter: "brightness(0) invert(1)",
              opacity: 0.85,
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(20px, 2.5vw, 32px)",
              fontWeight: 300,
              letterSpacing: "0.15em",
              color: "var(--color-dark-text)",
              marginBottom: 16,
            }}
          >
            Seven Elements
          </p>
          <p
            style={{
              fontSize: "clamp(12px, 1vw, 14px)",
              fontWeight: 200,
              letterSpacing: "0.1em",
              color: "var(--color-dark-text-secondary)",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.9,
              whiteSpace: "pre-line",
            }}
          >
            {t("brandDescription")}
          </p>
        </div>

        <h2 className="section-title" data-animate data-animate-delay="1" style={{ textAlign: "center" }}>
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
