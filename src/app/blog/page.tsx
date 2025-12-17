import { fetchAPI } from '@/lib/api';
import { BLOG_PAGE_QUERY } from '@/lib/queries';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyContact } from '@/components/StickyContact';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Blog & Makaleler | Akdeniz Hukuk",
  description: "Hukuk dünyasından güncel haberler, emsal kararlar ve bilgilendirici makaleler.",
};

async function getPosts() {
  const data = await fetchAPI(BLOG_PAGE_QUERY);
  return data?.posts?.nodes || [];
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero / Başlık Alanı */}
      <div className="bg-[#1a2a4a] text-white py-20 relative overflow-hidden">
        {/* Arka plan deseni */}
        <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/10">
            <Tag className="w-4 h-4 text-[#c9a962]" />
            <span className="text-gray-100">Hukuk Kütüphanesi</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog ve Makaleler</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hukuki süreçler hakkında merak ettikleriniz, güncel yargıtay kararları ve uzman görüşleri.
          </p>
        </div>
      </div>

      {/* Blog Listesi */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Eğer hiç yazı yoksa gösterilecek mesaj */}
        {posts.length === 0 && (
            <div className="text-center py-20">
                <p className="text-gray-500 text-lg">Henüz blog yazısı eklenmemiş.</p>
            </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 flex flex-col"
            >
              {/* Resim Alanı */}
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <ImageWithFallback
                  src={post.featuredImage?.node?.sourceUrl || 'https://images.unsplash.com/photo-1505664194779-8beaceb93744'}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Kategori Etiketi */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#1a2a4a] shadow-sm">
                  {post.categories?.nodes[0]?.name || 'Blog'}
                </div>
              </div>
              
              {/* İçerik */}
              <div className="p-6 flex flex-col flex-1">
                {/* Tarih */}
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                    <Calendar className="w-3 h-3 text-[#c9a962]" />
                    <span>{new Date(post.date).toLocaleDateString('tr-TR')}</span>
                </div>

                {/* Başlık */}
                <h3 className="text-xl font-bold mb-3 text-[#1a2a4a] group-hover:text-[#c9a962] transition-colors leading-tight line-clamp-2">
                    {post.title}
                </h3>
                
                {/* Özet */}
                <div 
                    className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-1"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
                
                {/* Buton */}
                <Link 
                  href={`/blog/${post.slug}`}
                  className="mt-auto w-full border border-gray-200 text-gray-700 hover:bg-[#1a2a4a] hover:text-white hover:border-transparent px-4 py-3 rounded-xl transition-all text-sm font-bold flex items-center justify-center gap-2"
                >
                  Okumaya Devam Et
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      <StickyContact />
      <Footer />
    </div>
  );
}