import React, { useState } from "react";

function GuessInput() {
  const [guess, setGuess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (guess.length !== 5) {
      window.alert("Please enter exactly 5 characters");
      return;
    }
    console.log({ guess });
    setGuess("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          minLength={5}
          maxLength={5}
          id="guess-input"
          type="text"
          value={guess}
          onChange={e => {
            const newGuess = e.target.value.toUpperCase();
            setGuess(newGuess);
          }}
        />
      </form>
    </div>
  );
}

export default GuessInput;
