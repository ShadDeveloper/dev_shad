import React from "react";
import { Link } from "react-router-dom";
import CV from "../../assets/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="https://blog.devshad.xyz" className="btn btn-primary">
        See My Blogs
      </a>
    </div>
  );
};

export default CTA;
