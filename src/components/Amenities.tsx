"use client";

import { useTranslations } from "next-intl";

export function Amenities() {
  const t = useTranslations("amenities");

  // Read items from translations
  const items: Array<{ icon: string; name: string; desc: string; price: string }> = [];
  for (let i = 0; i < 8; i++) {
    items.push({
      icon: t(`items.${i}.icon`),
      name: t(`items.${i}.name`),
      desc: t(`items.${i}.desc`),
      price: t(`items.${i}.price`),
    });
  }

  return (
    <section className="section-light" id="amenities">
      <div className="section-inner">
        <p className="section-label" data-animate>{t("label")}</p>
        <h2 className="section-title" data-animate data-animate-delay="1">{t("title")}</h2>
        <div className="amenity-grid" data-animate data-animate-delay="2">
          {items.map((item, i) => (
            <div key={i} className="amenity">
              <div className="amenity-icon">{item.icon}</div>
              <div className="amenity-name">{item.name}</div>
              <div className="amenity-desc" style={{ whiteSpace: "pre-line" }}>{item.desc}</div>
              {item.price && <div className="amenity-price">{item.price}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
