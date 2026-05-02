import localFont from "next/font/local";
const fontInter = localFont({ src: "./_font/Inter-VariableFont.ttf" });

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fontInter.className}>
      <body className="text-neutral-950 bg-white">{children}</body>
    </html>
  );
}
