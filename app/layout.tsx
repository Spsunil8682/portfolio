import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sunil Kumar Patidar — Frontend Engineer · Next.js Developer",
  description:
    "Portfolio of Sunil Kumar Patidar — Associate Software Developer at Primathon. I build fast, accessible e-commerce experiences with Next.js, React, TypeScript and Tailwind.",
  keywords: [
    "Sunil Kumar Patidar",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Tailwind CSS",
    "Shopify Storefront",
    "Portfolio",
  ],
  authors: [{ name: "Sunil Kumar Patidar" }],
  icons: {
    icon: [
      { url: "/sunil1.webp", type: "image/webp" },
    ],
    shortcut: "/sunil1.webp",
    apple: "/sunil1.webp",
  },
  openGraph: {
    title: "Sunil Kumar Patidar — Frontend Engineer",
    description:
      "Frontend engineer at Primathon — building fast, accessible e-commerce experiences with Next.js.",
    type: "website",
    images: [
      {
        url: "/sunil1.webp",
        alt: "Sunil Kumar Patidar — Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Sunil Kumar Patidar — Frontend Engineer",
    description:
      "Frontend engineer at Primathon — building fast, accessible e-commerce experiences with Next.js.",
    images: ["/sunil1.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
