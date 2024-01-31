import React from 'react'
import Flippablecard from '../components/FlippableCard'

function Team() {
  return (
    <div className='gallary-padding'>
      <div className="row">
        <div className="col">
          <h1 className='my-5'>Office Team</h1>
        </div>
      </div>
      <div className="row my-5">
        <div className="col">
          <div className='d-flex justify-content-center align-items-center'>
            <Flippablecard />
          </div>
        </div>
      </div>
     
      
    </div>
  )
}

export default Team