import React from 'react';
import './card.css';
import Worker from '../../assets/images/worker.jpeg'

function Card({ member, onClick }) {
  return (
    <div className='card' onClick={onClick}>
      <div className='card-back'>
          <img alt='' src={Worker} className='img-fluid card-img' />
            <div className='person-stats'>
                <dl className='stat'>
                    <dt>Years In industry</dt>
                    <dd><span className='stat-block' style={{ width: "100%" }}>57</span></dd>
                </dl>
                <dl className='stat'>
                    <dt>Coffee making skill</dt>
                    <dd><span className='stat-block' style={{ width: "100%" }}>57</span></dd>
                </dl>
                <dl className='stat'>
                    <dt>design skill</dt>
                    <dd><span className='stat-block' style={{ width: "100%" }}>57</span></dd>
                </dl>
                <dl className='stat'>
                    <dt>creativity</dt>
                    <dd><span className='stat-block' style={{ width: "100%" }}>57</span></dd>
                </dl>
                <dl className='stat'>
                    <dt>project management</dt>
                    <dd><span className='stat-block' style={{ width: "100%" }}>57</span></dd>
                </dl>
              
            </div>
      </div>
      <div className='card-front'>
        <img alt='' src={Worker} className='img-fluid card-img' />
        <div className='details'>
            <div className='position'>
            {`${member.position}`}
            <div className='border-position'></div>
            </div>
            {`${member.firstname} ${member.secondname}`}
        </div>
        </div>
    </div>
  );
}

export default Card;
