import React from "react";

export default function Projects() {
  return (
    <div className="container">
      <h1 className="d-flex justify-content-center my-5 fw-bold heading">
        Projects
      </h1>
      <div className=" d-flex flex-column flex-md-row  ">
        <div className="card mx-5 my-5">
          <div className="card-body">
            <h5 className="card-title fw-bold">NewsMate</h5>
            <p className="card-text fst-italic">
              <span className="fw-">Description : </span>This is a news app
            </p>
            <p className="card-text fst-italic">
              <span className="fw-">Technology used : </span>React js
            </p>

            <a
              href="https://github.com/CodeAritra/NewsMate"
              target="_blank"
              className="btn "
            >
              GitHub Link
            </a>
          </div>
        </div>

        <div className="card mx-5 my-5">
          <div className="card-body">
            <h5 className="card-title fw-bold">SnapSnack</h5>
            <p className="card-text fst-italic">
              <span className="fw-">Description : </span>This is a food app
            </p>
            <p className="card-text fst-italic">
              <span className="fw-">Technology used : </span>React js, Express
              js, Node js, MongoDB
            </p>

            <a
              href="https://github.com/CodeAritra/snapsnack"
              target="_blank"
              className="btn "
            >
              GitHub Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
