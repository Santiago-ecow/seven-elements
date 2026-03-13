"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const spacePhotos: Record<string, string> = {
  bedroom: "/images/space2.jpg",
  living: "/images/space1.jpg",
  floorplan: "/images/floorplan.jpg",
};

export function Space() {
  const t = useTranslations("space");
  const [activeTab, setActiveTab] = useState("bedroom");
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const tabs = [
    { key: "bedroom", label: t("tabBedroom") },
    { key: "living", label: t("tabLiving") },
    { key: "floorplan", label: t("tabFloorplan") },
  ];

  return (
    <>
      <section className="section-cream" id="space">
        <div className="section-inner">
          <p className="section-label" data-animate>{t("label")}</p>
          <h2 className="section-title" data-animate data-animate-delay="1">{t("title")}</h2>
          <p className="section-text" data-animate data-animate-delay="2">{t("description")}</p>

          <div className="space-viewer" data-animate>
            <div className="space-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  className={`space-tab ${activeTab === tab.key ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div
              className="space-photo-container"
              onClick={() => setLightboxSrc(spacePhotos[activeTab])}
            >
              <img src={spacePhotos[activeTab]} alt={`Lodge7 ${tabs.find(t => t.key === activeTab)?.label}`} />
              <div className="space-photo-hint">{t("clickToExpand")}</div>
            </div>
          </div>

          <div className="features-grid" data-animate>
            <div className="feature">
              <div className="feature-number">{t("feature1number")}</div>
              <div className="feature-label">{t("feature1label")}</div>
            </div>
            <div className="feature">
              <div className="feature-number">{t("feature2number")}</div>
              <div className="feature-label">{t("feature2label")}</div>
            </div>
            <div className="feature">
              <div className="feature-number">{t("feature3number")}</div>
              <div className="feature-label">{t("feature3label")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxSrc && (
        <div className="lightbox open" onClick={() => setLightboxSrc(null)}>
          <button className="lightbox-close">&times;</button>
          <img src={lightboxSrc} alt="" />
        </div>
      )}
    </>
  );
}
