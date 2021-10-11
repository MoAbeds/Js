import gql from "graphql-tag";

export default gql`
  query getArticles {
    getArticles {
     title
      author
      urlToImage
      publishedAt
      description
      content
      url
      source {
        name
      }
    }
  }
`;
