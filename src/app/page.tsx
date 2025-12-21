import { fetchAPI } from '@/lib/api';
import { HOMEPAGE_QUERY } from '@/lib/queries';
// Header layout'a taşındığı için buradan kaldırılmıştı, eğer hala varsa siliniz.
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Blog } from '@/components/Blog';
import { Map } from '@/components/Map'; // YENİ: Map bileşenini import edin
import { StickyContact } from '@/components/StickyContact';
import { Footer } from '@/components/Footer';

// Veriyi çeken ana fonksiyon
async function getData() {
  const data = await fetchAPI(HOMEPAGE_QUERY);
  return {
    posts: data?.posts?.nodes || [],
    services: data?.hizmetler?.nodes || []
  };
}

export default async function Home() {
  // Veriyi sunucuda çekiyoruz
  const { posts, services } = await getData();

  return (
    <div className="min-h-screen bg-white">
      {/* Header layout.tsx içinde olduğu için buradan kaldırıldı */}
      <Hero />
      
      {/* Verileri prop olarak gönderiyoruz */}
      <Services services={services} />
      <Blog posts={posts} />
      
      {/* YENİ: Harita Bileşeni Blog ve Footer arasına eklendi */}
      <Map />
      
      <StickyContact />
      <Footer />
    </div>
  );
}