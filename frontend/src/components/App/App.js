import { useState } from "react";
import Game from "../Game/Game";
import HighScore from "../HighScore/HighScore";
import "./App.css";

function App() {
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  function onDie() {
    setGameOver(true);
  }

  function onScore(score) {
    setScore(score);
  }
  return (
    <div className="App">
      <Game onDie={onDie} onScore={onScore} />
      {gameOver && <HighScore score={score} />}
    </div>
  );
}

export default App;
