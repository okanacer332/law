import { MapPin } from 'lucide-react';

export function Map() {
  // Ekranda görünecek tam adres (Detaylı)
  const displayAddress = "Mahmudiye Mah. Zeytinlibahçe Cd. Hisar İş Merkezi Kat:5/10 Akdeniz/Mersin";
  
  // Haritada aranacak adres (Daha sade - Kat bilgisi olmadan binayı bulması daha kolaydır)
  const queryAddress = "Hisar İş Merkezi, Zeytinlibahçe Cd. Akdeniz Mersin";
  
  // Düzeltilmiş Google Maps Embed Linki
  // q: Query (Sorgu)
  // z: Zoom (15 idealdir, bina seviyesi)
  // t: Map Type (m: map, k: satellite) - Boş bırakırsak varsayılan gelir
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(queryAddress)}&t=&z=16&ie=UTF8&iwloc=B&output=embed`;

  return (
    <section className="relative w-full h-[450px] bg-gray-100">
      {/* Harita Iframe */}
      <iframe
        width="100%"
        height="100%"
        id="gmap_canvas"
        src={mapSrc}
        title="Ofis Konumu"
        className="filter grayscale hover:grayscale-0 transition-all duration-500 border-0"
        loading="lazy"
        allowFullScreen
      ></iframe>

      {/* Üstüne binen adres kartı */}
      <div className="absolute top-1/2 left-4 md:left-20 transform -translate-y-1/2 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-gray-100 max-w-sm hidden md:block">
        <div className="flex items-start gap-4">
            <div className="bg-[#c9a962]/20 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-[#c9a962]" />
            </div>
            <div>
                <h3 className="text-[#1a2a4a] font-bold text-lg mb-2">Ofisimize Bekleriz</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                    {displayAddress}
                </p>
                <a 
                  href={`https://www.google.com/maps/dir//${encodeURIComponent(queryAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-xs font-bold text-[#c9a962] hover:underline"
                >
                  Yol Tarifi Al →
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}