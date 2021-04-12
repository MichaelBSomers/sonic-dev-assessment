import React, { useEffect, useState } from "react";
import { useRocket } from "../hooks";
import { RouteComponentProps } from "react-router-dom";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import Users from "../components/Users";
import {
  capitalize_Words,
  isObject,
  isBoolean,
  useQuery,
} from "../utility/utility";

const Rocket: React.FC<RouteComponentProps<{}>> = () => {
  let [showUsers, setShowUsers] = useState(false);
  let query = useQuery();

  const { loading, error, data } = useRocket(query.get("id"));

  if (loading || !data) {
    return <div className="text-center">Loading</div>;
  }

  if (error) {
    return <div className="text-center"> Error </div>;
  }

  const getValues = (values: Array<any>) => {
    let items: Array<any> = [];
    values.map((item, index) => {
      if (isBoolean(item)) {
        items.push(<div key={index}>{item === true ? "Yes" : "No"}</div>);
      } else if (!isObject(item)) {
        items.push(<div key={index}>{item}</div>);
      } else if (isObject(item)) {
        items.push(buildData(item));
      }
    });
    return items;
  };

  const buildData = (rocket: any) => {
    const items: Array<any> = [];
    Object.keys(rocket).forEach((key, index) => {
      const keyString: string = key.toString();
      console.log();
      items.push(
        <li key={key} className="box-border border-4">
          <div className="grid grid-cols-4">
            <div className="col-auto">
              {capitalize_Words(key.replaceAll("_", " "))} :
            </div>
            <div className="col-span-3">
              {getValues([Object.values(rocket)[index]])}
            </div>
          </div>
        </li>
      );
    });
    return items;
  };

  return (
    <div>
      <div className="text-center">Rocket: {data?.rocket.name}</div>
      <button onClick={() => setShowUsers(!showUsers)} className="p-1 border-2">
        {!showUsers ? "Show Users" : "Hide Users"}
      </button>
      {showUsers && <Users rocketId={data?.rocket.id} />}
      <ul>{buildData(data?.rocket)}</ul>
    </div>
  );
};

export default Rocket;
