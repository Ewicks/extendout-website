import React from "react";
import OpenKitchen from '../assets/images/open-kitchen.jpeg';
import LightedKitchen from '../assets/images/lighted-kitchen.jpeg';
import IndoorKitchen from '../assets/images/indoor-kitchen.jpeg';
import OpenRoom from '../assets/images/open-room.jpeg';
import Bath from '../assets/images/bath.jpeg';
import IndoorKitchenTwo from '../assets/images/indoor-kitchen-two.jpeg';
import KitchenThree from '../assets/images/kitchen-three.jpeg';

function Gallary() {
  return (
    <div>
      <div className="gallary-padding">
        <div className="row">
          <div className="col">
            <h1 className="my-5 gallary-title">Gallary</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="gallery-container">
              <div className="gallery-item">
                <img src={LightedKitchen} alt="" />
                <p
                  className="gallary-name-tag d-flex 
                justify-content-center 
                align-items-center"
                >
                  test
                </p>
              </div>
              <div className="gallery-item">
                <img src={OpenKitchen} alt="" />
                <p
                  className="gallary-name-tag d-flex 
                justify-content-center 
                align-items-center"
                >
                  test
                </p>
              </div>
              <div className="gallery-item">
                <img src={IndoorKitchen} alt="" />
                <p
                  className="gallary-name-tag d-flex 
                justify-content-center 
                align-items-center"
                >
                  test
                </p>
              </div>
              <div className="gallery-item">
                <img src={OpenRoom} alt="" />
                <p
                  className="gallary-name-tag d-flex 
                justify-content-center 
                align-items-center"
                >
                  test
                </p>
              </div>
              <div className="gallery-item">
                <img src={Bath} alt="" />
                <p
                  className="gallary-name-tag d-flex 
                justify-content-center 
                align-items-center"
                >
                  test
                </p>
              </div>
              <div className="gallery-item">
                <img src={IndoorKitchenTwo} alt="" />
                <p
                  className="gallary-name-tag d-flex 
                justify-content-center 
                align-items-center"
                >
                  test
                </p>
              </div>
              <div className="gallery-item">
                <img src={KitchenThree} alt="" />
                <p
                  className="gallary-name-tag d-flex 
                justify-content-center 
                align-items-center"
                >
                  test
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallary;
