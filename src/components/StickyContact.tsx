// src/components/StickyContact.tsx
'use client';

import { useState } from 'react';
import { Send, Phone, X, MessageSquare } from 'lucide-react';
import { cn } from '@/components/ui/utils'; // veya '@/components/ui/utils' projenin yapısına göre

export function StickyContact() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 bg-amber-600 text-white p-4 rounded-full shadow-lg hover:bg-amber-700 transition-all hover:scale-110 animate-in fade-in zoom-in duration-300"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-10 duration-500">
      {/* Backdrop & Container 
         Mobilde padding azaltıldı (p-3), Desktopta (p-4)
      */}
      <div className="bg-gray-900/95 backdrop-blur-lg border-t border-white/10 shadow-2xl p-3 md:p-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-3 md:gap-6">
          
          {/* Sol Kısım: Başlık ve Kapat Butonu */}
          <div className="flex items-center justify-between w-full md:w-auto md:justify-start gap-4">
            <div className="hidden md:block">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <Phone className="w-5 h-5 text-amber-500" />
                Hızlı İletişim
              </h3>
              <p className="text-gray-400 text-xs">Size hemen geri dönüş yapalım.</p>
            </div>
            
            {/* Mobil için Başlık (Daha kompakt) */}
            <div className="md:hidden flex items-center gap-2 text-white text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"/>
              Sizi Arayalım
            </div>

            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Alanı */}
          <form className="w-full flex-1" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col md:flex-row gap-2 md:gap-3">
              
              {/* Grid yapısı: Mobilde yan yana (cols-2), Desktopta esnek */}
              <div className="grid grid-cols-2 md:flex md:flex-1 gap-2 md:gap-3">
                <input
                  type="text"
                  placeholder="Adınız Soyadınız"
                  // DEĞİŞİKLİK: bg-white ile tam kontrast, text-gray-900 ile net yazı
                  className="w-full bg-white text-gray-900 placeholder:text-gray-500 text-sm md:text-base px-3 md:px-4 h-9 md:h-11 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                />
                
                <input
                  type="tel"
                  placeholder="Telefon Numaranız"
                  className="w-full bg-white text-gray-900 placeholder:text-gray-500 text-sm md:text-base px-3 md:px-4 h-9 md:h-11 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                />
              </div>

              <button 
                type="submit"
                className="w-full md:w-auto bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 h-9 md:h-11 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm md:text-base whitespace-nowrap shadow-lg active:scale-95"
              >
                <span>Gönder</span>
                <Send className="w-3 h-3 md:w-4 md:h-4" />
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}