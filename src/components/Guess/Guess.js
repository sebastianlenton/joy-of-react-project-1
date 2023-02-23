import React from "react";

import { checkGuess } from '../../game-helpers';

function Guess({guess, answer}) {

  const checkedGuess = checkGuess(guess, answer);

  return (
    <p className="guess">
      {checkedGuess.map((item, index) => (
        <span className={"cell " + item.status} key={index}>{item.letter}</span>
      ))}
    </p>
  );
}

export default Guess;
