import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import image1 from '../assets/images/image001.png';
import image2 from '../assets/images/image002.jpg';
import image3 from '../assets/images/image003.jpg';
import image4 from '../assets/images/image004.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row mobile-footer">
          <div className="col-4 d-flex justify-content-center align-items-center flex-column my-5">
            <div className="div">
              <div className="logo">
                <img className="logo-img" src={Logo} alt="" />
              </div>
              <div className="phone mt-3">
                <FaPhone />
                <p className="phone-number">07958635590</p>
              </div>
              <div className="phone">
                <FaPhone />
                <p className="phone-number">02084028879</p>
              </div>
              <div className="email">
                <MdEmail />
                <Link to="/contact" className="email-address">
                  graham@extendout.co.uk
                </Link>
              </div>
              <p className="my-4 mobile-text">
                © 2024 ExtendOut Design & Build | FAQ Privacy Policy
              </p>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center flex-wrap gap-3">
            <img src={image1} className="footer-img" alt="" />
            <img src={image2} className="footer-img" alt="" />
            <img src={image3} className="footer-img" alt="" />
            <img src={image4} className="footer-img" alt="" />
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center flex-column">
            <div className="social-icons">
              <Link to='https://www.instagram.com/extendout/'>
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
