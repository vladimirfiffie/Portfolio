import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import ScrollToTop from "@/components/ui/scroll-to-top";
import "../index.css";

/*
 * Server component on purpose: Next only reads `export const metadata` from
 * server components, so the "use client" directive that used to be here made
 * SEO tags impossible. The one client-side effect now lives in <ScrollToTop />.
 */

const SITE_URL = "https://vladimirfiffie.com";
const TITLE = "Vladimir Fiffie Jr — Creative IT Graduate";
const DESCRIPTION =
  "Information Technology graduate building functional and thoughtfully designed digital experiences. Selected work in React, Next.js, TypeScript and full-stack development.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Vladimir Fiffie Jr",
  },
  description: DESCRIPTION,
  keywords: [
    "Vladimir Fiffie",
    "frontend developer",
    "React developer",
    "Next.js",
    "TypeScript",
    "portfolio",
    "Information Technology",
  ],
  authors: [{ name: "Vladimir Fiffie Jr" }],
  creator: "Vladimir Fiffie Jr",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Vladimir Fiffie Jr",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var saved = localStorage.getItem("theme") || "system";
                var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                var shouldBeDark = saved === "dark" || (saved === "system" && prefersDark);
                document.documentElement.classList.toggle("dark", shouldBeDark);
              })();
            `,
          }}
        />
      </head>
      <body>
        <ScrollToTop />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
