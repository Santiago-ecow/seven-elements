import { setRequestLocale, getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("pageTitle") };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "about" });

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
            className="font-serif text-[clamp(1.75rem,4vw,3.5rem)] text-[var(--color-text)] tracking-[0.1em] leading-[1.4]"
          >
            {t("heroTitle")}
          </h1>
        </div>
      </section>

      {/* Story */}
      <section style={{ paddingBottom: "var(--spacing-section-lg)" }}>
        <div className="max-w-2xl mx-auto px-6 lg:px-10">
          <p
            data-animate
            className="text-[15px] text-[var(--color-text-secondary)] leading-[2.2] whitespace-pre-line mb-20"
          >
            {t("story")}
          </p>

          {/* Mission */}
          <div data-animate className="border-l-[2px] border-[var(--color-accent)] pl-8 py-2">
            <p className="font-serif text-[clamp(1rem,1.5vw,1.25rem)] text-[var(--color-text)] italic leading-[1.9] tracking-[0.05em]">
              {t("mission")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
