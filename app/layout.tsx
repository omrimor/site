import "./globals.css";

import { ReactNode } from "react";
import { Navbar } from "~/app/components/nav";
import { SandpackCSS } from "~/app/writing/[slug]/sandpack";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.omrimor.co.il"),
  title: {
    default: "Omri Mor",
    template: "%s | Omri Mor",
  },
  description: "Frontend Developer.",
  openGraph: {
    title: "Omri Mor",
    description: "Frontend Developer.",
    url: "https://www.omrimor.co.il",
    siteName: "Omri Mor",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Omri Mor",
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      className="font-sans bg-white dark:bg-neutral-900 text-stone-900 dark:text-white"
      lang="en"
    >
      <head>
        <SandpackCSS />
      </head>
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
