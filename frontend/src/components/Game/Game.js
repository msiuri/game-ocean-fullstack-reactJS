import "./Game.css";
import clouds from "../../assets/clouds.png";
import mario from "../../assets/mario.gif";
import pipe from "../../assets/pipe.png";
import gameOver from "../../assets/game-over.png";
import { useEffect, useRef, useState } from "react";

function Game(props) {
  //Criamos o estado
  const [jumping, setJumping] = useState(false);
  const [isDead, setIsDead] = useState(false);
  const [score, setScore] = useState(0);

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

  useEffect(
    function () {
      const interval = setInterval(() => {
        if (isDead) {
          return;
        }
        setScore(score + 1);
        props.onScore(score + 1);
      }, 2000);
      return () => clearInterval(interval);
    },
    [isDead, props, score]
  );

  useEffect(
    function () {
      const interval = setInterval(() => {
        const isOnPipe = marioIsOnPipe();

        if (!isOnPipe) {
          return;
        }

        setIsDead(true);
        props.onDie();
      }, 100);
      return () => clearInterval(interval);
    },
    [isDead, props, score]
  );

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

  const marioImage = isDead ? gameOver : mario;

  const stop = isDead ? "stop-animation" : "";

  return (
    <div className="game">
      <div> {score} </div>
      <img className={"clouds " + stop} src={clouds} alt="clouds" />
      <img
        ref={marioRef}
        className={marioClassName}
        src={marioImage}
        alt="mario"
      />
      <img ref={pipeRef} className={"pipe " + stop} src={pipe} alt="pipe" />
      <div className="floor"></div>
    </div>
  );
}

export default Game;
