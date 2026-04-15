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
  title: {
    default: "Hope Football Foundation",
    template: "%s | Hope Football Foundation",
  },
  description:
    "Bringing Hope through Football — a Northern Ireland charity with partner clubs in Northern Ireland, Senegal, and the Republic of the Congo.",
  openGraph: {
    title: "Hope Football Foundation",
    description:
      "Bringing Hope through Football — opportunity and community for young people in Northern Ireland, Senegal, and the Republic of the Congo.",
    siteName: "Hope Football Foundation",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
