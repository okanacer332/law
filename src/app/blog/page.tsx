import { blogs } from '@/data/blogs';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyContact } from '@/components/StickyContact';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Makaleler | Akdeniz Hukuk",
  description: "Hukuk dünyasından güncel haberler, emsal kararlar ve bilgilendirici makaleler.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero / Başlık Alanı */}
      <div className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/10">
            <Tag className="w-4 h-4 text-amber-500" />
            <span className="text-amber-50">Hukuk Kütüphanesi</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog ve Makaleler</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hukuki süreçler hakkında merak ettikleriniz, güncel yargıtay kararları ve uzman görüşleri.
          </p>
        </div>
      </div>

      {/* Blog Listesi */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Opsiyonel: Arama Barı veya Kategori Filtresi Eklenebilir */}
        {/* <div className="mb-12 flex justify-center">...</div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 flex flex-col"
            >
              {/* Resim Alanı */}
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                {article.image ? (
                   <ImageWithFallback
                   src={article.image}
                   alt={article.title}
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                 />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${article.gradient || 'from-gray-200 to-gray-400'}`}></div>
                )}
               
                <div className={`absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-sm`}>
                  {article.tag}
                </div>
              </div>
              
              {/* İçerik */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3 text-amber-600" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-amber-600" />
                    <span>{article.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-amber-600 transition-colors leading-tight">
                    {article.title}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-1">
                    {article.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${article.slug}`}
                  className="mt-auto w-full border border-gray-200 text-gray-700 hover:bg-gray-800 hover:text-white hover:border-transparent px-4 py-3 rounded-xl transition-all text-sm font-medium flex items-center justify-center gap-2"
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