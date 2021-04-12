import React, { useEffect, useState } from "react";
import { useUsers } from "../hooks";
import { RouteComponentProps } from "react-router-dom";
import { useQuery } from "../utility/utility";

const Users: React.FC = () => {
  let query = useQuery();

  const { loading, error, data } = useUsers(query.get("id"));

  if (loading || !data) {
    return <div className="text-center">Loading</div>;
  }

  if (error) {
    return <div className="text-center"> Error </div>;
  }

  return (
    <div>
      <div>Users</div>
      {data?.users.map((user: { name: string; id: string }) => {
        return <div>{user.name}</div>;
      })}
    </div>
  );
};

export default Users;
