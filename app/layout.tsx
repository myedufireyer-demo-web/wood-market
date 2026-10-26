import type { Metadata } from "next";
import { Prompt, Sarabun } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const head = Prompt({ subsets: ["thai", "latin"], weight: ["500", "700"], variable: "--font-head" });
const body = Sarabun({ subsets: ["thai", "latin"], weight: ["400", "600"], variable: "--font-body" });

export const metadata: Metadata = { title: site.name, description: site.tagline };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={`${head.variable} ${body.variable}`}>
      <body><Header /><main>{children}</main><Footer /></body>
    </html>
  );
}
