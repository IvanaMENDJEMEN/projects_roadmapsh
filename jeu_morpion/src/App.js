import React, { useState, useEffect } from "react";
import PlayerForm from "./components/PlayerForm";
import "./App.css";

function App() {
  const [players, setPlayers] = useState({ playerA: "", playerB: "" });
  const [gameStarted, setGameStarted] = useState(false);
  
   // Grille vide : tableau 9 cases null
  const [board, setBoard] = useState(Array(9).fill(null));

   // Au chargement, récupérer les infos dans localStorage
  useEffect(() => {
    const storedStarted = localStorage.getItem("gameStarted");
    const storedPlayers = localStorage.getItem("players");

    if (storedStarted === "true" && storedPlayers) {
      setGameStarted(true);
      setPlayers(JSON.parse(storedPlayers));
    }
  }, []);

  // Fonction pour démarrer la partie
  const handleStartGame = (playerA, playerB) => {
    setPlayers({ playerA, playerB });
    setGameStarted(true);

    // Sauvegarder dans localStorage
    localStorage.setItem("gameStarted", "true");
    localStorage.setItem("players", JSON.stringify({ playerA, playerB }));
  };

  //Renitialise que si on appuie sur recommencer

  const [currentPlayer, setCurrentPlayer] = useState("X");

  const winningCombos = [
    [0, 1, 2], // ligne du haut
    [3, 4, 5], // ligne du milieu
    [6, 7, 8], // ligne du bas
    [0, 3, 6], // colonne gauche
    [1, 4, 7], // colonne milieu
    [2, 5, 8], // colonne droite
    [0, 4, 8], // diagonale principale
    [2, 4, 6], // diagonale secondaire
  ];

  function checkWinner(board) {
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (
      board[a] &&                // 1. Vérifie que la case a n'est pas vide (évite de dire qu'un trio de cases vides est gagnant)
      board[a] === board[b] &&   // 2. Vérifie que la case a et la case b ont le même symbole (ex : 'X' === 'X')
      board[a] === board[c]      // 3. Vérifie que la case a et la case c ont aussi le même symbole (ex : 'X' === 'X')
      ) {
        return board[a];           // Si les 3 conditions sont vraies, on retourne le symbole gagnant ('X' ou 'O')
      }
    }
    return null;                   // Si aucune combinaison gagnante n'est trouvée, on retourne null
  }
  //Etat pour verifier le gagnant
  const [winner, setWinner] = useState(null);

  //Fonction qui gere les evenements au clic
  const handleCellClick = (index) => {
    if (board[index]) return; // ignore si case déjà prise

    const newBoard = [...board];
    newBoard[index] = currentPlayer;

    setBoard(newBoard);
    
    //Variable qui recupere le retour de la fonction checkwinner
    const theWinner = checkWinner(newBoard);
    if (theWinner) {
      setWinner(theWinner);
    } else if (isBoardFull) {
      setWinner("Égalité");  // On peut utiliser une valeur spéciale pour indiquer le match nul
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");  // Alterner joueur
    }
  }
  // Gestion de l'egalite et le gagnant
  // let resultat;
  // if (winner)

  const isBoardFull = (board) => {
    return board.every(cell => cell !== null);
  };

  return (
    <div className="app">
      <h1 className="app-title">Tic Tac Toe</h1>
      {!gameStarted ? (
        <PlayerForm onStart={handleStartGame} />
      ) : (
        <div className="game-area" >
          <h2>
            {players.playerA} (X) vs {players.playerB} (O) !
          </h2>
         <div className="board">
            {board.map((cell, i) => (
              <div key={i} className="cell"onClick={() => handleCellClick(i)}>
                {cell}
              </div>
            ))}
          </div>
          {/* ajout de l'etat de l'egalite */}
        </div>
      )}
    </div>
  );
}

export default App;
