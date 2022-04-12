import React from "react";
import { Iuser } from "../../data/users";
import "./userCard.css";

const UserCard: React.FC<Iuser> = (props) => {
  return (
    <div className="user-card">
      <h4>Name</h4>
      <p>{props.name}</p>
    </div>
  );
};

export default UserCard;
