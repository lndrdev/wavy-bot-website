import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Wavy Music Bot",
  description: "Elevate your Discord server with high-quality music streaming, intuitive controls, and a wave of awesome features.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="https://i.ibb.co/YRzfm4d/Wavy-Bot-Logo.webp" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Providers attribute="class" defaultTheme="system" enableSystem>
            {children}
          </Providers>
        </body>
      </html>
    </>
  );
}
