import { FC, useState } from "react";
import "./App.css";
import { NavigationHeader } from "./components/navHeader/NavigationHeader";
import UserCard from "./components/userCard/UserCard";
import { IUser, users } from "./data/users";

const App: FC = () => {
  const [selectedUser, setSelectedUser] = useState<IUser>();
  return (
    <>
      <NavigationHeader />

      <div className=" user-details">{selectedUser?.email}</div>
      {users.map((user, index) => (
        <div
          key={index}
          onClick={() => {
            setSelectedUser(user);
            console.log("selected user", selectedUser);
          }}
        >
          <UserCard name={user.name} />
        </div>
      ))}
    </>
  );
};

export default App;
