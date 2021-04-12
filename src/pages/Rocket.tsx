import React, { useEffect, useState } from "react";
import { useRocket } from "../hooks";
import { RouteComponentProps } from "react-router-dom";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";

const capitalize_Words = (str: String) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
const isObject = (obj: any) => {
  let type = typeof obj;
  return type === "function" || (type === "object" && !!obj);
};

const isBoolean = (obj: any) => {
  let type = typeof obj;
  return type === "boolean";
};

console.log(capitalize_Words("js string exercises"));

const Rocket: React.FC<RouteComponentProps<{}>> = ({ history }) => {
  let [rocketName, setRocketName] = useState(null);
  let [rocketInfo, setRocketInfo] = useState(null);
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();

  const { loading, error, data } = useRocket(query.get("id"));

  if (loading || !data) {
    return <div className="text-center">Loading</div>;
  }

  if (error) {
    return <div> Error </div>;
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

  console.log("data", data);
  return (
    <div>
      <div className="text-center">Rocket: {data?.rocket.name}</div>
      <ul className="">{buildData(data?.rocket)}</ul>
    </div>
  );
};

export default Rocket;
