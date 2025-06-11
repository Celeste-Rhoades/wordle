import React from "react";
import { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
import { checkGuess } from "../../game-helpers";
import Keyboard from "../Keyboard";

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

  const [gameStatus, setGameStatus] = React.useState("running");
  const [guesses, setGuesses] = useState([]);

  function handleRestart() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus("running");
  }
  const validatedGuesses = guesses.map(guess => checkGuess(guess, answer));

  function handleSubmitGuesses(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }
  return (
    <>
      <GuessResults validatedGuesses={validatedGuesses} />

      <GuessInput
        handleSubmitGuesses={handleSubmitGuesses}
        gameStatus={gameStatus}
      />
      <Keyboard validatedGuesses={validatedGuesses} />

      {gameStatus === "won" && (
        <WonBanner
          numOfGuesses={guesses.length}
          handleRestart={handleRestart}
        />
      )}
      {gameStatus === "lost" && (
        <LostBanner answer={answer} handleRestart={handleRestart} />
      )}
    </>
  );
}

export default Game;
