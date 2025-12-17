import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'AĞIR CEZA HUKUKU',
    subtitle: 'Mersin Ağır Ceza Avukatı',
    description: 'Kişi özgürlüğünü doğrudan ilgilendiren ağır ceza davaları, titiz bir hukuki hazırlık ve güçlü bir savunma stratejisi gerektirir.',
    details: 'AYM Başvurusu & Olağanüstü Kanun Yolları',
    image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmltaW5hbCUyMGxhdyUyMGdhdmVsfGVufDF8fHx8MTc2NDgzMDI2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    id: 2,
    title: 'BOŞANMA VE AİLE HUKUKU',
    subtitle: 'Mersin Boşanma Avukatı',
    description: 'Aile hukuku uyuşmazlıklarında önceliğimiz, süreci müvekkillerimiz için en az yıpratıcı şekilde yönetmektir.',
    details: 'Çekişmeli Boşanma & İstinaf Süreci',
    image: 'https://images.unsplash.com/photo-1633158108216-f10cd3202d8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBsYXclMjBkb2N1bWVudHN8ZW58MXx8fHwxNzY0ODMwMjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    id: 3,
    title: 'TİCARET VE ŞİRKETLER HUKUKU',
    subtitle: 'Mersin Ticaret Avukatı',
    description: 'Mersin’in ticari dinamiklerine hakim ofisimiz, şirketlerin kuruluşundan tasfiyesine kadar tüm süreçlerde yanınızdadır.',
    details: 'Şirketler Hukuku & Danışmanlık',
    image: 'https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxhdyUyMGNvbnRyYWN0fGVufDF8fHx8MTc2NDgzMDI2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-orange-600 to-red-600'
  }
];

export function Services() {
  return (
    <section className="py-24 bg-[#1a2a4a]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Üst Kısım - Başlıklar */}
        <div className="text-center mb-20">
          <div className="inline-block bg-[#c9a962]/10 border border-[#c9a962]/30 text-[#c9a962] px-4 py-1 rounded-full text-sm mb-4 font-medium backdrop-blur-sm">
            Hizmetlerimiz
          </div>
          <h2 className="text-5xl mb-6 text-white font-bold tracking-tight">
            Size Nasıl Yardımcı Olabiliriz?
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto font-light">
            Tüm hukuki ihtiyaçlarınız için profesyonel ve güvenilir çözümler sunuyoruz
          </p>
        </div>

        {/* Hizmet Kartları Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              // KART TASARIMI GÜNCELLEMESİ:
              // bg-white/95: Hafif transparan beyaz arka plan
              // border-2 border-[#1a2a4a]/20: Varsayılan kenarlık (koyu lacivert tonunda, silik)
              // hover:border-[#c9a962]: Hover durumunda kenarlık Gold oluyor
              className="group relative bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-[#1a2a4a]/20 hover:border-[#c9a962] hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden flex-shrink-0">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                {/* Subtitle: Gold renk (#c9a962) */}
                <div className="text-[10px] text-[#c9a962] font-bold uppercase tracking-widest mb-3 text-left">
                  {service.subtitle}
                </div>

                <h3 className="text-2xl font-bold text-[#1a2a4a] mb-3 leading-tight uppercase">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Detay Alanı: Gold border */}
                <div className="text-gray-700 font-medium text-sm mb-8 border-l-4 border-[#c9a962] pl-3 py-1">
                  {service.details}
                </div>

                <div className="mt-auto">
                    <button className="group/btn flex items-center gap-2 text-[#1a2a4a] hover:text-[#c9a962] transition-colors font-bold tracking-wide">
                      Detaylı Bilgi
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tüm Hizmetleri Görüntüle Butonu */}
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