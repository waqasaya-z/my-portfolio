import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.waqasayaz.com";

  const languages = [
    "en-US", // English (US)
    "en-GB", // English (GB)
    "en", // English (generic)
    "es", // Spanish
    "de", // German
    "pt", // Portuguese
    "fr", // French
    "ar", // Arabic
    "ur", // Urdu
    "el", // Greek
    "ru", // Russian
    "ja", // Japanese
    "ko", // Korean
    "sd"
  ];

  const sections = ["home", "lab", "about", "contact"];

  const getImages = (folder: string) => {
    const dirPath = path.join(process.cwd(), "public", "images", folder);
    if (!fs.existsSync(dirPath)) return [];
    return fs
      .readdirSync(dirPath)
      .filter((file) => /\.(png|jpg|jpeg|gif|webp|svg)$/i.test(file))
      .map((file) => `images/${folder}/${file}`);
  };

  const sectionImagesMap: Record<string, string[]> = {
    home: getImages("home"),
    lab: getImages("lab"),
    about: [],
    contact: []
  };

  // Generate all URLs for all languages
  const urls: MetadataRoute.Sitemap = [];

  languages.forEach((lang) => {
    const langUrl = `${baseUrl}/${lang}`;

    // Main page for each language
    urls.push({
      url: `${langUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0
    });

    // Sections for each language
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
