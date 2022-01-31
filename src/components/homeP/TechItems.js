import React from "react";

const TechItems = ({ techs }) => {
  return (
    <ul>
      {techs.map((stack, index) => {
        return <li key={index}>{stack}</li>;
      })}
    </ul>
  );
};

export default TechItems;
