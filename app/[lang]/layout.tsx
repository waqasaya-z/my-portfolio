import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ActiveContextProvider from "@/context/activeContext";
import Navbar from "@/sections/layout/Navbar";
import Footer from "@/sections/layout/Footer";
import { SiteContent } from "@/types/app.types";
import { Analytics } from "@vercel/analytics/next";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"]
});

export async function generateMetadata({
  params
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const language = params?.lang ?? "en";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/${language}/layout/`,
    { next: { revalidate: 60 } }
  );

  const data = await res.json();
  return data.Metadata;
}

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width"
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const dir = ["ar", "he", "fa", "ur", "sd"].includes(params.lang)
    ? "rtl"
    : "ltr";

  const language = params?.lang ?? "en";
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/${language}/layout/`
  );

  const data: SiteContent = await res.json();

  return (
    <html lang={language} dir={dir} className="scroll-smooth">
      <head>
        <link rel="icon" href="/svg/code.svg" />
      </head>
      <body className={`${roboto.className} bg-[#1a1527]`}>
        <Analytics />
        <ActiveContextProvider>
          <Navbar pageData={data.Navbar} />
          {children}
          <Footer pageData={data.Footer} />
        </ActiveContextProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
