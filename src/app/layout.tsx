import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "Akshata Nalawade — Applied AI & ML",
  description:
    "Electronics & Computer Science engineering student in Mumbai building applied AI: generative image pipelines (SDXL, ControlNet, LoRA), computer vision, and conversational AI.",
  openGraph: {
    title: "Akshata Nalawade",
    description:
      "Applied AI: generative models, computer vision, and conversational AI. Builder of House Muse, an AI interior design platform.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} antialiased`}>
      <body className="min-h-dvh overflow-x-clip">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
