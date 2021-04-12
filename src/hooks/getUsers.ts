import { useQuery } from "@apollo/client";
import { usersQuery } from "../queries";

interface Users {
  [index: number]: User;
}

interface User {
  name: string;
  id: string;
}

const getUsers = (rocketId: String) => {
  return useQuery<{ users: Users[] }>(usersQuery, {
    variables: { id: rocketId },
  });
};

export default getUsers;
