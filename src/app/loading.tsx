import { Scale } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f8f6f1]/95 backdrop-blur-sm transition-all">
      {/* Merkezdeki İçerik */}
      <div className="flex flex-col items-center gap-5">
        
        {/* İkon ve Dönen Halka */}
        <div className="relative flex items-center justify-center w-20 h-20">
            {/* Sabit gri halka (Zemin) */}
            <div className="absolute inset-0 border-4 border-gray-200 rounded-full opacity-30"></div>
            
            {/* Dönen altın halka (Animasyon) */}
            <div className="absolute inset-0 border-4 border-transparent border-t-[#c9a962] border-r-[#c9a962] rounded-full animate-spin"></div>
            
            {/* Logo yerine Terazi İkonu */}
            <Scale className="w-8 h-8 text-[#1a2a4a]" />
        </div>

        {/* Yazılar */}
        <div className="flex flex-col items-center gap-1">
            <h3 className="text-[#1a2a4a] text-lg font-bold tracking-widest animate-pulse">
                Yükleniyor...
            </h3>
            <p className="text-gray-500 text-sm font-medium tracking-wide">
                Akdeniz Avukatlık
            </p>
        </div>

      </div>
    </div>
  );
}