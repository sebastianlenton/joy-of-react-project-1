/**
 * Joy of React course Project 1
 *
 * I did this without looking at any of the solutions, so it's pretty terrible!
 */

import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState('');

  return <>
    <GuessResults guesses={guesses} answer={answer} />
    <GuessInput guesses={guesses} setGuesses={setGuesses} guess={guess} setGuess={setGuess} setGameState={setGameState} gameState={gameState} answer={answer} />
    {gameState === 'won' && <Banner bannerType={'happy'} bannerText={[<strong key={'s1'}>Congratulations!</strong>, ' Got it in ', <strong key={'s2'}>{guesses.length} {guesses.length === 1 ? 'guess' : 'guesses'}</strong>, '.']} />}
    {gameState === 'lost' && <Banner bannerType={'sad'} bannerText={['Sorry, the correct answer is ', <strong>{answer}</strong>, '.']} />}
  </>;
}

export default Game;
