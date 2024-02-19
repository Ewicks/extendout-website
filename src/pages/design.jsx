import React from "react";
import { Link } from "react-router-dom";
import DesignImg from '../assets/images/desing-img.jpeg'

function Design() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row mb-5">
          <div className="col-12 position-relative p-0">
            <div className="overlay-gallery"></div>
            <img
              className="img-fluid gallery-img"
              src={DesignImg}
              alt=""
            />
            <p className="gallery-item-text">Design & Planning</p>
          </div>
        </div>
      </div>
      <div className="extra-padding">
        
        <div className="container-fluid">
          <div className="row gap-5 mobile-design mb-5">
           
            <div className="col col-center">
              <div className="design-container">
                <p>
                  While renovations can be intricate and time consuming, the
                  return on investment is undoubtedly worthwhile. Not only will
                  you enhance your living experience, but you will also increase
                  the value of your property.
                </p>
                <br />
                <p>
                  As design and planning experts, we provide guidance towards
                  cost effective solutions whilst ensuring you never compromise
                  on your priorities. Regardless of your vision and budget, we
                  work diligently within the se parameters and keep you informed
                  of progress every step of the way. The remodel you envisage is
                  the one we will bring to life. Our services include drafting
                  plans, managing changes on applications, conducting on-site
                  surveys, providing accurate quotes, and executing plans
                  effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row px-5 mobile-design">
            <div className="col col-center">
              <div className="bullet-points">
                <h1>
                  Our comprehensive design &amp; planning proposal includes the
                  following services:
                </h1>
                <ul className="lh-lg">
                  <li>
                    Conducting a thorough measured survey of your property with
                    our experienced surveyor
                  </li>
                  <li>
                    Providing detailed floor plans and elevation drawings of
                    your current property layout
                  </li>
                  <li>
                    Conducting an online design session with our architect
                    registered with the ARB
                  </li>
                  <li>
                    Presenting proposed floor plans and elevations based on your
                    preferences and requirements
                  </li>
                  <li>
                    Allowing up to 3 design revisions to ensure the final plans
                    align perfectly with your vision
                  </li>
                  <li>
                    Preparing and providing all necessary supporting planning
                    documents
                  </li>
                  <li>
                    Handling the submission and management of your planning
                    application process
                  </li>
                </ul>
              </div>
            </div>
            <div className="col d-flex justify-content-start align-items-center content-center">
              <Link className="contact-btn my-5" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
