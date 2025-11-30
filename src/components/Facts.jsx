import React, { useEffect, useState, useRef } from 'react';
import { facts } from 'data';

// Basit Sayaç Bileşeni (0'dan hedefe sayar)
const Counter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Bir kere görünce izlemeyi bırak
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) observer.unobserve(countRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const incrementTime = (duration / end) * 10; // Hız ayarı

    const timer = setInterval(() => {
      start += 1;
      // Büyük sayılarda (örn 1000) tek tek saymasın, atlayarak saysın
      if (end > 100) start += 10; 
      
      setCount(prev => (prev + (end > 100 ? 10 : 1) > end ? end : prev + (end > 100 ? 10 : 1)));

      if (start >= end) clearInterval(timer);
    }, 10); // Her 10ms'de bir güncelle

    return () => clearInterval(timer);
  }, [end, duration, isVisible]);

  return (
    <span ref={countRef} className="counter">
      {count}{suffix}
    </span>
  );
};

const Facts = () => {
  return (
    <section className="wrapper bg-primary text-white wrapper-border">
      <div className="container py-14 py-md-16">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          
          {/* SOL TARA: Metin Alanı */}
          <div className="col-lg-6">
            <h2 className="fs-16 text-uppercase text-secondary mb-3">BAŞARILARIMIZ</h2>
            <h3 className="display-4 mb-5 text-white">Rakamlarla Adalet Hukuk</h3>
            <p className="lead mb-6">
              Müvekkillerimize sunduğumuz hizmetlerde şeffaflık, güven ve sonuç odaklı yaklaşımımızla fark yaratıyoruz. Yılların getirdiği tecrübeyi, modern hukuk anlayışıyla birleştiriyoruz.
            </p>
            <p className="mb-6">
              Her dosya bizim için özeldir ve her müvekkilimizin davası, kendi davamız kadar önemlidir. İstatistiklerimiz, başarımızın ve müvekkillerimizin bize olan güveninin bir kanıtıdır.
            </p>
            {/* Buton (İsteğe bağlı) */}
            <a href="/contact" className="btn btn-secondary rounded-pill mt-2">Bize Ulaşın</a>
          </div>

          {/* SAĞ TARAF: İstatistik Grid'i */}
          <div className="col-lg-6">
            <div className="row gx-md-5 gy-5">
              {facts.map((item) => (
                <div className="col-md-6" key={item.id}>
                  <div className="card shadow-lg bg-white bg-opacity-10 border-0 text-white text-center p-4 h-100">
                    <div className="card-body">
                      <h3 className="display-4 mb-2 text-secondary">
                        <Counter end={item.number} suffix={item.suffix} />
                      </h3>
                      <h4 className="fs-18 mb-1">{item.title}</h4>
                      <p className="mb-0 text-white-50 fs-14">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      
      {/* Özel Stil Tanımları */}
      <style jsx>{`
        .bg-opacity-10 {
          background-color: rgba(255, 255, 255, 0.05) !important; /* Kart arkaplanı hafif şeffaf */
          backdrop-filter: blur(5px); /* Hafif buzlu cam efekti */
        }
      `}</style>
    </section>
  );
};

export default Facts;