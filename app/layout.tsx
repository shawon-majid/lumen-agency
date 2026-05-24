import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Cursor } from "@/components/cursor";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://defineai.studio"),
  title: {
    default: "Define AI — We define AI for your business.",
    template: "%s · Define AI",
  },
  description:
    "Define AI is a senior advisory studio for AI. We figure out what AI should actually do for your business — then design, build, and hand over the systems that ship it.",
  openGraph: {
    title: "Define AI — We define AI for your business.",
    description:
      "A senior advisory studio for AI. We define what AI should do for your business, then build the systems that ship it.",
    siteName: "Define AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Define AI — We define AI for your business.",
    description:
      "A senior advisory studio for AI. We define what AI should do for your business, then build the systems that ship it.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${hanken.variable} ${jetbrains.variable}`}
    >
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
        <Cursor />
      </body>
    </html>
  );
}
