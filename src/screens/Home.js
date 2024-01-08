import React from "react";
import { SocialIcon } from "react-social-icons";
import Typewriter from "typewriter-effect";
import aritra from "./aritra.jpg";
import Aritra from "./Aritra.pdf";



export default function Home() {
  return (
    <>
      <div className="container d-flex flex-column flex-md-row custom">
        <div className="">
          <h1>Hii I'm </h1>
          <div className="my-3">
            <h2>Aritra Dhank</h2>
          </div>
          <div className="fst-italic fs-4 ">
            I am a passionate{" "}
            <div className="typewriter">
              <Typewriter
                options={{
                  strings: ["STUDENT & WEB DEVELOPER"],
                  autoStart: true,
                  loop: true,
                }}
              />{" "}
            </div>
            with a strong penchant for software development.
          </div>
          <div>
            <a
              className="mt-4 mb-3 rounded btn "
              href={Aritra}
              target="_blank"
            >
              Download CV
            </a>
          </div>
          <div>
            <SocialIcon
              className="me-3"
              target="_blank"
              url="https://linkedin.com/in/aritra-dhank-a72258274/"
            />
            <SocialIcon
              className="me-3"
              target="_blank"
              url="https://github.com/CodeAritra"
            />
          </div>
        </div>

        <div className="img-fluid">
          <img className="img" src={aritra} alt="ARITRA DHANK" />
        </div>
      </div>
    </>
  );
}
