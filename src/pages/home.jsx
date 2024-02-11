import React from "react";
import Kitchentwo from "../assets/images/kitchentwo.png";
import Homeimage from "../assets/images/homeimage.jpg";
import Extensions from "../assets/images/extensions.jpeg";
import Loft from "../assets/images/loft.jpeg";
import Renovation from "../assets/images/renovations.jpeg";
import Remodelling from "../assets/images/remodelling.jpeg";

import "../../src/App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <img className="home-img" src={Homeimage} alt="" />
      <div className="center">
        <Link to="/contact" className="btn orange-btn">
          Contact Us
        </Link>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center flex-column">
            <h1 className="mt-5">Extensions</h1>
            <p className="p-5">
            Home extensions offer homeowners a multitude of benefits, providing additional space
            while enhancing the functionality and value of their property. Whether the aim is to add a
            spare bedroom with an en-suite, expand the kitchen, or create a new living space, a well-
            executed home extension had the potential to transform your current residence into the
            ideal home you’ve always desired.
            </p>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="extension-example">
              <img className="kitchen-img" src={Extensions} alt="" />
              <div className="overlay-text">
                <p>aasd</p>
                <p> My super text.</p>
                <p>asd asd asd asdads.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="extension-example">
              <img className="kitchen-img" src={Loft} alt="" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center flex-column">
            <h1 className="mt-5">Loft Conversions</h1>
            <p className="p-5">
            A loft conversion is the art of repurposing the often neglected loft space in to a functional
            living area within your home. The intricate process involves a series of steps including
            meticulous design thorough planning and executing the construction work. During the
            design phase, careful consideration is given to the available space, determining how best to
            maximize its potential. This might entail the incorporation of skylights, dormer windows and
            the creation of a staircase to ensure the seamless access to the newly transformed space.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center flex-column">
            <h1 className="mt-5">Renovation</h1>
            <p className="p-5">
            Renovation involves extensive changes to a building’s structure or layout, such as adding
            new rooms, demolishing walls, or completely revamping existing spaces. While these
            projects are more costly and time-consuming than refurbishments, they often result in
            dramatic transformations. Renovations offer the opportunity to significantly alter the look
            and functionality of a property, making them a worthwhile investment for those seeking
            substantial changes.
            </p>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="extension-example">
              <img className="kitchen-img" src={Renovation} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="extension-example">
              <img className="kitchen-img" src={Kitchentwo} alt="" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center flex-column">
            <h1 className="mt-5">New Build</h1>
            <p className="p-5">
            Embarking on a new building project allows you to shape a space that reflects your vision
            and requirements. From selecting finishes, flooring and design elements, the journey of a
            new build is filled with possibilities and anticipation. While it may involve a higher initial
            investment, a new build offers a fresh start and a blank canvas for those seeking a new
            home.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center flex-column">
            <h1 className="mt-5">Remodelling</h1>
            <p className="p-5">
            Remodelling refers to the process of modernising an already existing structure, focusing on
            cosmetic enhancements rather than structural overhauls. This will include re decorating,
            upgrading floors, replacing fixtures and fittings and introducing new lighting elements.
            Opting for remodelling can be an deal solution if you want to rejuvenate your home’s
            appearance without undertaking major changes to its layout or fundamental structure.
            Extending your house made simple by ExtendOut Design &amp; Build

            There are many ways to enhance your living space through home improvement. From
            refurbishment, garage conversions, wrap around extensions and loft extensions each option
            boasts distinct advantages, and unique benefits between them that can help you make an
            informed decision about which one is right for you.
            </p>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="extension-example">
              <img className="kitchen-img" src={Remodelling} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col contact-banner d-flex justify-content-center align-items-center">
            <Link to='/contact' className="btn banner-btn">
            Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
