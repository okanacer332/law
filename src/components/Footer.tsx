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
              {/* ADRES GÜNCELLEMESİ BURADA YAPILDI */}
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#c9a962] flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                    Mahmudiye Mah. Zeytinlibahçe Cd.<br />
                    Hisar İş Merkezi Kat:5/10<br />
                    Akdeniz/Mersin
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#c9a962] flex-shrink-0" />
                <span className="text-sm">0 533 312 85 86</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#c9a962] flex-shrink-0" />
                <span className="text-sm">0 538 542 18 30</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#c9a962] flex-shrink-0" />
                <span className="text-sm">0 539 235 99 06</span>
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
            
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>&copy; 2025</span>
              <a 
                href="https://acrtech.com.tr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-80 hover:scale-105 transition-all inline-flex items-center"
                title="ACR Tech Yazılım ve Teknoloji"
              >
                <img 
              src="/acrtech.jpeg" 
              alt="ACR Tech" 
              className="h-8 w-auto rounded-sm" 
            />
              </a>
            </div>

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