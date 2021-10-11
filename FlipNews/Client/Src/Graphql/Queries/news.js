import gql from "graphql-tag";

export default gql`
  query news($value: String!) {
    news(value: $value) {
      id
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
