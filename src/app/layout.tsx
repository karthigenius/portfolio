import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Karthikeyan Surendran | AI-Augmented Full Stack & Cloud Developer",
  description: "AI-augmented Full Stack Developer with hands-on experience building web applications, cloud deployments, and AI-powered automation.",
  keywords: ["Karthikeyan Surendran", "AI Developer", "Full Stack Developer", "Cloud Developer", "LLM", "RAG", "AWS", "GCP", "Portfolio"],
  authors: [{ name: "Karthikeyan Surendran" }],
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    { rel: "manifest", url: "/site.webmanifest" },
  ],
  openGraph: {
    title: "Karthikeyan Surendran | Portfolio",
    description: "AI-Augmented Full Stack & Cloud Developer Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} scroll-smooth`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'system';
                  var dark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  if (dark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })()
            `
          }}
        />
      </head>
      <body className="font-sans bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300 antialiased min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
