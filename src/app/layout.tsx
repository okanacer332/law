import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akdeniz Hukuk",
  description: "Uzman kadromuz ile her türlü hukuki konuda yanınızdayız.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}