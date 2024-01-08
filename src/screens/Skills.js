import React from "react";
import Card from "../components/Card";

export default function Skills() {
  return (
    <>
      <div className="container my-5">
        <h1 className="d-flex justify-content-center mb-5 fw-bold heading">
          Skills
        </h1>
        <div className="row ">
          <Card
            img="https://cdn.icon-icons.com/icons2/112/PNG/512/html5_18891.png"
            alt="html"
          />
          <Card
            img="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_css_icon_130661.png"
            alt="css"
          />
          <Card
            img="https://www.purpleslate.com/wp-content/uploads/2017/05/480px-unofficial_javascript_logo_2-svg.png"
            alt="javascript"
          />
          <Card
            img="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png"
            alt="react"
          />
          <Card
            img="https://iconape.com/wp-content/png_logo_vector/node-js-2.png"
            alt="node"
          />
          <Card
            img="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png"
            alt="express"
          />
          <Card
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDxTtk6ncrnxDtDg460PFThTKn7FG8Vpe8a5TPZjrUqC2OFPHoKM0Ns7WtnOVsycZMvI&usqp=CAU"
            alt="mongodb"
          />
          <Card
            img="https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png"
            alt="bootstrap"
          />
          <Card
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
            alt="c++"
          />
          <Card
            img="https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_wordmark_logo_icon_146459.png"
            alt="java"
          />
          <Card
            img="https://cdn.icon-icons.com/icons2/2699/PNG/512/python_vertical_logo_icon_168039.png"
            alt="python"
          />
          <Card
            img="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
            alt="github"
          />
        </div>
      </div>
    </>
  );
}
