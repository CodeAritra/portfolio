import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card ms-3 mb-3" style={{ width: "10rem" }}>
        <img src={props.img} className="card-img-top" alt={props.alt} />
      </div>
    </>
  );
};

export default Card;
