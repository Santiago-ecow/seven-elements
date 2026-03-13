"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const AIRBNB_URL =
  "https://www.airbnb.jp/rooms/1578736113379179111?guests=1&adults=1&s=67&unique_share_id=18461295-e628-4017-b2ec-9503acdcf05e";

export function Header() {
  const t = useTranslations("header");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = () => {
    const next = locale === "ja" ? "en" : "ja";
    router.replace(pathname as "/", { locale: next });
  };

  const navLinks = [
    { href: "#hideout", label: t("lodge7") },
    { href: "#elements", label: t("elements") },
    { href: "#space", label: t("space") },
    { href: "#amenities", label: t("amenities") },
    { href: "#location", label: t("location") },
  ];

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""} ${mobileOpen ? "mobile-open" : ""}`}>
        <a href="#" className="logo">
          <img src="/logo.svg" alt="" className="logo-img" style={{ height: 28, width: "auto", marginRight: 8 }} />
          <span className="logo-text">Seven Elements</span>
        </a>

        <nav className="header-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <button onClick={switchLocale} className="lang-btn">
            {locale === "ja" ? "EN" : "JA"}
          </button>
          <a href={AIRBNB_URL} target="_blank" rel="noopener noreferrer" className="nav-cta">
            {t("reserve")}
          </a>
        </nav>

        <button
          className="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </header>

      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
            {link.label}
          </a>
        ))}
        <button onClick={() => { switchLocale(); setMobileOpen(false); }} className="lang-btn" style={{ fontSize: 16 }}>
          {locale === "ja" ? "English" : "日本語"}
        </button>
        <a
          href={AIRBNB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-cta"
          onClick={() => setMobileOpen(false)}
        >
          {t("reserve")}
        </a>
      </div>
    </>
  );
}
