import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link'; // Link bileşenini import ettik

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image & Overlay Wrapper */}
      <div className="absolute inset-0 z-0">
        {/* Arka Plan Görseli */}
        <Image
          src="https://i.ibb.co/hJsvMMb3/Chat-GPT-mage-16-Ara-2025-21-35-03.png" 
          alt="Adalet Hukuk Banner"
          fill
          className="object-cover"
          priority
        />
        
        {/* Gradient Overlay: Soldan sağa lacivert (#1a2a4a) geçişi */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2a4a] via-[#1a2a4a]/90 to-[#1a2a4a]/20" />
      </div>

      {/* Content Container - Sola hizalı */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center">
        <div className="max-w-2xl text-left pt-20">
            
            {/* Ana Başlık */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-white animate-in fade-in slide-in-from-left-6 duration-1000 delay-200">
                Modern Vizyon, <br />
                <span className="text-[#c9a962]">Güçlü Temsil</span>
            </h1>

            {/* Açıklama Metni */}
            <p className="text-xl md:text-2xl mb-10 text-gray-200 leading-relaxed font-light animate-in fade-in slide-in-from-left-8 duration-1000 delay-300">
                Her türlü hukuki meselenizde deneyimli kadromuzla güvenilir çözümler sunuyoruz.
            </p>

            {/* Butonlar - GÜNCELLENDİ */}
            <div className="flex flex-col sm:flex-row gap-5 animate-in fade-in slide-in-from-left-10 duration-1000 delay-500">
                {/* 1. Buton: Hizmetlerimiz */}
                <Link 
                    href="/hizmetlerimiz" 
                    className="group bg-[#c9a962] text-[#1a2a4a] px-8 py-4 rounded-full hover:bg-[#d4bc7e] hover:shadow-[0_0_20px_rgba(201,169,98,0.4)] transition-all duration-300 flex items-center justify-center gap-2 font-bold text-lg"
                >
                    Hizmetlerimiz
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                {/* 2. Buton: Blog */}
                <Link 
                    href="/blog" 
                    className="bg-transparent text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 border-2 border-white/30 backdrop-blur-sm font-semibold text-lg flex items-center justify-center"
                >
                    Blog
                </Link>
            </div>
        </div>
      </div>
    </section>
  );
}