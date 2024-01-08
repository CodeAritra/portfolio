import React from "react";

const CardProject = (props) => {
  return (
    <>
      <div className="card ms-4 mb-3" style={{ width: "16rem"}}>
      <span className=" badge rounded-pill bg-info mt-1 " style={{ marginLeft: "5rem"}}>{props.pro}</span>
        <img src={props.img} className="card-img-top" alt={props.alt} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">{props.tech}</p>
          <a href={props.link} className="btn " target="_blank">
            GitHub Link
          </a>
        </div>
      </div>
    </>
  );
};

export default CardProject;
