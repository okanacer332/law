import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';

interface BlogProps {
  posts: any[];
}

export function Blog({ posts }: BlogProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="py-24 bg-[#f8f6f1]" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl mb-6 text-[#1a2a4a] font-bold">
            Güncel Hukuk Haberleri
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {posts.map((post) => (
                /* GÜNCELLEME: article etiketini Link içine aldık veya direkt Link yaptık.
                   Burada 'block' class'ı ekleyerek tüm alanı kaplamasını sağladık. */
                <Link 
                    key={post.id} 
                    href={`/blog/${post.slug}`}
                    className="block group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                    <article className="h-full flex flex-col">
                        <div className="relative h-56">
                            <ImageWithFallback
                                src={post.featuredImage?.node?.sourceUrl || 'https://images.unsplash.com/photo-1505664194779-8beaceb93744'}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-[#1a2a4a]">
                                 Blog
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-xl font-bold mb-3 text-[#1a2a4a] line-clamp-2">
                                {post.title}
                            </h3>
                            <div 
                                className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1"
                                dangerouslySetInnerHTML={{ __html: post.excerpt }}
                            />
                            <div className="flex justify-between items-center mt-4 border-t pt-4 border-gray-100 w-full">
                                 <span className="text-xs text-gray-500 flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {new Date(post.date).toLocaleDateString('tr-TR')}
                                 </span>
                                 {/* GÜNCELLEME: Burası Link idi, span yaptık. */}
                                 <span className="text-[#c9a962] font-bold text-sm group-hover:underline flex items-center gap-1">
                                    Devamını Oku
                                 </span>
                            </div>
                        </div>
                    </article>
                </Link>
            ))}
        </div>

        {/* TÜM BLOGLAR BUTONU */}
        <div className="text-center">
            <Link 
            href="/blog" 
            className="inline-block bg-[#1a2a4a] text-white px-8 py-3.5 rounded-full hover:bg-[#1a2a4a]/90 hover:shadow-xl transition-all duration-300 items-center gap-2 text-sm font-bold"
            >
                Tüm Makaleleri Gör
            </Link>
        </div>

      </div>
    </section>
  );
}