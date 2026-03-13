"use client";

import { useTranslations } from "next-intl";

export function Location() {
  const t = useTranslations("location");

  return (
    <section className="section-light" id="location">
      <div className="section-inner">
        <div className="two-col">
          <div>
            <p className="section-label" data-animate>{t("label")}</p>
            <h2 className="section-title" data-animate data-animate-delay="1">{t("title")}</h2>
            <p className="section-text" data-animate data-animate-delay="2">{t("description")}</p>
            <div className="access-list" data-animate data-animate-delay="2">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="access-item">
                  <span>{t(`access.${i}.from`)}</span>
                  <span>{t(`access.${i}.time`)}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12, color: "var(--color-ink-faint)", marginTop: 16, fontWeight: 200 }}>
              {t("accessNote")}
            </p>
          </div>
          <div className="photo-frame" data-animate style={{ aspectRatio: "3/2" }}>
            <img src="/images/location.jpg" alt="Aso-Kuju National Park" />
          </div>
        </div>

        <div className="spot-list" data-animate>
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="spot-item">
              <div>
                <span className="spot-name">{t(`spots.${i}.name`)}</span>
                {t(`spots.${i}.note`) && <span className="spot-note">{t(`spots.${i}.note`)}</span>}
              </div>
              <div className="spot-distance">{t(`spots.${i}.distance`)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
