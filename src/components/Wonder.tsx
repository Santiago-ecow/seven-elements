"use client";

import { useTranslations } from "next-intl";

export function Wonder() {
  const t = useTranslations("wonder");

  return (
    <section className="wonder-section">
      <div className="wonder-bg" style={{ backgroundImage: "url('/images/galaxy_window.jpg')" }} />
      <div className="wonder-overlay" />
      <p className="wonder-text" data-animate>
        {t("text1")}<br />
        {t("text2")}<br /><br />
        {t("text3")}<br /><br />
        {t("text4")}<br /><br />
        <em>{t("emphasis").split("\n").map((line, i) => (
          <span key={i}>{line}{i === 0 && <br />}</span>
        ))}</em>
      </p>
    </section>
  );
}
