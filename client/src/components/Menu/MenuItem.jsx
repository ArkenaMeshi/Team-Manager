import React from "react";
import { Link } from "react-router-dom";

const MenuItem = (props) => {
  return (
    <>
      <li className="menu-item">
        <Link to={props.url}>{props.item}</Link>
      </li>
    </>
  );
};

export default MenuItem;