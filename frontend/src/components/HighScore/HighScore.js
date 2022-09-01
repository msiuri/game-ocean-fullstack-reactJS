import { useEffect, useState } from "react";
import "./HighScore.css";

function HighScore(props) {
  const [items, setItems] = useState(undefined);

  useEffect(function () {
    async function loadScore() {
      const response = await fetch("http://localhost:3333/score").then(
        console.log
      );
      const body = await response.json();

      console.log(body);
    }
    loadScore();
  }, []);

  console.log(items);

  const itemsLoading = items === undefined;
  console.log(itemsLoading);

  return (
    <div className="HighScore">
      <div>
        Você fez <b>{props.score}</b> pontos
      </div>
      <div>
        <h2>HighScore</h2>
      </div>
      <div>João - 20 pon tos</div>
      <div>Ana - 50 pontos</div>
      <div>Jael - 15 pontos</div>

      <div>
        <h2>Registre sua pontuação!</h2>
        <form>
          <input type="text" placeholder="Digite o seu nome:" />
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
}

export default HighScore;
