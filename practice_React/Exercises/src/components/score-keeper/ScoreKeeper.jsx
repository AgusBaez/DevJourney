import { useState } from "react";

const ScoreKeeper = () => {
  const [scores, setScores] = useState({ p1: 0, p2: 0 });

  const handlePlayer1 = () => {
    setScores({ ...scores, p1: scores.p1 + 1 });
  };
  const handlePlayer2 = () => {
    setScores({ ...scores, p2: scores.p2 + 1 });
  }; 
  const handleReset = () => {
    setScores({ ...scores, p2: (scores.p2 = 0), p1: (scores.p1 = 0) });
  };

  return (
    <div>
      <h1>Score Keeper</h1>
      <h2>Player 1: {scores.p1}</h2>
      <h2>Player 2: {scores.p2}</h2>
      <button onClick={handlePlayer1}>+Point to Player 1</button>
      <button onClick={handlePlayer2}>+Point to Player 2</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default ScoreKeeper;

