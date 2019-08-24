import React from "react";
import "./Card.css";

const Card = ({ name, image }) => {
  return (
    <div>
      <img className="Card" src={image} alt={name} />
    </div>
  );
};

export default Card;
