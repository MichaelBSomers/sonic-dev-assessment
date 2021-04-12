import { gql } from "@apollo/client";

export default gql`
  query usersQuery($id: String) {
    users(where: { rocket: { _eq: $id } }) {
      id
      name
    }
  }
`;
