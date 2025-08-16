import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.waqasayaz.com";

  const languages = [
    "en-US",
    "en-GB",
    "en",
    "es",
    "de",
    "pt",
    "fr",
    "ar",
    "ur",
    "el",
    "ru",
    "ja",
    "ko",
    "sd"
  ];

  const sections = ["start", "lab", "about", "contact"];

  const urls: MetadataRoute.Sitemap = [];

  languages.forEach((lang) => {
    const langUrl = `${baseUrl}/${lang}`;

    urls.push({
      url: `${langUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0
    });

    sections.forEach((section) => {
      urls.push({
        url: `${langUrl}/#${section}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8
      });
    });
  });

  return urls;
}
