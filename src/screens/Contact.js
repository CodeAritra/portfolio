import React from "react";

export default function Contact() {
  return (
    <div className="container">
      <h1 className="d-flex justify-content-center my-5 fw-bold heading">
        Contact Me
      </h1>
      <div className="d-flex flex-column flex-md-row ">
        <div className="details">
          <p>
            <i className="fa-solid fa-envelope"></i> aridhank21205@gmail.com
          </p>
          <p>
            <i className="fa-solid fa-phone"></i> +91 6291480523
          </p>
          <p>
            <i className="fa-brands fa-linkedin"></i>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/aritra-dhank-a72258274/"
            >
              Aritra Dhank
            </a>
          </p>
          <p>
            <i className="fa-brands fa-github"></i>
            <a target="_blank" href="https://github.com/CodeAritra">
              Aritra Dhank
            </a>
          </p>
        </div>

        <div className="">
          <form className="">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="text"
                placeholder="Your Message"
              />
            </div>
            <button type="submit" className="btn ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
