import type { Metadata } from "next";

import "./embla.css";
import "./globals.css";
import { inter } from "../assets/fonts";

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Pablo Moureira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
