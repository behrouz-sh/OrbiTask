import localFont from "next/font/local";
const fontInter = localFont({ src: "./_font/Inter-VariableFont.ttf" });

import "./globals.css";

import Header from "./_components/layouts/Header";
import Footer from "./_components/layouts/Footer";


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fontInter.className}>
      <body className="text-neutral-950 bg-white">
        <Header />
        <main className="space-y-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
