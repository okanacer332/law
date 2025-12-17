import { fetchAPI } from '@/lib/api';
import { GET_POST_BY_SLUG } from '@/lib/queries';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyContact } from '@/components/StickyContact';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const data = await fetchAPI(GET_POST_BY_SLUG, {
    variables: { slug: slug }
  });

  if (!data?.post) {
    notFound();
  }

  const post = data.post;
  
  // Kategori ismini al (yoksa 'Genel' yazsın)
  const categoryName = post.categories?.nodes[0]?.name || 'Hukuk Blogu';

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* HERO SECTION */}
        <div className="relative h-[50vh] min-h-[450px] w-full overflow-hidden">
          <ImageWithFallback
            src={post.featuredImage?.node?.sourceUrl || 'https://images.unsplash.com/photo-1505664194779-8beaceb93744'}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          {/* Karartma Overlay */}
          <div className="absolute inset-0 bg-black/60" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
              
              {/* Geri Dön Butonu */}
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20"
              >
                <ArrowLeft className="w-4 h-4" />
                Blog Yazılarına Dön
              </Link>
              
              {/* Kategori Etiketi */}
              <div className="flex justify-center mb-6">
                <span className="bg-[#c9a962] text-[#1a2a4a] px-4 py-1 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                    <Tag className="w-3 h-3" />
                    {categoryName}
                </span>
              </div>

              {/* Başlık */}
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-md">
                {post.title}
              </h1>

              {/* Meta Bilgiler (Yazar & Tarih) */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 text-sm md:text-base font-medium">
                <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                    <User className="w-4 h-4 text-[#c9a962]" />
                    <span>{post.author?.node?.name || 'Editör'}</span>
                </div>
                <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                    <Calendar className="w-4 h-4 text-[#c9a962]" />
                    <span>{new Date(post.date).toLocaleDateString('tr-TR')}</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* İÇERİK ALANI */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white">
            {/* Hizmet detayındaki gibi 'prose' sınıfını kullanarak 
                WordPress'ten gelen HTML'i otomatik stillendiriyoruz.
            */}
            <div 
              className="
                prose prose-lg max-w-none 
                prose-headings:text-[#1a2a4a] prose-headings:font-bold 
                prose-p:text-gray-700 prose-p:leading-8
                prose-a:text-[#c9a962] prose-a:font-bold hover:prose-a:underline
                prose-strong:text-[#1a2a4a]
                prose-li:marker:text-[#c9a962]
                prose-blockquote:border-l-[#c9a962] prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic
              "
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
            
            {/* Alt Etiket Alanı */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center">
                <div className="flex gap-2 text-gray-500 text-sm">
                    Etiket: <span className="font-semibold text-[#1a2a4a]">{categoryName}</span>
                </div>
            </div>
          </div>
        </div>
      </main>

      <StickyContact />
      <Footer />
    </div>
  );
}