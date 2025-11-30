import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import Image from 'next/image';
import { usefulLinks } from '../data.js';

/**
 * Widget component renders a titled list of links
 * @param {Array} list - Array of link objects { id, url, title }
 * @param {string} title - Widget title
 */
const Widget = ({ list, title }) => (
  <div className="widget">
    <h4 className="widget-title fs-18 mb-3 text-uppercase oswald">{title}</h4>
    <ul className="list-unstyled text-reset mb-0">
      {list.map(({ id, title }) => (
        <li key={id} className='roboto'>
          <NextLink href="#" title={title} />
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="border-top footer-bg overflow-hidden">
      <div className="container pt-10 pt-md-12 pb-7">
        <div className="row gx-10 justify-content-around">

          {/* Logo and Company Description */}
          <div className="col-xl-3">
            <div className="widget d-flex flex-column align-items-center">
              <div className="mb-5 d-flex justify-content-md-center justify-content-xxl-start w-100">
                {/* SADECE BURASI GÜNCELLENDİ: logo.webp -> logo.jpeg */}
                <Image
                  src="/img/logo-removebg-preview.png"
                  alt="Logo | Adalet Hukuk"
                  width={200}
                  height={80}
                  unoptimized={true} // Prevents Next.js image optimization
                  className="text-center"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <p className="lead mb-2 text-md-center text-xl-start fs-18 roboto">
                Adalet Hukuk Bürosu, güvenilir, yenilikçi ve çözüm odaklı hukuki danışmanlık hizmetleri sunmaktadır.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="d-flex align-items-xl-start align-items-md-center flex-column">
              <SocialLinks className="nav social text-md-end" />
            </div>
          </div>

          {/* Quick Links Widget */}
          <div className="col-md-6 col-xl-3 mt-md-5 mt-xl-0 mt-10 justify-content-md-center d-flex">
            <Widget list={usefulLinks} title="Hızlı Linkler" />
          </div>

          {/* Contact Information Widget */}
          <div className="col-md-6 col-xl-3 mt-md-5 mt-xl-0 mt-10 justify-content-md-center d-flex">
            <div className="widget">
              <h4 className="widget-title fs-18 mb-3 text-uppercase oswald">İletişim</h4>

              {/* Address */}
              <div className="d-flex mb-3 align-items-start">
                <i className="uil uil-location-pin-alt fs-30 text-main" />
                <address className="ms-2 m-0 mt-1 roboto">
                  Kızılırmak Mah. Çukurambar, Ankara
                </address>
              </div>

              {/* Email */}
              <div className="d-flex mb-3 align-items-center">
                <i className="uil uil-envelope fs-26 text-main" />
                <a href="mailto:info@adalethukuk.com" className="link-body ms-2 roboto">
                  info@adalethukuk.com
                </a>
              </div>

              {/* Phone Numbers */}
              <div className="d-flex">
                <i className="uil uil-phone-volume fs-26 text-main" />
                <p className="mt-1 ms-2 fs-18 d-flex flex-column roboto">
                  <a href="tel:+903121234567">+90 312 123 45 67</a>
                </p>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="col-xl-3 mt-md-5 mt-xl-0 mt-10 justify-content-md-center d-flex">
            <div className="widget">
              <h4 className="widget-title fs-18 mb-3 text-uppercase oswald">Konum</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12778.603329220923!2d34.604596955419915!3d36.802921300000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1527f392195244c9%3A0x89c4a548248d25a8!2sAkdeniz%20Avukatl%C4%B1k%20B%C3%BCrosu!5e0!3m2!1str!2str!4v1764513559703!5m2!1str!2str"
                width="300"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              />
            </div>
          </div>

          {/* Horizontal separator */}
          <hr className="mt-4 mt-md-4 mb-7" />

          {/* Footer copyright */}
          <div className="d-md-flex align-items-center justify-content-center">
            <p className="mb-2 mb-lg-0 text-center roboto">
              © {currentYear} Adalet Hukuk Bürosu. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;