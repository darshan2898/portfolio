import React from "react";
import ItemsCard from "./ItemsCard";
import dataArr from "../../data/data";

const HomeIndex = () => {
  return (
    <section className="home_body">
      {dataArr.map((item) => {
        return <ItemsCard item={item} key={item.id} />;
      })}
    </section>
  );
};

export default HomeIndex;
