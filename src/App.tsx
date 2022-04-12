import logo from "./logo.svg";
import "./App.css";
import { NavigationHeader } from "./components/navHeader/NavigationHeader";
import UserCard from "./components/userCard/UserCard";
import { users } from "./data/users";
import { FC } from "react";
const App: FC = () => {
  return (
    <>
      <NavigationHeader />
      {users.map((user, index) => (
        <UserCard name={user.name} key={index} />
      ))}
    </>
  );
};

export default App;
