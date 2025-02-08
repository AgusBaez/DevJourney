import { useState } from "react";

const ScoreKeeper = ({ numPlayer = 3, target = 5 }) => {
  const [playerScore, setScores] = useState(new Array(numPlayer).fill(0));

  const incrementScore = (playerIdx) => {
    setScores((oldState) => {
      const newCopyState = [...oldState];
      newCopyState[playerIdx] += 1;   
      return newCopyState;
    });
  };

  const resetScore = () => {
    setScores(new Array(numPlayer).fill(0));
  };

  return (
    <div>
      <h1>Score Keeper</h1>
      <ul>
        {playerScore.map((actaulScores, idx) => {
          return (
            <li key={idx}>
              <h2>{actaulScores >= target && "Winner!"}</h2>
              Player {idx + 1} : {actaulScores}
              <button onClick={() => incrementScore(idx)}>+1</button>
            </li>
          );
        })}
      </ul>
      <button onClick={resetScore}>Reset</button>
    </div>
  );
};

export default ScoreKeeper;

