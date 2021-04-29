import React from "react";

const ContentItemBox = ({ image, title }) => {
  return (
    <div className="content__item__box">
      <img className="content__item__box__image" src={image} alt="gameImg" />
      <p className="content__item__box__title">{title}</p>
    </div>
  );
};

export default ContentItemBox;
