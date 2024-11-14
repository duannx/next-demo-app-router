import type { Metadata } from "next";
import localFont from "next/font/local";
import { Revalia } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.scss";
import Script from "next/script";
import Header from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const revaliaFont = Revalia({
  weight: "400",
  subsets: ["latin"],
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const metric = localFont({
  src: "./fonts/metricweb-light.woff2",
  variable: "--font-metric-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script strategy="afterInteractive" id="1">
          {`performance.mark('script afterInteractive added')`}
        </Script>
        <Script strategy="beforeInteractive" id="2">
          {`performance.mark('script beforeInteractive added')`}
        </Script>
        <Script strategy="lazyOnload" id="3">
          {`performance.mark('script lazyOnload added')`}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${revaliaFont.className} ${metric.variable}`}
      >
        <main className={styles.container}>
          <Header></Header>
          {children}
        </main>
      </body>
    </html>
  );
}
