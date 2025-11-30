import React from 'react';
import Image from 'next/image';

const MovingScales = () => {
  return (
    <div className="moving-scales-wrapper">
      <div className="container-fluid position-relative h-100 overflow-hidden">
        
        {/* Hareket Eden Eleman */}
        <div className="floating-scales">
            <Image
              src="/img/scales.png"
              alt="Adalet Terazisi"
              width={150} // Görsel boyutunu buradan ayarlayabilirsin
              height={150}
              className="img-fluid"
              unoptimized
            />
        </div>

      </div>

      <style jsx>{`
        .moving-scales-wrapper {
          height: 160px; /* Şeridin yüksekliği */
          background-color: #f8f9fa; /* Hafif gri, Facts ve Footer arasında kontrast yaratır */
          position: relative;
          border-top: 1px solid rgba(0,0,0,0.05);
          display: flex;
          align-items: center;
          /* Derinlik için hafif iç gölge */
          box-shadow: inset 0 0 20px rgba(0,0,0,0.03);
        }

        .floating-scales {
          position: absolute;
          top: 50%;
          right: -200px; /* Ekranın sağ dışından başla */
          transform: translateY(-50%);
          animation: floatLeft 30s linear infinite; /* 30 saniyede bir tur */
          opacity: 0.8; /* Hafif şeffaflık ile 'hayalet' gibi süzülme etkisi */
          filter: drop-shadow(0 15px 15px rgba(0,0,0,0.1)); /* Yere vuran gölge (Derinlik) */
        }

        /* Hover yapınca dursun istersen bu bloğu açabilirsin:
        .moving-scales-wrapper:hover .floating-scales {
            animation-play-state: paused;
            opacity: 1;
            cursor: pointer;
        } 
        */

        @keyframes floatLeft {
          0% {
            right: -200px; /* Başlangıç */
            transform: translateY(-50%) rotate(0deg);
          }
          50% {
            /* Ortadayken hafifçe sallansın (Opsiyonel canlılık) */
            transform: translateY(-55%) rotate(5deg); 
          }
          100% {
            right: 100%; /* Bitiş (Soldan çıkış) */
            transform: translateY(-50%) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default MovingScales;