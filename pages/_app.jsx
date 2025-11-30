import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import ThemeProvider from 'theme/ThemeProvider';
import Layout from 'components/Layout';

// Import global styles and third-party CSS
import 'animate.css';
import 'styles/style.css';
import 'styles/responsive.css';
import 'plugins/scrollcue/scrollCue.css';
import 'assets/scss/style.scss';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState(true);

  // Dynamically import Bootstrap JS on client-side only
  useEffect(() => {
    if (typeof window !== 'undefined') import('bootstrap');
  }, []);

  // Initialize scrollCue plugin on route change
  useEffect(() => {
    (async () => {
      const scrollCue = (await import('plugins/scrollcue')).default;
      scrollCue.init({
        interval: -400,
        duration: 700,
        percentage: 0.8
      });
      scrollCue.update();
    })();
  }, [pathname]);

  // Disable loading state once component mounts
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Fragment>
        <Head>
          {/* Basic meta tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          {/* SİTE BAŞLIĞI VE AÇIKLAMASI GÜNCELLENDİ */}
          <title>Adalet Hukuk Bürosu - Güvenilir Hukuki Çözümler</title>
          <meta
            name="description"
            content="Profesyonel avukatlık ve hukuki danışmanlık hizmetleri. Ceza, Aile, Ticaret ve İş Hukuku alanlarında uzman kadro."
          />

          {/* Open Graph tags for social sharing */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Adalet Hukuk Bürosu - Ankara" />
          <meta
            property="og:description"
            content="Tecrübeli kadromuzla yanınızdayız."
          />
          {/* URL ve Görsel kısımlarını kendi domainine göre güncelleyebilirsin */}
          <meta property="og:url" content="https://seninsiten.com" />
          <meta property="og:image" content="/img/logo-removebg-preview.png" />
          
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Adalet Hukuk Bürosu" />
          <meta
            name="twitter:description"
            content="Profesyonel hukuki danışmanlık."
          />
          <meta name="twitter:image" content="/img/logo-removebg-preview.png" />
        </Head>
        <Layout>
          <ThemeProvider>
            {/* Show loader while app is loading */}
            {loading ? <div className="page-loader" /> : <Component {...pageProps} />}
          </ThemeProvider>
        </Layout>
    </Fragment>
  );
}

export default MyApp;