import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { ArrowRight, User, Calendar, TrendingUp } from 'lucide-react';
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="relative h-56">
                        <ImageWithFallback
                            src={post.featuredImage?.node?.sourceUrl || 'https://images.unsplash.com/photo-1505664194779-8beaceb93744'}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-[#1a2a4a]">
                            {post.categories?.nodes[0]?.name || 'Hukuk'}
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-[#1a2a4a] line-clamp-2">
                            {post.title}
                        </h3>
                        <div 
                            className="text-gray-600 text-sm mb-4 line-clamp-3"
                            dangerouslySetInnerHTML={{ __html: post.excerpt }}
                        />
                        <div className="flex justify-between items-center mt-4 border-t pt-4 border-gray-100">
                             <span className="text-xs text-gray-500 flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {new Date(post.date).toLocaleDateString('tr-TR')}
                             </span>
                             <Link href={`/blog/${post.slug}`} className="text-[#c9a962] font-bold text-sm hover:underline">
                                Devamını Oku
                             </Link>
                        </div>
                    </div>
                </article>
            ))}
        </div>
      </div>
    </section>
  );
}