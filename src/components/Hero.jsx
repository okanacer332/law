import React from 'react';
import NextLink from './NextLink'; // Buton için gerekli bileşen
// ResmiGazeteTicker'ı sildik veya yorum satırına aldık, import etmemize gerek yok.

const Hero = () => {
  return (
    <section>
      {/* Hero container */}
      <div
        className="swiper-container hero position-relative"
        style={{
          backgroundImage: `url(/img/main1.jpg)`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          height: '90vh', // Ekranı tam kaplaması için biraz yüksek tutuyoruz
        }}
      >
        <div className="overlay"></div>

        <div className="container h-100 d-flex justify-content-center align-items-center position-relative z-2">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="text-center col-lg-10"> {/* Genişliği sınırladık ki mobilde taşmasın */}
              
              {/* --- BAŞLIK KISMI --- */}
              {/* 'oswald' fontu başlıklar için daha otoriter durur */}
              <h3 className="fs-56 ls-xl text-white mb-3 animate__animated animate__zoomIn animate__delay-1s oswald text-uppercase">
                Akdeniz <span className="text-main">Hukuk & Danışmanlık</span>
              </h3>

              {/* --- ALT METİN / SLOGAN --- */}
              {/* Daha açıklayıcı ve güven veren bir cümle */}
              <p className="fs-26 text-white mb-5 animate__animated animate__zoomIn animate__delay-2s roboto" style={{ opacity: 0.9 }}>
                Hukuki süreçlerinizde <br className="d-md-none" /> {/* Mobilde alt satıra geçsin */}
                şeffaf, hızlı ve güvenilir çözüm ortağınız.
              </p>

              {/* --- BUTON (GERİ GETİRDİK) --- */}
              {/* Sayfa boş durmasın diye aksiyon butonu ekliyoruz */}
              <div className="d-inline-block animate__animated animate__slideInUp animate__delay-3s position-relative z-2">
                <NextLink
                  title="Ücretsiz Danışın"
                  href="#contact"
                  className="btn btn-lg primary-bg text-white rounded-pill px-5 py-3 fw-bold" // Yuvarlak ve büyük buton
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;