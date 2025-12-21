import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ExternalLink } from 'lucide-react';

export function Footer() {
  // Harita Adres Bilgisi
  const queryAddress = "Hisar İş Merkezi, Zeytinlibahçe Cd. Akdeniz Mersin";
  // Harita URL formatı düzeltildi
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(queryAddress)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <footer className="bg-[#0f1a2e] text-white pt-12 pb-6 border-t border-[#0f1a2e]/50 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3 Sütunlu Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8 items-start">
          
          {/* 1. SOL SÜTUN: Harita ve Adres */}
          <div className="flex flex-col gap-4">
            {/* Kompakt Harita */}
            <div className="w-full h-40 rounded-lg overflow-hidden border border-white/10 shadow-lg bg-gray-800 relative group">
                <iframe
                    width="100%"
                    height="100%"
                    src={mapSrc}
                    title="Ofis Konumu"
                    className="filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                    frameBorder="0"
                    scrolling="no"
                ></iframe>
                <a 
                    href={`https://maps.google.com/maps?q=${encodeURIComponent(queryAddress)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto"
                >
                    <span className="bg-white text-[#1a2a4a] text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <ExternalLink className="w-3 h-3" />
                        Haritada Aç
                    </span>
                </a>
            </div>

            {/* Adres Metni */}
            <div className="pl-1">
                <h4 className="font-semibold text-[#c9a962] mb-1 flex items-center gap-2 text-xs uppercase tracking-wider">
                    <MapPin className="w-3 h-3" /> Adres
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                    Mahmudiye Mah. Zeytinlibahçe Cd.<br />
                    Hisar İş Merkezi Kat:5/10<br />
                    Akdeniz/Mersin
                </p>
            </div>
          </div>

          {/* 2. ORTA SÜTUN: Hızlı Bağlantılar */}
          <div className="flex flex-col md:items-center">
             <div className="text-left">
                <h4 className="font-semibold text-[#c9a962] mb-4 text-sm uppercase tracking-wider border-b border-[#c9a962]/30 pb-2 inline-block">
                    Hızlı Bağlantılar
                </h4>
                <ul className="space-y-2.5 text-gray-400 text-sm">
                    <li><a href="#home" className="hover:text-white hover:translate-x-1 transition-all inline-block">Ana Sayfa</a></li>
                    <li><a href="#about" className="hover:text-white hover:translate-x-1 transition-all inline-block">Hakkımızda</a></li>
                    <li><a href="#services" className="hover:text-white hover:translate-x-1 transition-all inline-block">Hizmetlerimiz</a></li>
                    <li><a href="#blog" className="hover:text-white hover:translate-x-1 transition-all inline-block">Blog & Makaleler</a></li>
                    <li><a href="#contact" className="hover:text-white hover:translate-x-1 transition-all inline-block">İletişim</a></li>
                </ul>
             </div>
          </div>

          {/* 3. SAĞ SÜTUN: İletişim ve Sosyal Medya */}
          <div className="flex flex-col md:items-end md:text-right">
             <h4 className="font-semibold text-[#c9a962] mb-4 text-sm uppercase tracking-wider border-b border-[#c9a962]/30 pb-2 inline-block">
                İletişim
             </h4>
             
             <ul className="space-y-4 mb-6">
                <li>
                    <a href="tel:+903121234567" className="group flex items-center md:justify-end gap-3 text-gray-300 hover:text-white transition-colors">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest">Telefon</span>
                            <span className="font-medium text-lg text-white group-hover:text-[#c9a962] transition-colors">0 533 312 85 86</span>
                            <span className="font-medium text-lg text-white group-hover:text-[#c9a962] transition-colors">0 538 542 18 30</span>
                            <span className="font-medium text-lg text-white group-hover:text-[#c9a962] transition-colors">0 539 235 99 06</span>
                        
                        
                        </div>
                        <div className="bg-[#c9a962]/10 p-2 rounded-full group-hover:bg-[#c9a962] transition-colors">
                            <Phone className="w-4 h-4 group-hover:text-[#1a2a4a] text-[#c9a962]" />
                        </div>
                    </a>
                </li>
                <li>
                    <a href="mailto:info@adalethukuk.com" className="group flex items-center md:justify-end gap-3 text-gray-300 hover:text-white transition-colors">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest">E-Posta</span>
                            <span className="font-medium text-white group-hover:text-[#c9a962] transition-colors">info@adalethukuk.com</span>
                        </div>
                        <div className="bg-[#c9a962]/10 p-2 rounded-full group-hover:bg-[#c9a962] transition-colors">
                            <Mail className="w-4 h-4 group-hover:text-[#1a2a4a] text-[#c9a962]" />
                        </div>
                    </a>
                </li>
             </ul>

             {/* Sosyal Medya İkonları */}
             <div className="flex gap-2">
                <a href="#" className="bg-white/5 hover:bg-[#c9a962] hover:text-[#1a2a4a] text-gray-400 p-2 rounded-lg transition-all"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="bg-white/5 hover:bg-[#c9a962] hover:text-[#1a2a4a] text-gray-400 p-2 rounded-lg transition-all"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="bg-white/5 hover:bg-[#c9a962] hover:text-[#1a2a4a] text-gray-400 p-2 rounded-lg transition-all"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="bg-white/5 hover:bg-[#c9a962] hover:text-[#1a2a4a] text-gray-400 p-2 rounded-lg transition-all"><Linkedin className="w-4 h-4" /></a>
             </div>
          </div>

        </div>

        {/* --- GÜNCELLENEN ALAN: ALT KISIM (Software & Design by ACR Tech) --- */}
        <div className="border-t border-white/5 pt-6 flex justify-center items-center">
            <div className="flex items-center gap-2 text-[11px] text-gray-500">
                <span>© 2025 Software & Design by</span>
                
                <a 
                    href="https://acrtech.com.tr" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity bg-white/5 px-3 py-1.5 rounded-full hover:bg-white/10"
                    title="ACR Tech Yazılım ve Teknoloji"
                >
                    {/* Logo: Public klasöründen çağırılıyor */}
                    <img 
                        src="/acrtech.jpeg" 
                        alt="ACR Tech Logo" 
                        className="h-5 w-auto rounded-sm"
                    />
                    
                </a>
            </div>
        </div>

      </div>
    </footer>
  );
}