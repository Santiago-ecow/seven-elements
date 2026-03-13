"use client";

import { useTranslations } from "next-intl";

const AIRBNB_URL =
  "https://www.airbnb.jp/rooms/1578736113379179111?guests=1&adults=1&s=67&unique_share_id=18461295-e628-4017-b2ec-9503acdcf05e";

export function FooterCta() {
  const t = useTranslations("footerCta");

  return (
    <section className="footer-cta-hero">
      <div className="footer-cta-photo" data-animate>
        <img src="/images/bonfire.jpg" alt="Bonfire under the stars" />
      </div>
      <div className="footer-cta-content" data-animate data-animate-delay="1">
        <h3 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(28px, 4vw, 52px)",
          fontWeight: 300,
          marginBottom: 24,
          whiteSpace: "pre-line",
        }}>
          {t("title")}
        </h3>
        <a
          href={AIRBNB_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            fontSize: 13,
            letterSpacing: "0.18em",
            textTransform: "uppercase" as const,
            textDecoration: "none",
            color: "white",
            border: "1px solid rgba(255,255,255,0.4)",
            padding: "14px 40px",
            transition: "all 0.4s",
          }}
        >
          {t("cta")}
        </a>
      </div>
    </section>
  );
}
