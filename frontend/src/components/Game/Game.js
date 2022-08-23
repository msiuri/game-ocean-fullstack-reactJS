import "./Game.css";
import clouds from "../../assets/clouds.png";
import mario from "../../assets/mario.gif";
import pipe from "../../assets/pipe.png";
import { useRef, useState } from "react";

function Game() {
  console.log("Componente renderizado");
  //Criamos o estado
  const [jumping, setJumping] = useState(false);

  //Criando as referencias
  const marioRef = useRef();
  const pipeRef = useRef();

  function marioIsOnPipe() {
    const mario = marioRef.current;
    const pipe = pipeRef.current;

    if (!mario || !pipe) {
      return;
    }
    return (
      pipe.offsetLeft > mario.offsetLeft &&
      pipe.offsetLeft < mario.offsetLeft + mario.offsetWidth &&
      mario.offsetTop + mario.offsetHeight > pipe.offsetTop
    );
  }

  setInterval(() => {
    const valor = marioIsOnPipe();
    console.log("mario ta no cano", valor);
  }, 100);

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
      <img ref={marioRef} className={marioClassName} src={mario} alt="mario" />
      <img ref={pipeRef} className="pipe" src={pipe} alt="pipe" />
      <div className="floor"></div>
    </div>
  );
}

export default Game;
