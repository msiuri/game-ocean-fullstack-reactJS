import "./Game.css";
import clouds from "../../assets/clouds.png";
import mario from "../../assets/mario.gif";
import pipe from "../../assets/pipe.png";
import { useState } from "react";

function Game() {
  console.log("Componente renderizado");
  //Criamos o estado
  const [jumping, setJumping] = useState(false);

  document.onkeydown = function () {
    //alteramos o estado para true
    setJumping(true);
    //reset state
    setTimeout(() => {
      setJumping(false);
    }, 700);
  };
  let marioClassName = "mario";

  if (jumping) {
    marioClassName = "mario mario-jump";
  }

  console.log(15, { jumping });

  return (
    <div className="game">
      <img className="clouds" src={clouds} alt="clouds" />
      <img className={marioClassName} src={mario} alt="mario" />
      <img className="pipe" src={pipe} alt="pipe" />
      <div className="floor"></div>
    </div>
  );
}

export default Game;
