import React, { useState, useEffect } from "react";
import PlayerForm from "./components/PlayerForm";
import "./App.css";

function App() {
  const [players, setPlayers] = useState({ playerA: "", playerB: "" });
  const [gameStarted, setGameStarted] = useState(false);
  
   // Grille vide : tableau 9 cases null
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");

   // Au chargement, récupérer les infos dans localStorage
  useEffect(() => {
    const storedStarted = localStorage.getItem("gameStarted");
    const storedPlayers = localStorage.getItem("players");

    if (storedStarted === "true" && storedPlayers) {
      setGameStarted(true);
      setPlayers(JSON.parse(storedPlayers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("board", JSON.stringify(board));
    localStorage.setItem("currentPlayer", currentPlayer);
  }, [board, currentPlayer]);
  useEffect (() =>{
    const storedBoard = localStorage.getItem("board");
    const storedCurrentPlayer = localStorage.getItem("currentPlayer");

    if (storedBoard) setBoard(JSON.parse(storedBoard));
    if (storedCurrentPlayer) setCurrentPlayer(storedCurrentPlayer);
  },[]);
  

  // Fonction pour démarrer la partie
  const handleStartGame = (playerA, playerB) => {
    setPlayers({ playerA, playerB });
    setGameStarted(true);

    // Sauvegarder dans localStorage
    localStorage.setItem("gameStarted", "true");
    localStorage.setItem("players", JSON.stringify({ playerA, playerB }));
  };

  //Renitialise que si on appuie sur recommencer

  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //lignes
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // colonneS
    [0, 4, 8], [2, 4, 6], // diagonaleS
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
   const isBoardFull = (board) => {
    return board.every(cell => cell !== null);
  };
  //Etat pour verifier le gagnant
  const [winner, setWinner] = useState(null);

  //Fonction qui gere les evenements au clic
  const handleCellClick = (index) => {
    if (board[index] || winner ) return; // ignore si case déjà prise

    const newBoard = [...board];
    newBoard[index] = currentPlayer;

    setBoard(newBoard);
    
    //Variable qui recupere le retour de la fonction checkwinner
    const theWinner = checkWinner(newBoard);
    if (theWinner) {
      setWinner(theWinner);
    } else if (isBoardFull (newBoard)) {
      setWinner("Égalité");  // On peut utiliser une valeur spéciale pour indiquer le match nul
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");  // Alterner joueur
    }
  }
  const resetGameAll = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer("X")
    setGameStarted(false)
    localStorage.removeItem("board");
    localStorage.removeItem("currentPlayer")
  };
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer("X")
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
          {winner ? (
            winner === "Égalité" ? (
              <div className="text-match-nul">
                <h3>Match nul ! 🤝</h3>
                <button onClick={resetGame}>Recommencer la partie</button>
              </div>
            ) : (
              <div className="text-match-gagne">
                <h3>Le joueur {winner} a gagné ! 🎉</h3>
                <button onClick={resetGameAll}> Tout Recommencer</button>
                <button onClick={resetGame}>Recommencer la partie</button>
              </div>
              
            )
          ) : (
            <h3 className="text-prochain-tour">Au tour de {currentPlayer}</h3>
          )}
          
          
        </div>
      )}
      
    </div>
  );
}

export default App;
