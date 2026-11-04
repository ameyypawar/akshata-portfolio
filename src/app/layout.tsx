import type { Metadata } from "next";
import { Bodoni_Moda, Fragment_Mono, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const fragment = Fragment_Mono({
  variable: "--font-fragment",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Akshata Nalawade — Full-stack, AI & ML",
  description:
    "Electronics & Computer Science engineering student in Mumbai building full-stack web apps, applied machine learning, and conversational AI.",
  openGraph: {
    title: "Akshata Nalawade",
    description:
      "Full-stack, applied ML, and conversational AI. Builder of House Muse, an AI interior design platform.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${hanken.variable} ${fragment.variable} antialiased`}
    >
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
