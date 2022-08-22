import "./Game.css";
import clouds from "../../assets/clouds.png";

function Game() {
  return (
    <div className="game">
      <img className="clouds" src={clouds} alt="clouds" />
    </div>
  );
}

export default Game;
