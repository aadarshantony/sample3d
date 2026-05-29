import type { Metadata } from "next";
import { Syncopate, Outfit } from "next/font/google";
import "./globals.css";

const syncopate = Syncopate({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-syncopate",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "XENO — Meet Your Alien Companion",
  description: "An extraterrestrial experience unlike anything in this galaxy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${syncopate.variable} ${outfit.variable} antialiased`}>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
