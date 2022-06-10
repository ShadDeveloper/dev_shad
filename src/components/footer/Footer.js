import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">
        Shad Khan
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Conatct</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/MdShadKhanFF">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com/dev_shad">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/dev_shad">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Shad Khan. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
