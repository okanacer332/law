import { fetchAPI } from '@/lib/api';
import { HOMEPAGE_QUERY } from '@/lib/queries'; 
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Blog } from '@/components/Blog';
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
   
      <Hero />
      
      {/* Verileri prop olarak gönderiyoruz */}
      <Services services={services} />
      <Blog posts={posts} />
      
      <StickyContact />
      <Footer />
    </div>
  );
}