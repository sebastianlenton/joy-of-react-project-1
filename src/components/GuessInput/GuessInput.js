import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessInput({ guesses, setGuesses, guess, setGuess, setGameState, answer, gameState }) {
  return <>
    <form className="guess-input-wrapper"
      onSubmit={
        event => {
          event.preventDefault();

          if (guesses.length >= NUM_OF_GUESSES_ALLOWED - 1) {
            setGameState('lost');
          }

          if (guess.length === 5) {
            setGuess(guess.toUpperCase());

            const guessObj = {
              guess: guess,
              id: crypto.randomUUID()
            };

            if (guess === answer) {
              setGameState('won');
            }

            const nextGuesses = [...guesses, guessObj];
            setGuess('');
            setGuesses(nextGuesses);
          }
        }
      }
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input placeholder="Guess..." id="guess-input" type="text"
        value={guess}
        pattern="^[a-zA-Z]{5}$"
        disabled={gameState === 'won' || gameState === 'lost' ? true : false}
        onChange={event => {
          setGuess(event.target.value.toUpperCase());
        }} />
    </form>
  </>
    ;
}

export default GuessInput;
