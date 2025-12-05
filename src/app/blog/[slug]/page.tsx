import { blogs } from '@/data/blogs';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyContact } from '@/components/StickyContact';

interface BlogDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailPage(props: BlogDetailProps) {
  const params = await props.params;
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <div className="relative h-[50vh] min-h-[450px] w-full overflow-hidden">
          {/* Eğer resim yoksa default bir gradient göster */}
          {blog.image ? (
             <ImageWithFallback
             src={blog.image}
             alt={blog.title}
             className="w-full h-full object-cover"
           />
          ) : (
            <div className={`w-full h-full bg-gradient-to-r ${blog.gradient || 'from-gray-800 to-gray-900'}`}></div>
          )}
         
          <div className="absolute inset-0 bg-black/50" />
          
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
              <Link 
                href="/#blog" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Blog Yazılarına Dön
              </Link>
              
              <div className="flex justify-center mb-6">
                <span className="bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    {blog.tag}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 text-sm md:text-base">
                <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-amber-500" />
                    <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-500" />
                    <span>{blog.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white">
            {/* Blog İçeriği Stil Tanımları */}
            <div 
              className="
                text-gray-700 leading-8 text-lg
                [&_p]:mb-6
                [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-gray-900 [&_h3]:mt-10 [&_h3]:mb-4
                [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-8 [&_ul]:space-y-3
                [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-8 [&_ol]:space-y-3
                [&_li]:text-gray-700
                [&_strong]:font-semibold [&_strong]:text-gray-900
                [&_.lead]:text-xl [&_.lead]:font-medium [&_.lead]:text-gray-600
                [&_blockquote]:border-l-4 [&_blockquote]:border-amber-500 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-6
              "
              dangerouslySetInnerHTML={{ __html: blog.content }} 
            />
            
            {/* Paylaş / Etiket Alanı (Opsiyonel görsel doluluk için) */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center">
                <div className="flex gap-2">
                    <Tag className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-500 text-sm">Etiket: {blog.tag}</span>
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