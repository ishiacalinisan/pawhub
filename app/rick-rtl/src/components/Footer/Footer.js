import React from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-nav-wrapper">
        <Link
          to={process.env.PUBLIC_URL + "/home"}
          className="footer-nav-single"
        >
          <div className="menu-wrapper">
            <ReactSVG
              src={process.env.PUBLIC_URL + "/assets/img/icons/home.svg"}
            />
            <span>منزل</span>
          </div>
        </Link>
        <Link
          to={process.env.PUBLIC_URL + "/chat"}
          className="footer-nav-single"
        >
          <div className="menu-wrapper">
            <ReactSVG
              src={process.env.PUBLIC_URL + "/assets/img/icons/chat.svg"}
            />
            <span>حديث</span>
          </div>
        </Link>
        <Link
          to={process.env.PUBLIC_URL + "/cart"}
          className="footer-nav-single"
        >
          <div className="menu-wrapper">
            <ReactSVG
              src={process.env.PUBLIC_URL + "/assets/img/icons/cart.svg"}
            />
            <span>كارة</span>
          </div>
        </Link>
        <Link
          to={process.env.PUBLIC_URL + "/profile"}
          className="footer-nav-single"
        >
          <div className="menu-wrapper">
            <ReactSVG
              src={process.env.PUBLIC_URL + "/assets/img/icons/profile.svg"}
            />
            <span>الملي</span>
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
