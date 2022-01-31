import React from "react";
import ImageCont from "./ImageCont";
import MainTitle from "./MainTitle";
import TextBody from "./TextBody";
import TechItems from "./TechItems";

const ItemsCard = ({ item }) => {
  const { id, info, title, pic, url, techs } = item;

  return (
    <div className="card" key={id}>
      <a href={url} target={"_blank"}>
        <div className="top">
          <div className="pink"></div>
          <MainTitle title={title} url={url} />
        </div>
        <div className="mid">
          <div className="left">
            <ImageCont pic={pic} />
          </div>
          <div className="right">
            <TextBody info={info} />
          </div>
        </div>
        <div className="bottom">
          <div className="left"></div>
          <div className="right">
            <TechItems techs={techs} />
          </div>
        </div>
      </a>
    </div>
  );
};

export default ItemsCard;
