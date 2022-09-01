import "./HighScore.css";

import { useState } from "react";

function HighScore(props) {
  const [score, setScore] = useState(0);
  return (
    <div className="HighScore">
      <div>Você fez {score} pontos</div>
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
