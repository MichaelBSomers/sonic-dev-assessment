import { useQuery } from "@apollo/client";
import { usersQuery } from "../queries";

interface Users {
  [index: number]: User;
}

interface User {
  name: string;
  id: string;
  rocket: string;
}

const updateUserRocket = (id: String, rocketId: String) => {
  return useQuery<{ users: Users[] }>(usersQuery, {
    variables: { id, rocketId },
  });
};

export default updateUserRocket;
