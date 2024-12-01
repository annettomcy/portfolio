import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://annettomcy.com"),
  title: {
    default: "Annet Tomcy - Frontend Engineer | Web Development Portfolio",
    template: "%s | Annet Tomcy Portfolio",
  },
  description:
    "Experienced Frontend Engineer Annet Tomcy specializing in React, TypeScript, and modern web technologies. Explore my professional portfolio, projects, and skills.",
  keywords: [
    "Annet Tomcy",
    "Frontend Developer",
    "Web Developer",
    "React Engineer",
    "TypeScript",
    "Next.js",
    "Frontend Portfolio",
  ],
  authors: [{ name: "Annet Tomcy" }],
  creator: "Annet Tomcy",
  publisher: "Annet Tomcy",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-[#D0D7FE] antialiased selection:bg-blue-200 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
