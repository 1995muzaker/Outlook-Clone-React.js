import React from "react";

const Header = () => {
  return (
    <div className="header">
      <p>Filter by:</p>
      <ul>
        <li>Unread</li>
        <li className="active">Read</li>
        <li>Favorites</li>
      </ul>
    </div>
  );
};

export default Header;
