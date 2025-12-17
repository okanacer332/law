import { fetchAPI } from '@/lib/api';
import Link from 'next/link';
import Image from 'next/image';

// WordPress'ten blog yazılarını çeken fonksiyon
async function getPosts() {
  const data = await fetchAPI(`
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          title
          excerpt
          slug
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `);
  return data?.posts?.nodes;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-red-600">TEST MODU: API BAĞLANTISI</h1>
      {/* Yazı Yoksa Gösterilecek Mesaj */}
      {posts.length === 0 && (
        <p className="text-center text-gray-500">Henüz blog yazısı eklenmemiş.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any) => (
          <div key={post.slug} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Resim Alanı */}
            <div className="relative h-48 w-full">
              {post.featuredImage?.node?.sourceUrl ? (
                <Image
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.featuredImage.node.altText || post.title}
                  fill
                  className="object-cover"
                />
              ) : (
                // Resim yoksa gri bir kutu göster
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                  Resim Yok
                </div>
              )}
            </div>

            {/* İçerik Alanı */}
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h2>
              <div 
                className="text-gray-600 mb-4 line-clamp-3 text-sm"
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              />
              <Link 
                href={`/blog/${post.slug}`} 
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Devamını Oku
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}