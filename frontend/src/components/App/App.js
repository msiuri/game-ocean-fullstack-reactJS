import { useState } from "react";
import Game from "../Game/Game";
import HighScore from "../HighScore/HighScore";
import "./App.css";

function App() {
  const [gameOver, setGameOver] = useState(false);

  function onDie() {
    setGameOver(true);
    console.log("App > On Die");
  }
  return (
    <div className="App">
      <Game onDie={onDie} />
      {gameOver && <HighScore />}
    </div>
  );
}

export default App;
