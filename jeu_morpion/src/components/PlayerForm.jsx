import React, { useState } from "react";
import "./PlayerForm.css";

function PlayerForm({ onStart }) {
  const [playerA, setPlayerA] = useState("");
  const [playerB, setPlayerB] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playerA.trim() && playerB.trim()) {
      onStart(playerA, playerB);
    } else {
      alert("Veuillez entrer les noms des deux joueurs !");
    }
  };

  return (
    <form className="player-form" onSubmit={handleSubmit}>
      <h2>Entrez les noms des joueurs</h2>
      <input
        type="text"
        placeholder="Nom du joueur A (X)"
        value={playerA}
        onChange={(e) => setPlayerA(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nom du joueur B (O)"
        value={playerB}
        onChange={(e) => setPlayerB(e.target.value)}
      />
      <button type="submit" className="submit-button">Commencer</button>
    </form>
  );
}

export default PlayerForm;
