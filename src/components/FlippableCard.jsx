import React, { useState } from "react";
import Card from "./card/card";
import { CSSTransition } from "react-transition-group";
import { teamData } from "../dummy";

function Flippablecard() {
  const team = teamData();
  const [showFront, setShowFront] = useState(Array(team.length).fill(true));

  const handleCardClick = (index) => {
    setShowFront((prevShowFront) => {
      const newShowFront = [...prevShowFront];
      newShowFront[index] = !newShowFront[index];
      return newShowFront;
    });
  };

  return (
    <div className="flippable-card-container">
        {team.map((member, index) => (
        <CSSTransition
          key={index}
          in={showFront[index]}
          timeout={300}
          classNames="flip"
        >
          <Card member={member} onClick={() => handleCardClick(index)} />
        </CSSTransition>
      ))}
    </div>
  );
}

export default Flippablecard;
