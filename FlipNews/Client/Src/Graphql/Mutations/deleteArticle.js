import gql from "graphql-tag";

export default gql`
  mutation deleteArticle($id: String!) {
    deleteArticle(id: $id)
  }
`;
