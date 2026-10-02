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
  title: "Arpan Sanap — Computer Science & Design Builder",
  description:
    "Portfolio of Arpan Sanap. Computer Science & Design student exploring AI, software, data, and product design through building.",
  keywords: [
    "Arpan Sanap",
    "Portfolio",
    "Computer Science",
    "UI/UX Design",
    "Artificial Intelligence",
    "Full-Stack Developer",
    "Machine Learning",
    "Curiosity Machine",
    "MarketPulse",
  ],
  authors: [{ name: "Arpan Sanap" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-ink font-sans text-bone">
        {children}
      </body>
    </html>
  );
}
