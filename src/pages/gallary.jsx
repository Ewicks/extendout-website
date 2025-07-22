import React from "react";
import OpenKitchen from "../assets/images/open-kitchen.jpeg";
import LightedKitchen from "../assets/images/lighted-kitchen.jpeg";
import IndoorKitchen from "../assets/images/indoor-kitchen.jpeg";
import OpenRoom from "../assets/images/open-room.jpeg";
import Bath from "../assets/images/bath.jpeg";
import KitchenThree from "../assets/images/kitchen-three.jpeg";
import Gallery1 from '../assets/images/gallery1.jpeg';
import Gallery2 from '../assets/images/gallery2.jpeg';
import Gallery3 from '../assets/images/gallery3.jpeg';
import Gallery4 from '../assets/images/gallery4.jpeg';
import Gallery5 from '../assets/images/gallery5.jpeg';
import Renovation from "../assets/images/renovations.jpeg";
import Gal1 from "../assets/images/gal1.jpeg";
import Gal2 from "../assets/images/gal2.jpeg";
import Gal3 from "../assets/images/gal3.jpeg";
import Gal4 from "../assets/images/gal4.jpeg";
import Gal6 from "../assets/images/gal6.jpeg";
import Gal7 from "../assets/images/gal7.jpeg";
import Gal8 from "../assets/images/gal8.jpeg";
import Gal9 from "../assets/images/gal9.jpeg";
import Gal10 from "../assets/images/gal10.jpeg";
import Gal11 from "../assets/images/gal11.jpeg";
import Gal12 from "../assets/images/gal12.jpeg";
import Gal13 from "../assets/images/gal13.jpeg";

function Gallary() {
  return (
    <div>
      <div className="">
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-12 position-relative p-0">
              <div className="overlay-gallery"></div>
              <img
                className="img-fluid gallery-img"
                src={Bath}
                alt=""
                loading="lazy"
              />
              <p className="gallery-item-text">Gallery</p>
              <p className="gallery-item-text-2">Some of our projects</p>
            </div>
          </div>
        </div>
        <div className="container-fluid gallery-container m-0">
          <div className="tz-gallery">
            <div className="row">
              <div className="col-sm-12 col-md-8">
                <div className="lightbox">
                  <img src={LightedKitchen} alt="Bridge" loading="lazy" />
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="lightbox">
                  <img src={OpenKitchen} alt="Park" loading="lazy" />
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="lightbox">
                  <img src={IndoorKitchen} alt="Tunnel" loading="lazy" />
                </div>
              </div>
              <div className="col-sm-12 col-md-8">
                <div className="lightbox">
                  <img src={KitchenThree} alt="Traffic" loading="lazy" />
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="lightbox">
                  <img src={OpenRoom} alt="Coast" loading="lazy" />
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="lightbox">
                  <img src={Bath} alt="Rails" loading="lazy" />
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="lightbox">
                  <img src={Gallery1} alt="Bridge" loading="lazy" />
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="lightbox">
                  <img src={Gallery2} alt="Park" loading="lazy" />
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="lightbox">
                  <img src={Gallery3} alt="Tunnel" loading="lazy" />
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="lightbox">
                  <img src={Renovation} alt="Tunnel" loading="lazy" />
                </div>
              </div>
              <div className="col-sm-12 col-md-8">
                <div className="lightbox">
                  <img src={Gallery4} alt="Traffic" loading="lazy" />
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="lightbox">
                  <img src={Gallery5} alt="Coast" loading="lazy" />
                </div>
              </div>
              <div className="col-sm-12 col-md-8">
                <div className="lightbox">
                  <img src={Gal1} alt="Bridge" loading="lazy" />
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="lightbox">
                  <img src={Gal2} alt="Park" loading="lazy" />
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="lightbox">
                  <img src={Gal3} alt="Tunnel" loading="lazy" />
                </div>
              </div>
              <div className="col-sm-12 col-md-8">
                <div className="lightbox">
                  <img src={Gal4} alt="Traffic" loading="lazy" />
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="lightbox">
                  <img src={Gal6} alt="Coast" loading="lazy" />
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="lightbox">
                  <img src={Gal7} alt="Rails" loading="lazy" />
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="lightbox">
                  <img src={Gal8} alt="Bridge" loading="lazy" />
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="lightbox">
                  <img src={Gal9} alt="Park" loading="lazy" />
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="lightbox">
                  <img src={Gal10} alt="Tunnel" loading="lazy" />
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="lightbox">
                  <img src={Gal11} alt="Tunnel" loading="lazy" />
                </div>
              </div>
              <div className="col-sm-12 col-md-8">
                <div className="lightbox">
                  <img src={Gal12} alt="Traffic" loading="lazy" />
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="lightbox">
                  <img src={Gal13} alt="Coast" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallary;
