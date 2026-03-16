"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

const AIRBNB_URL =
  "https://www.airbnb.jp/rooms/1578736113379179111?guests=1&adults=1&s=67&unique_share_id=18461295-e628-4017-b2ec-9503acdcf05e";

const heroImages = [
  "/images/top1.jpg",
  "/images/top2.jpg",
  "/images/aso_milkyway.jpg",
  "/images/top4.jpg",
];

export function Hero() {
  const t = useTranslations("hero");
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    // data-title属性から元テキスト（\n含む）を取得
    const text = el.dataset.title || el.textContent || "";
    el.innerHTML = "";
    let delay = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char === "\n") {
        el.appendChild(document.createElement("br"));
        continue;
      }
      if (char === " ") {
        el.appendChild(document.createTextNode(" "));
        continue;
      }
      const span = document.createElement("span");
      span.textContent = char;
      span.style.transitionDelay = delay + "s";
      el.appendChild(span);
      delay += 0.04;
    }
    // Trigger animation after a short delay
    requestAnimationFrame(() => {
      setTimeout(() => el.classList.add("visible"), 100);
    });
  }, []);

  return (
    <section className="hero">
      <div className="hero-images">
        {heroImages.map((src, i) => (
          <div
            key={i}
            className="hero-img"
            style={{
              backgroundImage: `url('${src}')`,
              ...(i === 0 ? { opacity: 1 } : {}),
            }}
          />
        ))}
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-sub" data-animate>{t("sub")}</p>
        <h1 ref={titleRef} className="hero-title char-animate" data-title={t("title")}>
          {t("title")}
        </h1>
        <p className="hero-location" data-animate data-animate-delay="1">
          {t("location")}
        </p>
        <p className="hero-desc" data-animate data-animate-delay="2" style={{ whiteSpace: "pre-line" }}>
          {t("description")}
        </p>
        <a
          href={AIRBNB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta"
          data-animate
          data-animate-delay="3"
        >
          {t("cta")}
        </a>
      </div>
    </section>
  );
}
