import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Sans, Roboto_Slab } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";

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

export const metadata: Metadata = {
  title: "Jeanette Silvas",
  description: "Designer and engineer. The handoff between design and engineering is where products lose fidelity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", instrumentSans.variable, robotoSlabHeading.variable)}
    >
      <body className="min-h-full flex flex-col">
        <div className="w-full max-w-6xl mx-auto flex flex-col flex-1">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
