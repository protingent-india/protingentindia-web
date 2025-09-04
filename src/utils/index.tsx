export const blogsQuery = (count: any) => {
    return ({
        query: `query NewQuery {
          posts(${count ? `first: ${count}` : ''}) {
            pageInfo {
              hasNextPage
              endCursor
            }
            nodes {
              date
              title
              slug
              content
              featuredImage {
                node {
                  altText
                  mediaItemUrl
                }
              }
              link
            }
          }
        }`
    })
}


export const blogsQueryData = (slug: any) => {
    return ({
        query: `query NewQuery {
    postBy(
      slug: "${slug}"
    ) {
      title
      date
      content
      featuredImage {
        node {
          altText
          mediaItemUrl
        }
      }
      author {
        node {
            description
            avatar {
                url
            }
        }
      }
    }
  }`})
}

export const getLoadMoreData = (after: any) => {
    return ({
        query: `query NewQuery {
          posts(first: 6, after: "${after}") {
            pageInfo {
              hasNextPage
              endCursor
            }
            nodes {
              date
              title
              slug
              content
              featuredImage {
                node {
                  altText
                  mediaItemUrl
                }
              }
              link
            }
          }
        }`
    })
}

