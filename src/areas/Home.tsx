import { useRockets } from "../hooks";
import React from "react";
import { RouteComponentProps } from "react-router-dom";

const HomePage: React.FC<RouteComponentProps<{}>> = ({ history }) => {
  const { data } = useRockets();
  console.log("data", data);
  return (
    <div>
      Home Page
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4">
        Button
      </button>
      <ul>
        {data?.rockets.map((r) => (
          <li key={r.id} onClick={() => history.push(`/rockets/${r.id}`)}>
            {r.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
