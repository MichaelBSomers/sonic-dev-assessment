import { useRockets } from "../hooks";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Link } from "react-router-dom";

const HomePage: React.FC<RouteComponentProps<{}>> = ({ history }) => {
  const { data } = useRockets();
  return (
    <div>
      <div className="text-center">Home Page</div>

      <ul className="flex flex-row flex-nowrap">
        {data?.rockets.map((r) => (
          <li key={r.id} className="m-auto">
            <Link
              to={`/rocket?id=${r.id}`}
              className="box-border h-auto w-auto p-4 border-4 text-center"
            >
              {r.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
