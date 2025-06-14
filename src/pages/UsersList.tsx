import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

const UsersList = () => {
  const users = useQuery(api.user.getUsers); // Assuming file is convex/user.ts

  if (!users) return <div>Loading...</div>;

  return (
    <div>
      <h2>All Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.username} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
