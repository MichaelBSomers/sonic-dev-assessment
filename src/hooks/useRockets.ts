import { useQuery } from "@apollo/client";
import { rocketsQuery } from "../queries";

interface Rocket {
  id: string;
  name: string;
}

const useRocket = () => {
  return useQuery<{ rockets: Rocket[] }>(rocketsQuery);
};

export default useRocket;
