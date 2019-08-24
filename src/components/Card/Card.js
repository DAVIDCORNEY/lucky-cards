import React from "react";

const Card = ({ name, image }) => {
  return (
    <div>
      <img className="card" src={image} alt={name} />
    </div>
  );
};

export default Card;
