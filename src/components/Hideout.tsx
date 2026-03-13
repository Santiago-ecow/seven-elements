"use client";

import { useTranslations } from "next-intl";

export function Hideout() {
  const t = useTranslations("hideout");

  return (
    <section className="section-light" id="hideout">
      <div className="section-inner">
        <div className="two-col">
          <div className="photo-frame" data-animate style={{ aspectRatio: "4/5" }}>
            <img src="/images/hideout.jpg" alt="Lodge7" />
          </div>
          <div>
            <p className="section-label" data-animate>{t("label")}</p>
            <h2 className="section-title" data-animate data-animate-delay="1">{t("title")}</h2>
            <p className="section-text" data-animate data-animate-delay="2">{t("description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
