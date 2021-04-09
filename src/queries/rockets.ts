import { gql } from "@apollo/client";

export default gql`
  query rocketsQuery {
    rockets {
      id
      name
    }
  }
`;
