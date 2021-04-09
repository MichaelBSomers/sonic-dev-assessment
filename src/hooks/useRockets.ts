import { useQuery } from "@apollo/client";
import { rocketQuery } from "../queries";

interface Rocket {
  id: string;
  name: string;
}

const useRocket = () => {
  return useQuery<{ rockets: Rocket[] }>(rocketQuery);
};

export default useRocket;
