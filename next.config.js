/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // React 18'in Strict Mode'unu açıyoruz. Bu, development ortamında
  // bileşenleri iki kez render ederek potansiyel hataları (memory leak vb.) yakalar.
  reactStrictMode: true,

  // Resim optimizasyonunu açıyoruz.
  // 'unoptimized: true' yu kaldırdık. Artık Next.js resimleri otomatik olarak
  // WebP formatına çevirip boyutlarını küçültecek.
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },

  // SCSS ayarları: Derleyiciye 'src' klasörünü tanıtıyoruz ki
  // @import "assets/..." dediğimizde yolu bulabilsin.
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
  },

  // Build sırasında ESLint hatalarını yoksaymamak en iyisidir ama
  // eski bir şablondan geçtiğimiz için şimdilik build'i kırmasın diye esnek bırakabiliriz.
  // Ancak temiz kod için bunu 'false' tutmak hedefimiz olmalı.
  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;