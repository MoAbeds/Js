import gql from "graphql-tag";

export default gql`
  mutation createArticle(
    $id: String
    $title: String
    $author: String
    $urlToImage: String
    $publishedAt: String
    $description: String
    $content: String
    $url: String
  ) {
    createArticle(
      id: $id
      title: $title
      author: $author
      urlToImage: $urlToImage
      publishedAt: $publishedAt
      description: $description
      content: $content
      url: $url
    ) {
      id
    }
  }
`;
