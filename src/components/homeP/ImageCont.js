import React from "react";

const ImageCont = ({ pic }) => {
  return (
    <div className="image_cont">
      <img src={pic} alt="image" />
    </div>
  );
};

export default ImageCont;
