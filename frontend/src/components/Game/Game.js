import "./Game.css";
import clouds from "../../assets/clouds.png";
import mario from "../../assets/mario.gif";
import pipe from "../../assets/pipe.png";

function Game() {
  return (
    <div className="game">
      <img className="clouds" src={clouds} alt="clouds" />
      <img className="mario" src={mario} alt="mario" />
      <img className="pipe" src={pipe} alt="pipe" />
      <div className="floor"></div>
    </div>
  );
}

export default Game;
