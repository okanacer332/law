import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ServiceProps {
  services: any[];
}

export function Services({ services }: ServiceProps) {
  if (!services || services.length === 0) return null;

  return (
    <section className="py-24 bg-[#1a2a4a]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-[#c9a962]/10 border border-[#c9a962]/30 text-[#c9a962] px-4 py-1 rounded-full text-sm mb-4 font-medium backdrop-blur-sm">
            Hizmetlerimiz
          </div>
          <h2 className="text-5xl mb-6 text-white font-bold tracking-tight">
            Size Nasıl Yardımcı Olabiliriz?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            /* GÜNCELLEME: En dış katman div yerine Link oldu. 
               Böylece kartın her yeri tıklanabilir. */
            <Link
              href={`/hizmetlerimiz/${service.slug}`}
              key={service.id}
              className="group relative bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-[#1a2a4a]/20 hover:border-[#c9a962] hover:-translate-y-2 flex flex-col block"
            >
              <div className="relative h-64 overflow-hidden flex-shrink-0">
                <ImageWithFallback
                  src={service.featuredImage?.node?.sourceUrl || 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73'}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#1a2a4a] mb-3 leading-tight uppercase">
                  {service.title}
                </h3>

                <div 
                    className="text-gray-600 mb-5 leading-relaxed line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: service.content || '' }}
                />

                <div className="mt-auto">
                    {/* GÜNCELLEME: Burası Link idi, şimdi görsel bir div oldu. 
                        İç içe link hatası olmaması için. */}
                    <div className="group/btn flex items-center gap-2 text-[#1a2a4a] hover:text-[#c9a962] transition-colors font-bold tracking-wide">
                      Detaylı Bilgi
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* TÜM HİZMETLER BUTONU */}
        <div className="text-center">
          <Link 
            href="/hizmetlerimiz" 
            className="group inline-flex bg-[#c9a962] text-[#1a2a4a] px-10 py-4 rounded-full hover:bg-[#d4bc7e] hover:shadow-[0_0_20px_rgba(201,169,98,0.4)] transition-all duration-300 items-center justify-center gap-2 mx-auto font-bold text-lg"
          >
            Tüm Hizmetleri Görüntüle
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}