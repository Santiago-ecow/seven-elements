import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/Hero";
import { Hideout } from "@/components/Hideout";
import { SevenElements } from "@/components/SevenElements";
import { Wonder } from "@/components/Wonder";
import { Space } from "@/components/Space";
import { Coffee } from "@/components/Coffee";
import { Amenities } from "@/components/Amenities";
import { Farmers } from "@/components/Farmers";
import { Location } from "@/components/Location";
import { FooterCta } from "@/components/FooterCta";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Hideout />
      <SevenElements />
      <Wonder />
      <Space />
      <Coffee />
      <Amenities />
      <Farmers />
      <Location />
      <FooterCta />
    </>
  );
}
