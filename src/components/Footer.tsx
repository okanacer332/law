import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-[#0f1a2e] text-white pt-20 pb-10 border-t border-[#0f1a2e]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Üst Kısım: 3 Sütunlu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Sol: Logo ve Açıklama */}
          <div className="flex flex-col items-start">
            <div className="bg-white/5 p-2 rounded-lg mb-6 inline-block">
                <Image
                  src="/logo.jpeg" 
                  alt="Adalet Hukuk Logo"
                  width={180} 
                  height={60} 
                  className="h-12 w-auto object-contain mix-blend-screen" 
                />
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Hukuki süreçlerinizde güvenilir çözüm ortağınız. 
              Deneyimli kadromuzla adalet arayışınızda yanınızdayız.
            </p>
          </div>

          {/* Orta: Hızlı Linkler */}
          <div className="flex flex-col md:items-center">
            <div className="text-left">
                <h4 className="text-xl mb-6 font-semibold text-[#c9a962]">Hızlı Bağlantılar</h4>
                <ul className="space-y-3">
                <li><a href="#home" className="text-gray-400 hover:text-[#c9a962] transition-colors">Ana Sayfa</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-[#c9a962] transition-colors">Hakkımızda</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-[#c9a962] transition-colors">Hizmetlerimiz</a></li>
                <li><a href="#blog" className="text-gray-400 hover:text-[#c9a962] transition-colors">Blog</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-[#c9a962] transition-colors">İletişim</a></li>
                </ul>
            </div>
          </div>

          {/* Sağ: İletişim Bilgileri */}
          <div>
            <h4 className="text-xl mb-6 font-semibold text-[#c9a962]">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#c9a962] flex-shrink-0 mt-0.5" />
                <span className="text-sm">Atatürk Cad. No: 123<br />Çankaya, Ankara</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#c9a962] flex-shrink-0" />
                <span className="text-sm">+90 312 123 45 67</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#c9a962] flex-shrink-0" />
                <span className="text-sm">info@adalethukuk.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Alt Kısım: Telif Hakkı ve Sosyal Medya */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Telif Hakkı ve ACR Tech İmzası */}
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>&copy; 2025</span>
              
              {/* Tıklanabilir Logo Alanı */}
              <a 
                href="https://acrtech.com.tr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-80 hover:scale-105 transition-all inline-flex items-center"
                title="ACR Tech Yazılım ve Teknoloji"
              >
                {/* SVG Kodunu Buraya Yapıştırıyoruz */}
                <svg 
                  width="80" 
                  height="24" 
                  viewBox="0 0 100 30" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-auto" // Yüksekliği satıra uyarladık
                >
                  {/* Burası örnek bir placeholder. Kendi SVG path'lerinizi buraya yapıştırın */}
                  <rect width="100" height="30" rx="4" fill="#c9a962"/>
                  <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#0f1a2e" fontSize="12" fontWeight="bold">ACR TECH</text>
                </svg>
              </a>

              <span>. Tüm hakları saklıdır.</span>
            </div>

            {/* Sosyal Medya İkonları (Sağ Alt) */}
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#c9a962] transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#c9a962] transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#c9a962] transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#c9a962] transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

        </div>
      </div>
    </footer>
  );
}