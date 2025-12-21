import type { Metadata } from "next";
import "./globals.css";
import { fetchAPI } from '@/lib/api';
import { MENU_SERVICES_QUERY } from '@/lib/queries';
import { Header } from '@/components/Header'; // Header'ı layout'a ekliyoruz

export const metadata: Metadata = {
  title: "Akdeniz Hukuk",
  description: "Uzman kadromuz ile her türlü hukuki konuda yanınızdayız.",
};

async function getMenuServices() {
  const data = await fetchAPI(MENU_SERVICES_QUERY);
  return data?.hizmetler?.nodes || [];
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menuItems = await getMenuServices();

  return (
    <html lang="tr">
      <body>
        <Header menuItems={menuItems} />
        {children}
      </body>
    </html>
  );
}