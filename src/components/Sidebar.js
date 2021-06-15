import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./styles/Sidebar.css";
function Sidebar() {
  const { url } = useRouteMatch();
  return (
    <nav id="sidebar">
      <ul className="sidebar-links">
        <Link to={`${url}/company`}> Company </Link>
        <Link to={`${url}/jobs`}> Jobs </Link>
        <Link to={`${url}/jobs/edit`}> Edit Jobs </Link>
      </ul>
    </nav>
  );
}

export default Sidebar;
