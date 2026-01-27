import type { Metadata } from "next";
import { Cairo_Play } from "next/font/google";
import "./globals.css";
import Nav from "@/components/header/nav";



const notoSerifHentaigana = Cairo_Play({
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
