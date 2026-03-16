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

  const baseUrl = "https://www.sevenelements.jp";

  return {
    title: {
      default: t("title"),
      template: `%s | Seven Elements`,
    },
    description: t("description"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: locale === "ja" ? baseUrl : `${baseUrl}/en`,
      siteName: "Seven Elements",
      locale: locale === "ja" ? "ja_JP" : "en_US",
      alternateLocale: locale === "ja" ? "en_US" : "ja_JP",
      type: "website",
      images: [
        {
          url: `${baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Lodge7 — Seven Elements",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [`${baseUrl}/images/og-image.jpg`],
    },
    alternates: {
      canonical: locale === "ja" ? baseUrl : `${baseUrl}/en`,
      languages: {
        ja: baseUrl,
        en: `${baseUrl}/en`,
        "x-default": baseUrl,
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
    name: "Lodge7",
    alternateName: "Seven Elements Lodge7",
    description:
      locale === "ja"
        ? "阿蘇くじゅう国立公園のふもと、農業倉庫をリノベーションした一日一組限定の一棟貸し宿"
        : "A one-group-per-day private lodge converted from a farm warehouse at the foot of Aso-Kuju National Park",
    url: "https://www.sevenelements.jp/",
    image: "https://www.sevenelements.jp/images/hideout.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "竹田市",
      addressRegion: "大分県",
      addressCountry: "JP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.0667,
      longitude: 131.3167,
    },
    email: "info@sevenelements.jp",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "薪ストーブ", value: true },
      { "@type": "LocationFeatureSpecification", name: "EV充電 (Tesla Wall Connector)", value: true },
      { "@type": "LocationFeatureSpecification", name: "Starlink Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "BBQコンロ", value: true },
      { "@type": "LocationFeatureSpecification", name: "ウッドデッキ", value: true },
    ],
    numberOfRooms: 1,
    petsAllowed: false,
    checkinTime: "15:00",
    checkoutTime: "10:00",
    currenciesAccepted: "JPY",
    priceRange: "$$",
    sameAs: [
      "https://www.airbnb.jp/rooms/1578736113379179111",
    ],
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
