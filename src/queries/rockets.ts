import { gql } from "@apollo/client/core";

export default gql`
  query rocketsQuery {
    rockets {
      id
      name
    }
  }
`;
