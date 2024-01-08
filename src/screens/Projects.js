import React from "react";
import CardProject from "../components/CardProject";

export default function Projects() {
  return (
    <div className="container">
      <h1 className="d-flex justify-content-center my-5 fw-bold heading">
        Projects
      </h1>
      <div className="row">
        <CardProject
          pro="React Project"
          title="NewsMate"
          description="This is a news app"
          tech="React.js"
          link="https://github.com/CodeAritra/NewsMate"
        />
        <CardProject
          pro="MERN Project"
          title="DelishDenn"
          description="This is a food app"
          tech="React.js, Express.js, Node.js, MongoDB"
          link="https://github.com/CodeAritra/snapsnack"
        />
        <CardProject
          pro="MERN Project"
          title="Luxury Loot"
          description="This is a e-commerce app"
          tech="React.js, Express.js, Node.js, MongoDB"
          link="https://github.com/CodeAritra/Luxury-Loot"
        />
      </div>
    </div>
  );
}
