import gql from "graphql-tag";

export default gql`
  mutation createUser(
    $name: String!
    $email: String!
    $password: String!
    $country: String!
  ) {
    createUser(
      name: $name
      email: $email
      password: $password
      country: $country
    ) {
      token
    }
  }
`;
