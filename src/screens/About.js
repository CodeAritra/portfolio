import React from "react";

export default function About() {
  return (
    <div className="container my-5">
      <h1 className="d-flex justify-content-center mb-5 fw-bold heading">ABOUT</h1>
      <div className="d-flex justify-content-center">
        <p className="mx-5 fs-5 fst-italic">
          Welcome to my digital space! I'm Aritra Dhank, a passionate B.Tech
          student with a strong penchant for software development. I'm an
          aspiring developer on a quest to transform my love for coding into
          innovative solutions. Eager to leverage my skills in programming,
          algorithms, and problem-solving to contribute to innovative tech
          projects. Aspiring to explore various domains within CSE, from
          artificial intelligence to web development, in order to make a
          meaningful impact. Open to collaborations, networking, and new
          opportunities that will help me grow and thrive in the tech industry.
          Throughout my journey, I've been driven by a relentless curiosity to
          explore the ever-evolving world of technology.
        </p>
      </div>
      <div>
        <h3 className="d-flex justify-content-center my-5 fw-bold heading">EDUCATION</h3>
        <div className="mx-5">
          <div className="d-flex justify-content-center fs-4 fst-italic ">
            <p>
              <i className="fa-solid fa-caret-right"></i> ICSE - 2021 JOGAMAYA
              MEMORIAL INSTITUTE
            </p>
          </div>
          <div className="d-flex justify-content-center fs-4 fst-italic">
            <p>
              <i className="fa-solid fa-caret-right"></i> ISC - 2023 JOGAMAYA
              MEMORIAL INSTITUTE
            </p>
          </div>
          <div className="d-flex justify-content-center fs-4 fst-italic">
            <p>
              <i className="fa-solid fa-caret-right"></i> 2023-PRESENT - MCKV
              INSTITUTE OF ENGINEERING
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
