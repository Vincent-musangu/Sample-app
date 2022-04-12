import React from "react";
import "./nav.css";
export const NavigationHeader = () => {
  return (
    <div className="heading-color">
      <div style={{ fontSize: "20px", fontWeight: "bolder" }}>Hobbiton</div>
      <div>
        <ul className="link-container">
          <li className="nav-links">home</li>
          <li className="nav-links">about</li>
        </ul>
      </div>
    </div>
  );
};
