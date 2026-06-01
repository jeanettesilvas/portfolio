import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Sans, Roboto_Slab } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next"
import { Footer } from "@/components/footer"
import { Nav } from "@/components/nav"
import { ThemeProvider } from "@/components/theme-provider"

const robotoSlabHeading = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-heading",
});

const instrumentSans = Instrument_Sans({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://www.jeanettesilvas.com"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Jeanette Silvas",
    template: "%s — Jeanette Silvas",
  },
  description:
    "Design engineer working across Figma and React. Currently at Amazon, building tools for sellers worldwide.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Jeanette Silvas",
    title: "Jeanette Silvas — Design Engineer",
    description:
      "Design engineer working across Figma and React. Currently at Amazon, building tools for sellers worldwide.",
    images: [{ url: "/images/portrait.jpeg", width: 800, alt: "Jeanette Silvas" }],
  },
  twitter: {
    card: "summary",
    title: "Jeanette Silvas — Design Engineer",
    description:
      "Design engineer working across Figma and React. Currently at Amazon, building tools for sellers worldwide.",
    images: ["/images/portrait.jpeg"],
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
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", instrumentSans.variable, robotoSlabHeading.variable)}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='dark'||(s===null&&d)){document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <div className="w-full max-w-7xl mx-auto flex flex-col flex-1">
            <Nav />
            {children}
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
