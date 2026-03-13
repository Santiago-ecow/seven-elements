import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";

const validElements = ["fire", "water", "wind", "tree", "earth", "light", "thunder"] as const;
type ElementSlug = (typeof validElements)[number];

const elementImages: Record<ElementSlug, string> = {
  fire: "/images/elements/fire.jpg",
  water: "/images/elements/water.jpg",
  wind: "/images/elements/wind.png",
  tree: "/images/elements/tree.jpg",
  earth: "/images/elements/earth.jpg",
  light: "/images/elements/light.jpg",
  thunder: "/images/elements/thunder.jpg",
};

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return validElements.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  if (!validElements.includes(slug as ElementSlug)) return {};
  const t = await getTranslations({ locale, namespace: "elements" });
  return {
    title: `${t(`${slug}.name`)} — ${t(`${slug}.enName`)}`,
  };
}

export default async function ElementDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!validElements.includes(slug as ElementSlug)) {
    notFound();
  }

  const key = slug as ElementSlug;
  const t = await getTranslations({ locale, namespace: "elements" });

  const currentIndex = validElements.indexOf(key);
  const prevElement = currentIndex > 0 ? validElements[currentIndex - 1] : null;
  const nextElement = currentIndex < validElements.length - 1 ? validElements[currentIndex + 1] : null;

  return (
    <>
      {/* Full-screen hero */}
      <section className="relative h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${elementImages[key]})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pb-16 lg:pb-24 w-full">
          <span className="block text-white/40 text-[13px] tracking-[0.3em] uppercase mb-4">
            Seven Elements
          </span>
          <div className="flex items-baseline gap-4 mb-4">
            <h1 className="font-serif text-[clamp(3rem,8vw,7rem)] text-white tracking-[0.05em] leading-none">
              {t(`${key}.name`)}
            </h1>
            <span className="text-[clamp(1rem,2vw,1.75rem)] text-white/40 tracking-[0.3em] uppercase font-light">
              {t(`${key}.enName`)}
            </span>
          </div>
          <p className="text-[15px] text-white/60 max-w-lg leading-[1.8]">
            {t(`${key}.description`)}
          </p>
        </div>
      </section>

      {/* Detail description */}
      <section
        data-theme="light"
        style={{ paddingTop: "var(--spacing-section)", paddingBottom: "var(--spacing-section)" }}
      >
        <div className="max-w-2xl mx-auto px-6 lg:px-10">
          <p className="text-[clamp(0.9375rem,1.1vw,1.0625rem)] text-[var(--color-text-secondary)] leading-[2.2] whitespace-pre-line">
            {t(`${key}.detailDescription`)}
          </p>
        </div>
      </section>

      {/* Navigation between elements */}
      <section className="border-t border-[var(--color-border)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-8">
          <div className="flex items-center justify-between">
            {prevElement ? (
              <Link
                href={`/elements/${prevElement}` as "/lodge7"}
                className="group flex items-center gap-3 text-[var(--color-text-tertiary)] hover:text-[var(--color-text)] transition-colors duration-300"
              >
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <span className="font-serif text-lg tracking-[0.08em]">{t(`${prevElement}.name`)}</span>
              </Link>
            ) : <div />}

            <Link
              href="/"
              className="text-[12px] text-[var(--color-text-tertiary)] hover:text-[var(--color-text)] transition-colors duration-300 tracking-[0.2em] uppercase"
            >
              All Elements
            </Link>

            {nextElement ? (
              <Link
                href={`/elements/${nextElement}` as "/lodge7"}
                className="group flex items-center gap-3 text-[var(--color-text-tertiary)] hover:text-[var(--color-text)] transition-colors duration-300"
              >
                <span className="font-serif text-lg tracking-[0.08em]">{t(`${nextElement}.name`)}</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </>
  );
}
