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
          <Flippablecard />
        </div>
      </div>
     
      
    </div>
  )
}

export default Team