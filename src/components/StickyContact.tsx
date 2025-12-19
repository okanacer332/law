'use client';

import { useState, useEffect } from 'react';
import { Send, Phone, X, MessageSquare } from 'lucide-react';

export function StickyContact() {
  // GÜNCELLEME 1: Başlangıç değeri 'false' yapıldı (Sayfa açılışında kapalı).
  const [isOpen, setIsOpen] = useState(false);

  // GÜNCELLEME 2: Header'dan gelen "Açıl" sinyalini dinleyen useEffect.
  useEffect(() => {
    const handleOpenModal = () => setIsOpen(true);
    
    // 'open-contact-modal' olayını dinle
    window.addEventListener('open-contact-modal', handleOpenModal);
    
    // Temizlik (Component silinirse dinlemeyi bırak)
    return () => window.removeEventListener('open-contact-modal', handleOpenModal);
  }, []);

  // WhatsApp Numarası
  const whatsappNumber = "03121234567"; 
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <>
      {/* =============================================
        1. KAPALI DURUMDA GÖRÜNEN BUTONLAR (TRIGGER)
        =============================================
        isOpen true ise: Aşağı kayarak kaybolur (translate-y-32 opacity-0)
        isOpen false ise: Yukarı çıkarak görünür (translate-y-0 opacity-100)
      */}
      <div 
        className={`fixed bottom-4 right-4 z-40 flex flex-col gap-3 transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-y-32 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
        }`}
      >
        {/* WhatsApp Butonu */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20b85c] transition-transform hover:scale-110 flex items-center justify-center"
          aria-label="WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>

        {/* Formu Açma Butonu */}
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#1a2a4a] text-[#c9a962] p-4 rounded-full shadow-lg hover:bg-[#0f1a2e] transition-transform hover:scale-110 border border-[#c9a962]/30"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>

      {/* =============================================
        2. AÇILIR FORM ALANI (PANEL)
        =============================================
        isOpen true ise: translate-y-0 (Ekranda görünür)
        isOpen false ise: translate-y-[110%] (Ekranın altına saklanır)
      */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-y-0' : 'translate-y-[110%]'
        }`}
      >
        <div className="bg-[#c9a962]/95 backdrop-blur-lg border-t border-[#1a2a4a]/20 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] p-3 md:p-4">
          <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center gap-3 xl:gap-6">
            
            {/* Sol Kısım: Başlık ve WhatsApp */}
            <div className="flex items-center justify-between w-full xl:w-auto xl:justify-start gap-4">
              
              {/* Desktop Başlık */}
              <div className="hidden xl:block min-w-[200px]">
                <h3 className="text-[#1a2a4a] font-bold text-lg flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#1a2a4a]" />
                  Hızlı İletişim
                </h3>
                <p className="text-[#1a2a4a]/80 text-xs font-medium">Size hemen geri dönüş yapalım.</p>
              </div>
              
              {/* Mobil Başlık */}
              <div className="xl:hidden flex items-center gap-2 text-[#1a2a4a] text-sm font-bold">
                <span className="w-2 h-2 rounded-full bg-[#1a2a4a] animate-pulse"/>
                Sizi Arayalım
              </div>

              <div className="flex items-center gap-3">
                  {/* WhatsApp Butonu (Formun içinde sabit) */}
                  <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#20b85c] text-white p-2 rounded-full transition-all hover:scale-110 shadow-sm flex items-center justify-center"
                      title="WhatsApp ile Yazın"
                  >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                  </a>
              </div>
            </div>

            {/* Form Alanı */}
            <form className="w-full flex-1" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-12 gap-2 md:gap-3">
                <div className="col-span-6 md:col-span-3">
                  <input
                    type="text"
                    placeholder="Adınız Soyadınız"
                    className="w-full bg-white/90 text-[#1a2a4a] placeholder:text-gray-500 text-sm px-3 md:px-4 h-10 md:h-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a2a4a] transition-all border border-transparent hover:bg-white"
                  />
                </div>

                <div className="col-span-6 md:col-span-3">
                  <input
                    type="tel"
                    placeholder="Telefon No"
                    className="w-full bg-white/90 text-[#1a2a4a] placeholder:text-gray-500 text-sm px-3 md:px-4 h-10 md:h-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a2a4a] transition-all border border-transparent hover:bg-white"
                  />
                </div>

                {/* Konu Alanı */}
                <div className="col-span-8 md:col-span-3">
                  <input
                    type="text"
                    placeholder="Konu / Mesajınız"
                    className="w-full bg-white/90 text-[#1a2a4a] placeholder:text-gray-500 text-sm px-3 md:px-4 h-10 md:h-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a2a4a] transition-all border border-transparent hover:bg-white"
                  />
                </div>

                {/* Butonlar Alanı (Gönder + Kapat) */}
                <div className="col-span-4 md:col-span-3 flex items-center gap-2">
                  <button 
                    type="submit"
                    className="flex-1 h-10 md:h-12 bg-gradient-to-r from-[#1a2a4a] to-[#0f1a2e] hover:to-[#1a2a4a] text-[#c9a962] font-bold rounded-lg transition-all flex items-center justify-center gap-2 text-sm shadow-md active:scale-95 border border-[#1a2a4a]/20"
                  >
                    <span className="hidden sm:inline">Gönder</span>
                    <span className="sm:hidden">Yolla</span>
                    <Send className="w-3 h-3 md:w-4 md:h-4" />
                  </button>

                  {/* KAPAT BUTONU */}
                  <button 
                      onClick={() => setIsOpen(false)}
                      className="h-10 md:h-12 w-10 md:w-12 flex items-center justify-center bg-[#1a2a4a]/10 hover:bg-[#1a2a4a]/20 text-[#1a2a4a] rounded-lg transition-colors"
                      title="Kapat"
                  >
                      <X className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}