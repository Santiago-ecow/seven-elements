import { setRequestLocale, getTranslations } from "next-intl/server";
import { Hideout } from "@/components/Hideout";
import { Space } from "@/components/Space";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "lodge7" });
  return { title: t("pageTitle") };
}

export default async function Lodge7Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "lodge7" });

  return (
    <>
      {/* Hero */}
      <section className="relative h-[75vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: "url('/images/elements/thunder.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pb-16 lg:pb-24 w-full">
          <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] text-white tracking-[0.08em] mb-4">
            {t("pageTitle")}
          </h1>
          <p className="text-[clamp(0.875rem,1.2vw,1.125rem)] text-white/60 tracking-[0.1em] max-w-lg">
            {t("heroTitle")}
          </p>
        </div>
      </section>

      <Hideout />
      <Space />

      {/* Details */}
      <section
        data-theme="light"
        style={{ paddingTop: "var(--spacing-section)", paddingBottom: "var(--spacing-section)" }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p data-animate className="text-[15px] text-[var(--color-text-secondary)] leading-[2.2] whitespace-pre-line mb-20">
            {t("description")}
          </p>

          {/* Photo Grid Placeholder */}
          <div data-animate className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-20">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={`aspect-square bg-[var(--color-cream)] flex items-center justify-center text-[var(--color-text-tertiary)] text-[13px] tracking-[0.15em] ${
                  i === 0 ? "col-span-2 row-span-2 aspect-auto" : ""
                }`}
              >
                Photo {i + 1}
              </div>
            ))}
          </div>

          {/* Amenities */}
          <div data-animate className="bg-[var(--color-cream)] p-8 lg:p-12 mb-16">
            <h2 className="font-serif text-xl text-[var(--color-text)] mb-6 tracking-[0.1em]">
              {t("amenitiesTitle")}
            </h2>
            <p className="text-[14px] text-[var(--color-text-secondary)] leading-[2] whitespace-pre-line">
              {t("amenities")}
            </p>
          </div>

          <div className="text-center">
            <p data-animate className="text-[var(--color-text-tertiary)] text-[14px] tracking-[0.1em] mb-10">
              {t("capacity")}
            </p>
            <a
              data-animate
              href="https://www.airbnb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-3 text-[13px] tracking-[0.15em] border border-[var(--color-text)] text-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-white transition-colors duration-500"
            >
              {t("bookCta")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
