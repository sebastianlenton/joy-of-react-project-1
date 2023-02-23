import React from "react";
import Guess from "../Guess";

import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({guesses, answer}) {
  const numRows = range(0, NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {
        numRows.map((row, index) => (
          <Guess answer={answer} guess={guesses[index] !== undefined ? guesses[index].guess : '     '} key={index} />
        ))
      }
    </div>
  );
}

export default GuessResults;
