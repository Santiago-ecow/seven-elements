import type { ReactNode } from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale, getMessages, getTranslations } from "next-intl/server";
import { Cormorant_Garamond, Noto_Sans_JP } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollAnimationProvider } from "@/components/ScrollAnimationProvider";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: {
      default: t("title"),
      template: `%s | Seven Elements`,
    },
    description: t("description"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: locale === "ja" ? "https://sevenelements.jp" : "https://sevenelements.jp/en",
      siteName: "Seven Elements",
      locale: locale === "ja" ? "ja_JP" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
    },
    alternates: {
      canonical: locale === "ja" ? "https://sevenelements.jp" : "https://sevenelements.jp/en",
      languages: {
        ja: "https://sevenelements.jp",
        en: "https://sevenelements.jp/en",
      },
    },
    icons: {
      icon: "/favicon.svg",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  // Schema.org structured data for LodgingBusiness
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Seven Elements — Lodge7",
    description:
      locale === "ja"
        ? "大分県竹田市の農業倉庫を改装した一棟貸し宿泊施設"
        : "A private retreat in a converted agricultural warehouse in Taketa, Oita",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Taketa",
      addressRegion: "Oita",
      addressCountry: "JP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.97,
      longitude: 131.39,
    },
    priceRange: "$$",
    starRating: {
      "@type": "Rating",
      ratingValue: "5",
    },
  };

  return (
    <html lang={locale} className={`${cormorant.variable} ${notoSansJP.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <ScrollAnimationProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </ScrollAnimationProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
