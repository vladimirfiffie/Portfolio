"use client";

import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "../index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        {children}
        <Analytics />
        <Script
          src="https://code.iconify.design/1/1.0.7/iconify.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
