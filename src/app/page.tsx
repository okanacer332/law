import { fetchAPI } from '@/lib/api';
import { HOMEPAGE_QUERY } from '@/lib/queries';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Blog } from '@/components/Blog';
// Map importunu sildik
import { StickyContact } from '@/components/StickyContact';
import { Footer } from '@/components/Footer';

async function getData() {
  const data = await fetchAPI(HOMEPAGE_QUERY);
  return {
    posts: data?.posts?.nodes || [],
    services: data?.hizmetler?.nodes || []
  };
}

export default async function Home() {
  const { posts, services } = await getData();

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services services={services} />
      <Blog posts={posts} />
      
      {/* <Map /> satırını buradan kaldırdık */}
      
      <StickyContact />
      <Footer />
    </div>
  );
}