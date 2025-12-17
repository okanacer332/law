export const HOMEPAGE_QUERY = `
  query HomePageData {
    # 1. Blog Yazıları
    posts(first: 4, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        slug
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
    
    # 2. Hizmetler (Basitleştirilmiş)
    hizmetler(first: 20) {
      nodes {
        id
        title
        slug
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;