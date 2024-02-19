import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import image2 from '../assets/images/image002.jpg';
import image3 from '../assets/images/image003.jpg';
import image4 from '../assets/images/image004.png';
import image5 from '../assets/images/trustmark.png';


const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row mobile-footer">
          <div className="col-md-4 col-sm-12  d-flex justify-content-center align-items-center flex-column my-5">
            <div className="div">
              <div className="logo mb-5">
                <img className="logo-img" src={Logo} alt="" />
              </div>
              <div className="phone mt-3">
                <FaPhone />
                <p className="phone-number mb-2">07958635590</p>
              </div>
              <div className="phone">
                <FaPhone />
                <p className="phone-number mb-2">02084028879</p>
              </div>
              <div className="email">
                <MdEmail />
                <Link to="/contact" className="email-address">
                  theteam@extendout.co.uk
                </Link>
              </div>
              
            </div>
          </div>
          <div className="col-md-4 col-sm-12 d-flex justify-content-center align-items-center flex-column">
            <div className="social-icons">
              <Link to='https://www.instagram.com/extendout/' target="_blank">
                <FaInstagram />
              </Link>
            </div>
            <p className="my-4 mobile-text">
                © 2024 ExtendOut Design & Build | FAQ Privacy Policy
            </p>
          </div>
          <div className="col-md-4 mb-5 px-5 col-sm-12 d-flex justify-content-center align-items-center flex-wrap gap-3">
            <img src={image2} className="footer-img" alt="" />
            <img src={image3} className="footer-img" alt="" />
            <img src={image5} className="footer-img" alt="" />
            <img src={image4} className="footer-img" alt="" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
