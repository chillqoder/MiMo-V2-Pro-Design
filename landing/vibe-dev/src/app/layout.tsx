import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VIBE.DEV — Ship Your Product in Days, Not Months",
  description:
    "We combine AI-powered development with human expertise to ship your app, website, or MVP at unprecedented speed. Vibe coding — describe what you want, we build it.",
  keywords: [
    "vibe coding",
    "AI development",
    "rapid prototyping",
    "MVP development",
    "web app development",
    "startup development",
  ],
  openGraph: {
    title: "VIBE.DEV — Ship Your Product in Days, Not Months",
    description:
      "AI-powered development agency. We ship your product 10x faster.",
    type: "website",
    locale: "en_US",
    siteName: "VIBE.DEV",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIBE.DEV — Ship Your Product in Days, Not Months",
    description: "AI-powered development agency. We ship your product 10x faster.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-body antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
