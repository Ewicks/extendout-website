import React from 'react';
import './card.css';

function Card({ member, onClick }) {
  return (
    <div className='card' onClick={onClick}>
      <div className='card-back'>{`Back - ${member.position}`}</div>
      <div className='card-front'>{`${member.firstname} ${member.secondname}`}</div>
    </div>
  );
}

export default Card;
