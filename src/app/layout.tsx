import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const authenticSans = localFont({
  src: "./fonts/authentic-sans-60.woff2",
  variable: "--font-authentic-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fleeting Focus: Your Daily Productivity Companion",
  description:
    "In today’s fast-paced world, staying focused on what truly matters can be challenging. Fleeting Focus is designed to help you cut through the noise and concentrate on your most important tasks each day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${authenticSans.variable}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
