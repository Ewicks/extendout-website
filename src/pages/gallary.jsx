import React from "react";
import OpenKitchen from "../assets/images/open-kitchen.jpeg";
import LightedKitchen from "../assets/images/lighted-kitchen.jpeg";
import IndoorKitchen from "../assets/images/indoor-kitchen.jpeg";
import OpenRoom from "../assets/images/open-room.jpeg";
import Bath from "../assets/images/bath.jpeg";
import KitchenThree from "../assets/images/kitchen-three.jpeg";

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
              <p className="gallery-item-text-2">View all our extensions</p>
            </div>
          </div>
        </div>
    
              
                 
        <div class="container-fluid gallery-container m-0">
          <div class="tz-gallery">
            <div class="row">
              <div class="col-sm-12 col-md-4">
                <div class="lightbox">
                  <img src={LightedKitchen} alt="Bridge" />
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="lightbox">
                  <img src={OpenKitchen} alt="Park" />
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="lightbox">
                  <img src={IndoorKitchen} alt="Tunnel" />
                </div>
              </div>
              <div class="col-sm-12 col-md-8">
                <div class="lightbox">
                  <img src={KitchenThree} alt="Traffic" />
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="lightbox">
                  <img src={OpenRoom} alt="Coast" />
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="lightbox">
                  <img src={Bath} alt="Rails" />
                </div>
              </div>
              <div class="col-sm-12 col-md-4">
                <div class="lightbox">
                  <img src={LightedKitchen} alt="Bridge" />
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="lightbox">
                  <img src={OpenKitchen} alt="Park" />
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="lightbox">
                  <img src={IndoorKitchen} alt="Tunnel" />
                </div>
              </div>
              <div class="col-sm-12 col-md-8">
                <div class="lightbox">
                  <img src={KitchenThree} alt="Traffic" />
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="lightbox">
                  <img src={OpenRoom} alt="Coast" />
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="lightbox">
                  <img src={Bath} alt="Rails" />
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="lightbox">
                  <img src={Bath} alt="Rails" />
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
