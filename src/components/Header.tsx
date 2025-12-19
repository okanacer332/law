'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'; // GÜNCELLEME: Next.js Link bileşeni eklendi

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 50px aşağı inildiğinde arka planı değiştir
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GÜNCELLEME: İletişim butonuna basıldığında StickyContact'ı açan fonksiyon
  const openContactForm = (e: React.MouseEvent) => {
    e.preventDefault(); // Sayfa yenilemesini veya url değişimini engelle
    setIsOpen(false);   // Mobil menüyü kapat (eğer açıksa)
    window.dispatchEvent(new Event('open-contact-modal')); // StickyContact'a "Açıl" sinyali gönder
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#1a2a4a]/95 backdrop-blur-md border-b border-[#1a2a4a]/20 shadow-lg py-3' 
          : 'bg-transparent py-6' 
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <div className={`flex-shrink-0 flex items-center bg-white/10 rounded-lg p-1 transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
            <Link href="/"> {/* GÜNCELLEME: Link ile sarıldı */}
              <Image
                src="/logo.jpeg" 
                alt="Adalet Hukuk Logo"
                width={200} 
                height={60} 
                className="h-14 w-auto object-contain mix-blend-screen" 
                priority 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* GÜNCELLEME: Link href'leri '/#home' formatında mutlak yol yapıldı */}
            <Link href="/#home" className="text-gray-100 hover:text-[#c9a962] transition-colors relative group font-medium text-sm uppercase tracking-wide">
              Ana Sayfa
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c9a962] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/#about" className="text-gray-100 hover:text-[#c9a962] transition-colors relative group font-medium text-sm uppercase tracking-wide">
              Hakkımızda
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c9a962] group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                className="flex items-center space-x-1 text-gray-100 hover:text-[#c9a962] transition-colors group font-medium text-sm uppercase tracking-wide py-2"
              >
                <Link href="/#services">Hizmetlerimiz</Link>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              {dropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl py-3 border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link href="/hizmetlerimiz/ceza-hukuku" className="block px-6 py-3 text-[#1a2a4a] hover:bg-[#f8f6f1] hover:text-[#c9a962] transition-all font-medium">
                    Ceza Hukuku
                  </Link>
                  <Link href="/hizmetlerimiz/aile-hukuku" className="block px-6 py-3 text-[#1a2a4a] hover:bg-[#f8f6f1] hover:text-[#c9a962] transition-all font-medium">
                    Aile Hukuku
                  </Link>
                  <Link href="/hizmetlerimiz/ticaret-hukuku" className="block px-6 py-3 text-[#1a2a4a] hover:bg-[#f8f6f1] hover:text-[#c9a962] transition-all font-medium">
                    Ticaret Hukuku
                  </Link>
                  <Link href="/hizmetlerimiz" className="block px-6 py-3 text-[#1a2a4a] hover:bg-[#f8f6f1] hover:text-[#c9a962] transition-all font-medium border-t border-gray-100 mt-1">
                    Tüm Hizmetler
                  </Link>
                </div>
              )}
            </div>

            <Link href="/#blog" className="text-gray-100 hover:text-[#c9a962] transition-colors relative group font-medium text-sm uppercase tracking-wide">
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c9a962] group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            {/* GÜNCELLEME: İletişim butonu özel fonksiyonu tetikliyor */}
            <a 
              href="#contact" 
              onClick={openContactForm}
              className="text-gray-100 hover:text-[#c9a962] transition-colors relative group font-medium text-sm uppercase tracking-wide cursor-pointer"
            >
              İletişim
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c9a962] group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Sağ Taraf: Telefon Numarası */}
          <div className="hidden md:flex items-center gap-3 border-l border-white/10 pl-6">
            <div className="bg-[#c9a962]/10 p-2 rounded-full border border-[#c9a962]/30 animate-pulse">
                <Phone className="w-4 h-4 text-[#c9a962]" />
            </div>
            <div className="flex flex-col">
                <span className="text-[10px] text-gray-300 uppercase tracking-widest leading-none mb-1">Bize Ulaşın</span>
                {/* GÜNCELLEME: Telefon linki WhatsApp'a yönlendiriyor */}
                <a 
                    href="https://wa.me/903121234567" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold text-[#c9a962] hover:text-white transition-colors leading-none tracking-wide text-lg"
                >
                    +90 312 123 45 67
                </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-in fade-in slide-in-from-top-4 duration-200 bg-[#1a2a4a] border-t border-[#1a2a4a] shadow-2xl absolute left-0 right-0 top-full">
            <div className="flex flex-col space-y-4 p-6">
              {/* GÜNCELLEME: Mobil menü linkleri de mutlak yol oldu */}
              <Link href="/#home" onClick={() => setIsOpen(false)} className="text-gray-100 hover:text-[#c9a962] transition-colors px-4 py-2 rounded-lg hover:bg-white/5 font-medium">
                Ana Sayfa
              </Link>
              <Link href="/#about" onClick={() => setIsOpen(false)} className="text-gray-100 hover:text-[#c9a962] transition-colors px-4 py-2 rounded-lg hover:bg-white/5 font-medium">
                Hakkımızda
              </Link>
              <Link href="/#services" onClick={() => setIsOpen(false)} className="text-gray-100 hover:text-[#c9a962] transition-colors px-4 py-2 rounded-lg hover:bg-white/5 font-medium">
                Hizmetlerimiz
              </Link>
              <Link href="/#blog" onClick={() => setIsOpen(false)} className="text-gray-100 hover:text-[#c9a962] transition-colors px-4 py-2 rounded-lg hover:bg-white/5 font-medium">
                Blog
              </Link>
              
              {/* GÜNCELLEME: Mobil İletişim butonu da formu açıyor */}
              <a 
                href="#contact" 
                onClick={openContactForm} 
                className="text-gray-100 hover:text-[#c9a962] transition-colors px-4 py-2 rounded-lg hover:bg-white/5 font-medium"
              >
                İletişim
              </a>
              
              {/* Mobil Menü Telefon */}
              <div className="flex items-center gap-3 pt-4 px-4 border-t border-white/10 mt-2">
                <Phone className="w-5 h-5 text-[#c9a962]" />
                {/* GÜNCELLEME: Mobil telefon da WhatsApp oldu */}
                <a 
                  href="https://wa.me/903121234567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold text-[#c9a962] hover:text-white transition-colors text-lg"
                >
                    +90 312 123 45 67
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}