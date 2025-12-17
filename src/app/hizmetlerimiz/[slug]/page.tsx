import { fetchAPI } from '@/lib/api';
import { GET_SERVICE_BY_SLUG } from '@/lib/queries';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyContact } from '@/components/StickyContact';
import { notFound } from 'next/navigation';

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // Next.js 15+ için params'ı await ediyoruz
  const { slug } = await params;

  // API'den veriyi çek
  const data = await fetchAPI(GET_SERVICE_BY_SLUG, {
    variables: { slug: slug }
  });

  // Eğer veri yoksa 404 sayfasına at
  if (!data?.hizmet) {
    notFound();
  }

  const service = data.hizmet;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <div className="relative h-[40vh] min-h-[400px] w-full overflow-hidden">
          <ImageWithFallback
            src={service.featuredImage?.node?.sourceUrl || 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73'}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {service.title}
              </h1>
            </div>
          </div>
        </div>

        {/* İçerik Alanı */}
        <div className="max-w-4xl mx-auto px-4 py-20">
          <div 
            className="
              prose prose-lg max-w-none 
              prose-headings:text-[#1a2a4a] prose-a:text-[#c9a962]
              text-gray-700
            "
            dangerouslySetInnerHTML={{ __html: service.content }} 
          />
        </div>
      </main>

      <StickyContact />
      <Footer />
    </div>
  );
}