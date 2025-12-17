const API_URL = 'https://admin-panel.acrtech.com.tr/graphql';

export async function fetchAPI(query: string, { variables }: any = {}) {
  const headers = { 'Content-Type': 'application/json' };

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
      cache: 'no-store', // Veri her zaman taze olsun
    });

    const json = await res.json();

    if (json.errors) {
      console.error("GraphQL Hatası:", JSON.stringify(json.errors, null, 2));
      throw new Error('API Hatası');
    }

    return json.data;
  } catch (error) {
    console.error('Fetch Hatası:', error);
    throw error;
  }
}