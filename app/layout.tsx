import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Health Companion",
  description: "Your personal health and wellness companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <div className="mx-auto max-w-[420px] min-h-screen bg-gradient-to-b from-health-bg-start to-health-bg-end shadow-2xl">
          {children}
        </div>
      </body>
    </html>
  );
}
