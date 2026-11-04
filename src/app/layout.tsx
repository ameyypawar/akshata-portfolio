import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
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
    <html lang="en" className={`${archivo.variable} antialiased`}>
      <body className="min-h-dvh overflow-x-clip">{children}</body>
    </html>
  );
}
