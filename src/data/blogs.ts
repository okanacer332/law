export const blogs = [
  // --- VİTRİNDEKİ ANA MAKALELER (İlk 3) ---
  {
    id: 1,
    title: 'Yeni İş Kanunu Değişiklikleri ve Etkileri',
    slug: 'yeni-is-kanunu-degisiklikleri',
    excerpt: 'İş kanununda yapılan son değişiklikler, uzaktan çalışma düzenlemeleri ve tazminat hakları hakkında detaylı analiz.',
    author: 'Av. Mehmet Yılmaz',
    date: '2 Aralık 2025',
    tag: 'İş Hukuku',
    image: 'https://images.unsplash.com/photo-1528747008803-f9f5cc8f1a64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXd5ZXIlMjB3cml0aW5nJTIwYXJ0aWNsZXxlbnwxfHx8fDE3NjQ4MzAyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-blue-500 to-cyan-500',
    isFeatured: true,
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Son dönemde çalışma hayatını kökten etkileyen yasal düzenlemeler yürürlüğe girdi. Özellikle pandemi sonrası kalıcı hale gelen uzaktan çalışma modelleri artık yasal bir zemine oturtuldu.</p>
      
      <h3>Uzaktan Çalışma Yönetmeliği Neler Getiriyor?</h3>
      <p>Yeni düzenleme ile birlikte, uzaktan çalışan personelin malzeme temini, iş sağlığı ve güvenliği önlemleri ve çalışma saatlerinin düzenlenmesi konularında işverenin sorumlulukları netleştirildi. Artık "ulaşılamama hakkı" (right to disconnect) kavramı da hukuk sistemimizde tartışılmaya başlandı.</p>
      
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
        <strong>Önemli Not:</strong> İşverenler, uzaktan çalışan personelin yaptığı işin niteliğine göre gerekli teknolojik ekipmanı sağlamakla yükümlü hale gelmiştir.
      </div>

      <h3>Kıdem Tazminatında Yeni Dönem</h3>
      <p>Kıdem tazminatı tavan ücretlerinde yapılan güncellemeler ve fon sistemi tartışmaları ışığında, mevcut çalışanların haklarının korunmasına yönelik maddeler şunlardır:</p>
      <ul class="list-disc pl-6 space-y-2 mt-4">
        <li>Tazminat hesaplamasında giydirilmiş ücretin kapsamı genişletildi.</li>
        <li>Belirli süreli sözleşmelerin zincirleme yapılması halindeki hak kayıpları önlendi.</li>
        <li>Arabuluculuk sürecinin zorunlu dava şartı olarak kapsamı genişletildi.</li>
      </ul>
      <br/>
      <p>Bu değişiklikler hem işçi hem de işveren tarafında yeni uyum süreçlerini gerektirmektedir. Olası uyuşmazlıklarda hukuki danışmanlık almak, ileride doğacak büyük tazminat yüklerini engelleyecektir.</p>
    `
  },
  {
    id: 2,
    title: 'Boşanma Davalarında Velayet Hakları',
    slug: 'bosanma-davalarinda-velayet',
    excerpt: 'Boşanma sürecinde çocuk velayeti konusunda hakimin dikkat ettiği kriterler ve ebeveynlerin hakları.',
    author: 'Av. Ayşe Kara',
    date: '28 Kasım 2025',
    tag: 'Aile Hukuku',
    image: 'https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGNvbnN1bHRhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzY0NzQ3MTA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-purple-500 to-pink-500',
    isFeatured: true,
    content: `
      <p>Boşanma davalarının en hassas konusu şüphesiz müşterek çocukların durumudur. Türk Medeni Kanunu'na göre velayet düzenlemesinde temel ilke "çocuğun üstün yararı"dır.</p>
      
      <h3>Hakim Velayeti Kime Verir?</h3>
      <p>Velayet kararı verilirken hakim, anne veya babanın ekonomik durumundan ziyade, çocuğun hangi ebeveyn yanında bedensel, zihinsel ve ruhsal gelişiminin daha iyi sağlanacağına bakar.</p>
      
      <ul class="list-disc pl-6 space-y-2 mt-4">
        <li><strong>Yaş Faktörü:</strong> Anne bakımına muhtaç yaşta olan (0-3 yaş) çocukların velayeti genellikle anneye verilir.</li>
        <li><strong>İdrak Çağı:</strong> Okul çağındaki çocukların kendi tercihleri pedagog eşliğinde dinlenir.</li>
        <li><strong>Kardeşlerin Durumu:</strong> Kardeşlerin birbirinden ayrılmaması ilkesi gözetilir.</li>
      </ul>

      <h3>Ortak Velayet Uygulaması</h3>
      <p>Son yıllarda Yargıtay kararları ile hukukumuza giren "Ortak Velayet" kavramı, boşanmaya rağmen ebeveynlerin çocuk üzerindeki sorumlulukları eşit şekilde paylaşmasına olanak tanır. Ancak bunun için tarafların anlaşması ve çatışmasız bir iletişim diline sahip olması şarttır.</p>
    `
  },
  {
    id: 3,
    title: 'Ticari Sözleşmelerde Dikkat Edilmesi Gerekenler',
    slug: 'ticari-sozlesmelerde-dikkat',
    excerpt: 'Sözleşme hazırlarken yapılan yaygın hatalar ve cezai şartların geçerliliği hakkında hukuki rehber.',
    author: 'Av. Can Demir',
    date: '25 Kasım 2025',
    tag: 'Ticaret Hukuku',
    image: 'https://images.unsplash.com/photo-1633158108216-f10cd3202d8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBsYXclMjBkb2N1bWVudHN8ZW58MXx8fHwxNzY0ODMwMjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-orange-500 to-red-500',
    isFeatured: true,
    content: `
      <p>İyi hazırlanmış bir sözleşme, ticari ilişkideki en büyük güvencedir. Ancak internetten bulunan taslaklarla yapılan sözleşmeler, çoğu zaman uyuşmazlık anında tarafları korumakta yetersiz kalır.</p>
      
      <h3>Sözleşmenin Olmazsa Olmazları</h3>
      <p>Her ticari sözleşmede mutlaka bulunması gereken maddeler şunlardır:</p>
      
      <ol class="list-decimal pl-6 space-y-2 mt-4">
        <li><strong>Konu ve Kapsam:</strong> İşin tanımı net ve yoruma kapalı olmalıdır.</li>
        <li><strong>Cezai Şart:</strong> Yükümlülüklerin ihlali durumunda ödenecek bedel fahiş olmamalı, tacirler için basiretli iş adamı kriteri gözetilmelidir.</li>
        <li><strong>Fesih Şartları:</strong> Hangi durumlarda sözleşmenin tek taraflı feshedilebileceği açıkça yazılmalıdır.</li>
        <li><strong>Yetkili Mahkeme:</strong> Uyuşmazlık durumunda hangi il mahkemelerinin yetkili olduğu belirtilmelidir.</li>
      </ol>
      
      <div class="bg-red-50 border-l-4 border-red-500 p-4 my-6">
        Gizlilik sözleşmeleri (NDA) ve rekabet yasağı maddeleri, ticari sırlarınızın korunması için ayrıca düzenlenmelidir.
      </div>
    `
  },
  
  // --- SIDEBAR MAKALELERİ (Diğerleri) ---
  // Bunlar için kısa içerik oluşturuyorum, tıklandığında yine detay sayfası açılacak.
  { 
    id: 4, 
    title: 'Miras Hukukunda Saklı Pay Nedir?', 
    slug: 'miras-hukukunda-sakli-pay',
    excerpt: 'Miras paylaşımında yasal mirasçıların korunan hakları.',
    date: '20 Kasım 2025', 
    tag: 'Miras Hukuku', 
    author: 'Av. Mehmet Yılmaz',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1080',
    gradient: 'from-gray-500 to-slate-500',
    isFeatured: false,
    content: '<p>Mirasbırakanın vasiyetname ile dahi ortadan kaldıramadığı, mirasçıların kanunen korunan payına saklı pay denir. Saklı pay oranları altsoy, eş ve anne-baba için farklılık gösterir. Saklı payı ihlal edilen mirasçılar tenkis davası açma hakkına sahiptir.</p>'
  },
  { 
    id: 5, 
    title: 'Tüketici Hakları ve Korunma Yolları', 
    slug: 'tuketici-haklari',
    excerpt: 'Ayıplı mal ve hizmetlerde tüketicinin seçimlik hakları.',
    date: '18 Kasım 2025', 
    tag: 'Tüketici Hukuku',
    author: 'Av. Ayşe Kara',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1080',
    gradient: 'from-green-500 to-emerald-500',
    isFeatured: false,
    content: '<p>6502 sayılı Tüketiciyi Koruma Kanunu uyarınca, ayıplı bir mal alan tüketici; sözleşmeden dönme, bedel indirimi, ücretsiz onarım veya malın yenisi ile değiştirilmesini talep etme haklarından birini kullanabilir.</p>'
  },
  // Diğer sidebar makaleleri için de benzer yapı devam eder...
  // Örnek olarak 2 tane ekledim, listeyi uzatabiliriz ama mantık anlaşıldı.
  { 
    id: 6, title: 'Kira Sözleşmelerinde Yasal Haklar', slug: 'kira-sozlesmeleri', excerpt: 'Kiracı ve ev sahibi hakları.', date: '15 Kasım 2025', tag: 'Gayrimenkul Hukuku', author: 'Av. Can Demir', image: '', gradient: '', isFeatured: false, content: '<p>Kira artış oranları, tahliye taahhütnamesi ve 10 yıllık uzama süresi sonunda tahliye gibi konular Borçlar Kanunu kapsamında değerlendirilir.</p>' 
  },
];