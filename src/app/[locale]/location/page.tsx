import { setRequestLocale, getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "location" });
  return { title: t("pageTitle") };
}

export default async function LocationPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "location" });

  return (
    <>
      {/* Hero */}
      <section
        className="flex items-center justify-center"
        style={{ paddingTop: "calc(80px + var(--spacing-section))", paddingBottom: "var(--spacing-section)" }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h1
            data-animate
            className="font-serif text-[clamp(1.75rem,4vw,3.5rem)] text-[var(--color-text)] tracking-[0.1em]"
          >
            {t("heroTitle")}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ paddingBottom: "var(--spacing-section)" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p
            data-animate
            className="text-[15px] text-[var(--color-text-secondary)] leading-[2.2] whitespace-pre-line mb-20"
          >
            {t("description")}
          </p>

          {/* Map placeholder */}
          <div data-animate className="aspect-video bg-[var(--color-cream)] flex items-center justify-center text-[var(--color-text-tertiary)] mb-20">
            <span className="text-[13px] tracking-[0.2em]">Google Maps</span>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div data-animate>
              <h2 className="font-serif text-xl text-[var(--color-text)] mb-6 tracking-[0.1em]">Access</h2>
              <p className="text-[14px] text-[var(--color-text-secondary)] leading-[2] whitespace-pre-line">
                {t("accessText")}
              </p>
            </div>
            <div data-animate style={{ transitionDelay: "150ms" } as React.CSSProperties}>
              <h2 className="font-serif text-xl text-[var(--color-text)] mb-6 tracking-[0.1em]">Nearby</h2>
              <p className="text-[14px] text-[var(--color-text-secondary)] leading-[2] whitespace-pre-line">
                {t("nearby")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
