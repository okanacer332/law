'use client';

import { useState } from 'react';
import { Send, Phone, X, MessageSquare } from 'lucide-react';

export function StickyContact() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        // Kapalıyken buton Lacivert (Navy), İkon Altın (Gold)
        className="fixed bottom-4 right-4 z-50 bg-[#1a2a4a] text-[#c9a962] p-4 rounded-full shadow-lg hover:bg-[#0f1a2e] transition-all hover:scale-110 animate-in fade-in zoom-in duration-300 border border-[#c9a962]/30"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-10 duration-500">
      {/* Arka Plan: Gold (#c9a962) 
          Metinler: Navy (#1a2a4a)
      */}
      <div className="bg-[#c9a962]/95 backdrop-blur-lg border-t border-[#1a2a4a]/20 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] p-3 md:p-4">
        <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center gap-3 xl:gap-6">
          
          {/* Sol Kısım: Başlık ve Kapat Butonu */}
          <div className="flex items-center justify-between w-full xl:w-auto xl:justify-start gap-4">
            <div className="hidden xl:block min-w-[200px]">
              <h3 className="text-[#1a2a4a] font-bold text-lg flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#1a2a4a]" />
                Hızlı İletişim
              </h3>
              <p className="text-[#1a2a4a]/80 text-xs font-medium">Size hemen geri dönüş yapalım.</p>
            </div>
            
            {/* Mobil için Başlık */}
            <div className="xl:hidden flex items-center gap-2 text-[#1a2a4a] text-sm font-bold">
              <span className="w-2 h-2 rounded-full bg-[#1a2a4a] animate-pulse"/>
              Sizi Arayalım
            </div>

            <button 
              onClick={() => setIsOpen(false)}
              className="text-[#1a2a4a]/70 hover:text-[#1a2a4a] transition-colors p-1 bg-white/10 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Alanı */}
          <form className="w-full flex-1" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-12 gap-2 md:gap-3">
              
              {/* İsim Soyisim: Mobilde 6 birim (Yarım), Desktopta 3 birim */}
              <div className="col-span-6 md:col-span-3">
                <input
                  type="text"
                  placeholder="Adınız Soyadınız"
                  className="w-full bg-white/90 text-[#1a2a4a] placeholder:text-gray-500 text-sm px-3 md:px-4 h-10 md:h-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a2a4a] transition-all border border-transparent hover:bg-white"
                />
              </div>

              {/* Telefon: Mobilde 6 birim (Yarım), Desktopta 3 birim */}
              <div className="col-span-6 md:col-span-3">
                <input
                  type="tel"
                  placeholder="Telefon No"
                  className="w-full bg-white/90 text-[#1a2a4a] placeholder:text-gray-500 text-sm px-3 md:px-4 h-10 md:h-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a2a4a] transition-all border border-transparent hover:bg-white"
                />
              </div>

              {/* Konu (Yeni Alan): Mobilde 8 birim, Desktopta 4 birim */}
              <div className="col-span-8 md:col-span-4">
                <input
                  type="text"
                  placeholder="Konu / Mesajınız"
                  className="w-full bg-white/90 text-[#1a2a4a] placeholder:text-gray-500 text-sm px-3 md:px-4 h-10 md:h-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a2a4a] transition-all border border-transparent hover:bg-white"
                />
              </div>

              {/* Gönder Butonu: Mobilde 4 birim, Desktopta 2 birim */}
              <div className="col-span-4 md:col-span-2">
                <button 
                  type="submit"
                  // Buton: Gradient Lacivert, Yazı Gold
                  className="w-full h-10 md:h-12 bg-gradient-to-r from-[#1a2a4a] to-[#0f1a2e] hover:to-[#1a2a4a] text-[#c9a962] font-bold rounded-lg transition-all flex items-center justify-center gap-2 text-sm shadow-md active:scale-95 border border-[#1a2a4a]/20"
                >
                  <span className="hidden sm:inline">Gönder</span>
                  <span className="sm:hidden">Yolla</span> {/* Mobilde yer kazanmak için kısa metin */}
                  <Send className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              </div>

            </div>
          </form>

        </div>
      </div>
    </div>
  );
}