import React, { useState } from "react";

function GuessInput({ handleSubmitGuesses }) {
  const [tentativeGuess, setTentativeGuess] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    handleSubmitGuesses(tentativeGuess);

    setTentativeGuess("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          id="guess-input"
          type="text"
          value={tentativeGuess}
          onChange={e => {
            const newGuess = e.target.value.toUpperCase();
            setTentativeGuess(newGuess);
          }}
        />
      </form>
    </div>
  );
}

export default GuessInput;
