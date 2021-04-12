import { gql } from "@apollo/client/core";

export default gql`
  query usersQuery($id: String, $rocketId: String) {
    update_users(where: { id: { _eq: $id } }, _set: { rocket: $rocketId }) {
      returning {
        id
        name
        rocket
      }
    }
  }
`;
