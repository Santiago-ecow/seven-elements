"use client";

import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-bottom">
          <div className="footer-brand">Seven Elements</div>
          <div className="footer-links">
            <a href="#hideout">{t("lodge7")}</a>
            <a href="#elements">{t("philosophy")}</a>
            <a href="#location">{t("location")}</a>
            <a href="mailto:info@sevenelements.jp">{t("contact")}</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              {t("instagram")}
            </a>
          </div>
        </div>
        <p className="footer-copy">
          {t.rich("copyright", {
            ecowLink: (chunks) => (
              <a href="https://www.ecow.co.jp" target="_blank" rel="noopener noreferrer">
                ECOW Inc.
              </a>
            ),
          })}
        </p>
      </div>
    </footer>
  );
}
