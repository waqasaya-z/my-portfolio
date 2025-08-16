export interface IStartTranslation {
  greeting: string;
  name: string;
  iam: string;
  role: string;
  contact: string;
  downloadCV: string;
  skills: string[];
}

export interface ILabTranslation {
  sectionTitle: string;
}

export interface IAboutTranslation {
  sectionTitle: string;
  class: string;
  constructor?: {
    name: string;
    email: string;
  };
  workExperience: Record<string, string>[];
  education: Record<string, string>[];
  skills: string[];
}

export interface IContactTranslation {
  sectionTitle: string;
  heading: string;
  description: string;
  email: string;
  description_form: string;
  placeholder: string;
  message: string;
  submit: string;
}

export interface IFooterTranslation {
  copyright: string;
  builtWith: string;
}

// Main translation data interface
export interface ITranslationData {
  Start: IStartTranslation;
  Lab: ILabTranslation;
  About: IAboutTranslation;
  Contact: IContactTranslation;
  Footer: IFooterTranslation;
}

export interface Author {
  name: string;
  url: string;
}

export type Referrer =
  | "no-referrer"
  | "origin"
  | "origin-when-cross-origin"
  | "same-origin"
  | "strict-origin"
  | "strict-origin-when-cross-origin"
  | "unsafe-url";

export interface RobotsInfo {
  index?: boolean;
  follow?: boolean;
  noimageindex?: boolean;
  "max-video-preview"?: number;
  "max-image-preview"?: "none" | "standard" | "large";
  "max-snippet"?: number;
}

export interface Robots {
  index?: boolean;
  follow?: boolean;
  nocache?: boolean;
  googleBot?: RobotsInfo;
}

export interface Alternates {
  canonical?: string;
  languages?: Record<string, string>; // e.g. { en: "...", ur: "..." }
}

export interface OpenGraphImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

export interface OpenGraph {
  title?: string;
  description?: string;
  url?: string;
  siteName?: string;
  images?: OpenGraphImage[];
  locale?: string;
  type?: string;
}

export interface TwitterImage {
  url: string;
  alt?: string;
}

export interface Twitter {
  card?: "summary" | "summary_large_image" | "app" | "player";
  title?: string;
  description?: string;
  creator?: string;
  images?: TwitterImage[];
}

export interface IMetadata {
  title: string;
  description: string;
  keywords: string[];
  authors: Author[];
  creator: string;
  publisher: string;
  metadataBase: string;
  applicationName: string;
  generator: string;
  referrer: Referrer;
  robots: Robots;
  alternates: Alternates;
  openGraph: OpenGraph;
  twitter: Twitter;
  category: string;
}

// Navbar Types
export interface NavbarItem {
  id: number;
  title: string;
  hash: string;
}

export interface INavbar {
  name: string;
  navbar_items: NavbarItem[];
}

// Footer Types
export interface IFooter {
  name: string;
}

// Root Type
export interface SiteContent {
  Metadata: IMetadata;
  Navbar: INavbar;
  Footer: IFooter;
}
