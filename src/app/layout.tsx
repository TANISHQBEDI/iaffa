import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif_Hentaigana } from "next/font/google";
import "./globals.css";
import Nav from "@/components/header/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const notoSerifHentaigana = Noto_Serif_Hentaigana({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arab Film Festival Of Australia",
  description: "Arab Film Festival Of Australia Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSerifHentaigana.className} antialiased relative`}
      >
        <div className='z-90'>
          <Nav />
        </div>
        {children}
      </body>
    </html>
  );
}
