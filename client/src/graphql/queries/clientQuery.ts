import { gql } from "urql"

export const queryClients = gql`
  {
    clients {
      id
      name
    }
  }
`;