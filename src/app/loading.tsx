import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f8f6f1]/90 backdrop-blur-sm transition-all">
      {/* Merkezdeki İçerik */}
      <div className="flex flex-col items-center gap-6">
        
        {/* Logo Alanı ve Animasyon */}
        <div className="relative">
            {/* Dışta dönen altın halka */}
            <div className="absolute inset-[-10px] border-4 border-transparent border-t-[#c9a962] border-r-[#c9a962] rounded-full w-[calc(100%+20px)] h-[calc(100%+20px)] animate-spin"></div>
            
            {/* Logo */}
            <div className="relative w-32 h-16 md:w-48 md:h-24 bg-white/50 rounded-lg p-2 backdrop-blur-md shadow-sm animate-pulse">
                <Image
                    src="/logo.jpeg"
                    alt="Yükleniyor..."
                    fill
                    className="object-contain mix-blend-multiply"
                    priority
                />
            </div>
        </div>

        {/* Yükleniyor Yazısı */}
        <div className="flex flex-col items-center gap-2">
            <h3 className="text-[#1a2a4a] text-lg font-bold tracking-widest uppercase animate-pulse">
                Akdeniz Hukuk
            </h3>
            <div className="flex gap-1">
                <span className="w-2 h-2 bg-[#c9a962] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-2 h-2 bg-[#c9a962] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-2 h-2 bg-[#c9a962] rounded-full animate-bounce"></span>
            </div>
        </div>

      </div>
    </div>
  );
}