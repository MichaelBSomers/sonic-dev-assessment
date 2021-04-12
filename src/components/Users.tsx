import React, { ReactElement } from "react";
import { useUpdateUserRocket, useUsers } from "../hooks";
import { useQuery } from "../utility/utility";

const Users: React.FC<{ rocketId: String }> = ({ rocketId }) => {
  let query = useQuery();

  const { loading, error, data } = useUsers(query.get("id"));

  if (loading || !data) {
    return <div className="text-center">Loading</div>;
  }

  if (error) {
    return <div className="text-center"> Error </div>;
  }

  const removeUserRocket = (id: String) => {
    useUpdateUserRocket(id, rocketId);
  };

  return (
    <table className="table-auto">
      <tbody>
        {data?.users.map((user: { name: string; id: string }) => {
          return (
            <tr key={user.id} className="border-2">
              <td className="p-1">{user.name}</td>
              <td
                onClick={() => removeUserRocket(user.id)}
                className="p-3 transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ..."
              >
                Remove User
              </td>
              <td className="p-3 transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ...">
                <button>Update User</button>
              </td>
            </tr>
          );
        })}
      </tbody>
      <button className="p-3 transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ...">
        Add User
      </button>
    </table>
  );
};

export default Users;
