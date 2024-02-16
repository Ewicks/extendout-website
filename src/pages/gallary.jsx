import React from "react";
import OpenKitchen from "../assets/images/open-kitchen.jpeg";
import LightedKitchen from "../assets/images/lighted-kitchen.jpeg";
import IndoorKitchen from "../assets/images/indoor-kitchen.jpeg";
import OpenRoom from "../assets/images/open-room.jpeg";
import Bath from "../assets/images/bath.jpeg";
import IndoorKitchenTwo from "../assets/images/indoor-kitchen-two.jpeg";
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
              />
              <p className="gallery-item-text">Gallery</p>
              <p className="gallery-item-text-2">View all our extensions</p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              {/* <h1 className="my-5 gallary-title">Gallery</h1> */}
              <div className="gallery-container">
                <div className="gallery-item">
                  <img
                    className="img-fluid gallery-img"
                    src={LightedKitchen}
                    alt=""
                  />
                  <p
                    className="gallary-name-tag d-flex 
                justify-content-center 
                align-items-center"
                  >
                    Putney
                  </p>
                </div>
                <div className="gallery-item">
                  <img src={OpenKitchen} alt="" />
                  <p
                    className="gallary-name-tag d-flex 
                justify-content-center 
                align-items-center"
                  >
                    Eltham
                  </p>
                </div>
                <div className="gallery-item">
                  <img src={IndoorKitchen} alt="" />
                  <p
                    className="gallary-name-tag d-flex 
                justify-content-center 
                align-items-center"
                  >
                    Staines
                  </p>
                </div>
                <div className="gallery-item">
                  <img src={OpenRoom} alt="" />
                  <p
                    className="gallary-name-tag d-flex 
                justify-content-center 
                align-items-center"
                  >
                    Esher
                  </p>
                </div>
                <div className="gallery-item">
                  <img src={Bath} alt="" />
                  <p
                    className="gallary-name-tag d-flex 
                justify-content-center 
                align-items-center"
                  >
                    Esher
                  </p>
                </div>
                <div className="gallery-item">
                  <img src={IndoorKitchenTwo} alt="" />
                  <p
                    className="gallary-name-tag d-flex 
                justify-content-center 
                align-items-center"
                  >
                    Putney
                  </p>
                </div>
                <div className="gallery-item">
                  <img src={KitchenThree} alt="" />
                  <p
                    className="gallary-name-tag d-flex 
                justify-content-center 
                align-items-center"
                  >
                    Kingston
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container gallery-container">

    
    <div class="tz-gallery">

        <div class="row">

            <div class="col-sm-12 col-md-4">
                <div class="lightbox" >
                    <img src={LightedKitchen} alt="Bridge" />
                </div>
            </div>
            <div class="col-sm-6 col-md-4">
                <div class="lightbox" >
                    <img src={OpenKitchen} alt="Park" />
                </div>
            </div>
            <div class="col-sm-6 col-md-4">
                <div class="lightbox" >
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

        </div>

    </div>

</div>
      </div>
    </div>
  );
}

export default Gallary;
