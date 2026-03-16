import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.sevenelements.jp",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          ja: "https://www.sevenelements.jp",
          en: "https://www.sevenelements.jp/en",
        },
      },
    },
  ];
}
