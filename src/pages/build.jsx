import React from "react";
import KitchenFour from "../assets/images/kitchen-four.jpeg";
import { Link } from "react-router-dom";

function Build() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className="my-4 ps-4">Build</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row my-5">
          <div className="col-md-6 px-5 col-sm-12">
            <img className="design-img" src={KitchenFour} alt="" />
          </div>
          <div className="col-md-6 px-5 col-sm-12">
            <div className="design-container sm-p-build">
              <p>
                If you already have your existing and proposed drawings for your
                project, we can provide a comprehensive build cost proposal that
                includes shell costs and all your chosen specifications. These
                may well include;
              </p>
              <h2>Specifications you may want to include in your build:</h2>
              <br />
              <ul>
                <li>Bespoke Joinery</li>
                <li>Electrical</li>
                <li>Flooring</li>
                <li>Internal doors</li>
                <li>Kitchen</li>
                <li>Bathroom</li>
                <li>Tiling</li>
                <li>External windows and doors</li>
                <li>Heating Solutions</li>
              </ul>
              <p>
                At ExtendOut Design &amp; Build, our aim is to orchestrate a
                seamless and refined construction journey for our clients. To
                achieve this, we enlist high caliber tradesmen including,
                Carpenters, electricians, tilers, roofers, brick layers,
                plasterers, kitchen fitters, glaziers, roofers, decorators and
                many more
              </p>
              <br />
              <p>
                Understanding the importance of communication we have a number
                of different ways we can communicate – usually we set up a
                whattsapp group for day to day, formal face to face
                weekly/bi-weekly meetings, email and facetime meetings. We take
                immense pride in our commitment to transparency and ensuring
                that you remain well-informed and engaged as your vision takes
                shape.
              </p>
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

export default Build;
