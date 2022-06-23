import React from "react";
import { Link } from "react-router-dom";
import CV from "../../assets/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <Link to="https://devshad.xyz/blog" className="btn btn-primary">
        See My Blogs
      </Link>
    </div>
  );
};

export default CTA;
