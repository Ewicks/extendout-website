import React from 'react'
import Flippablecard from '../components/FlippableCard'
import Image1 from '../assets/images/site.jpg'

function Team() {
  return (
    <div className='gallary-padding'>
      <div className="row">
        <div className="col">
          <h1 className='my-5 ms-2'>Office Team</h1>
        </div>
      </div>
        <Flippablecard />

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col d-flex flex-column">
          <h1>Site Teams</h1>

          <div className="site-team-container">
                <div className="gallery-item">
                  <img className="img-fluid gallery-img" src={Image1} alt="" />
                </div>
                <div className="gallery-item">
                  <img src={Image1} alt="" />
                </div>
                <div className="gallery-item">
                  <img src={Image1} alt="" />
                 
                </div>
                <div className="gallery-item">
                  <img src={Image1} alt="" />
                  
                </div>
                <div className="gallery-item">
                  <img src={Image1} alt="" />
                </div>
                <div className="gallery-item">
                  <img src={Image1} alt="" />
                </div>
                <div className="gallery-item">
                  <img src={Image1} alt="" />
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team