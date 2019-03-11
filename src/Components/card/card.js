import React from "react";

const Card = ({children}) => {
  return (
    <div className="card text-center m-1 ">
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Card;
