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
        {t("text2")}<br />
        {t("text3")}<br /><br />
        {t("text4")}<br />
        {t("text5")}<br />
        {t("text6")}<br />
        {t("text7")}<br /><br />
        <em>{t("emphasis").split("\n").map((line, i, arr) => (
          <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
        ))}</em>
      </p>
    </section>
  );
}
