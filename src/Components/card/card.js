import React from "react";
import "./card.css";

const Card = ({children}) => {
  return (
    <div className="card m-1 ">
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Card;
