import React, {useState} from 'react'
import Card from './card/card'
import {CSSTransition} from 'react-transition-group';


function Flippablecard() {
  const [showFront, setShowFront] = useState(true)
  return (
    <div className='flippable-card-container'>
      <CSSTransition in={showFront} timeout={300} classNames='flip'>
        <Card onClick={() => {
          setShowFront((v) => !v)
        }} />
      </CSSTransition>

    </div>
  )
}

export default Flippablecard