import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { Calendar, User, TrendingUp, ArrowRight } from 'lucide-react';
import { blogs } from '@/data/blogs'; // Veri dosyasını import ediyoruz
import Link from 'next/link';

export function Blog() {
  // Öne çıkan (Featured) veya ilk 3 makaleyi ana vitrin için alıyoruz
  const mainArticles = blogs.filter(b => b.isFeatured).slice(0, 3);
  
  // Geri kalanları veya feature olmayanları sidebar için alıyoruz
  // (Eğer featured olmayan yoksa, id'si 3'ten büyükleri al diyebiliriz)
  const sidebarArticles = blogs.filter(b => !b.isFeatured);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-amber-50/30" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1 rounded-full text-sm mb-4 shadow-sm">
            <TrendingUp className="w-4 h-4 text-amber-600" />
            <span className="text-amber-600">Blog & Makaleler</span>
          </div>
          <h2 className="text-5xl mb-6 text-gray-900">
            Güncel Hukuk Haberleri
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Hukuk dünyasından güncel gelişmeler ve bilgilendirici makaleler
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Articles - 3 Columns */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {mainArticles.map((article) => (
                <article
                  key={article.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-1 flex flex-col"
                >
                  <div className="relative h-56 overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={article.image || ''}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${article.gradient} opacity-40 group-hover:opacity-50 transition-opacity`}></div>
                    <div className={`absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-gray-800`}>
                      {article.tag}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl mb-3 group-hover:text-amber-600 transition-colors leading-snug font-bold">
                        {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed flex-1">
                        {article.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-5 pb-5 border-b border-gray-100 mt-auto">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link 
                        href={`/blog/${article.slug}`}
                        className="flex-1 bg-gray-800 text-white px-4 py-2.5 rounded-xl hover:bg-gray-700 hover:shadow-lg transition-all text-sm text-center flex items-center justify-center gap-2"
                      >
                        Devamını Oku
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar - Scrollable Articles */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 sticky top-24 shadow-lg border border-gray-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-1 w-8 bg-amber-600 rounded-full"></div>
                <h3 className="text-xl font-bold">Diğer Makaleler</h3>
              </div>
              
              <div className="space-y-3 max-h-[650px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-gray-100">
                {sidebarArticles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/blog/${article.slug}`}
                    className="block group/item bg-gradient-to-br from-gray-50 to-amber-50/50 p-4 rounded-xl border border-gray-100 hover:border-amber-300 hover:shadow-md transition-all cursor-pointer hover:-translate-y-0.5"
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <div className="bg-amber-600 text-white text-xs px-2 py-1 rounded-lg">
                        {article.tag}
                      </div>
                    </div>
                    
                    <h4 className="text-sm mb-2 group-hover/item:text-amber-600 transition-colors leading-snug font-medium">
                        {article.title}
                    </h4>
                    
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}