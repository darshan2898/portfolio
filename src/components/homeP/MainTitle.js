import React from "react";
import { Link } from "react-router-dom";

const MainTitle = ({ title, url }) => {
  return (
    <div className="main_title">
      <h1>{title}</h1>
      <br />
      {/* <Link to={url}> {url} (link to website)</Link> */}
      <p>{url}</p>
    </div>
  );
};

export default MainTitle;
