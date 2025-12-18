import { fetchAPI } from '@/lib/api';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyContact } from '@/components/StickyContact';
import { ArrowRight, Scale } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Akdeniz Hukuk",
  description: "Ceza, Aile, Ticaret ve diğer hukuk alanlarındaki uzman hizmetlerimiz.",
};

// Sıralı Hizmetleri Çeken Sorgu
const ALL_SERVICES_QUERY = `
  query AllServices {
    hizmetler(first: 100, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
      nodes {
        id
        title
        slug
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

async function getServices() {
  const data = await fetchAPI(ALL_SERVICES_QUERY);
  return data?.hizmetler?.nodes || [];
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Başlık Alanı */}
      <div className="bg-[#1a2a4a] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/10">
            <Scale className="w-5 h-5 text-[#c9a962]" />
            <span className="text-gray-100">Uzmanlık Alanlarımız</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hukuki Hizmetlerimiz</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Deneyimli kadromuzla, hukukun her alanında yanınızdayız. İhtiyaç duyduğunuz çözümler için doğru adrestesiniz.
          </p>
        </div>
      </div>

      {/* Hizmetler Listesi */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {services.length === 0 && (
            <div className="text-center py-10">
                <p className="text-gray-500">Henüz hizmet girişi yapılmamış.</p>
            </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: any) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Resim */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={service.featuredImage?.node?.sourceUrl || 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73'}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4">
                   <h3 className="text-2xl font-bold text-white shadow-sm uppercase">{service.title}</h3>
                </div>
              </div>
              
              {/* İçerik */}
              <div className="p-6 flex-1 flex flex-col">
                <div 
                    className="text-gray-600 mb-6 flex-1 leading-relaxed line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: service.content }}
                />
                
                <Link 
                  href={`/hizmetlerimiz/${service.slug}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-gray-200 text-[#1a2a4a] hover:bg-[#c9a962] hover:text-[#1a2a4a] hover:border-transparent transition-all duration-300 font-bold"
                >
                  İncele
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Alt Bilgi Kutusu */}
        <div className="mt-20 bg-[#c9a962] rounded-3xl p-8 md:p-16 text-center text-[#1a2a4a] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-20 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-5 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Özel Bir Hukuki Durumunuz mu Var?</h2>
                <p className="text-[#1a2a4a]/80 text-lg mb-8 max-w-2xl mx-auto font-medium">
                    Listelenen hizmetlerin dışında, spesifik hukuki ihtiyaçlarınız için de yanınızdayız. Detaylı görüşme için ofisimizi ziyaret edebilirsiniz.
                </p>
                <Link href="/#contact" className="inline-block bg-[#1a2a4a] text-white px-10 py-4 rounded-full font-bold hover:bg-[#0f1a2e] hover:scale-105 transition-all shadow-lg">
                    Bizimle İletişime Geçin
                </Link>
            </div>
        </div>
      </main>

      <StickyContact />
      <Footer />
    </div>
  );
}

