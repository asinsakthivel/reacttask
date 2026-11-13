
import React, { useState } from "react";
import "./XOGame.css";

function XOGame() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleClick = (index) => {
    if (board[index] !== "" || winner || isDraw) {
      return;
    }

    const updatedBoard = [...board];
    updatedBoard[index] = currentPlayer;

    setBoard(updatedBoard);

    const hasWon = winningPatterns.some((pattern) =>
      pattern.every((position) => updatedBoard[position] === currentPlayer)
    );

    if (hasWon) {
      setWinner(currentPlayer);
      console.log(`Player ${currentPlayer} Wins!`);
    } else if (updatedBoard.every((cell) => cell !== "")) {
      setIsDraw(true);
      console.log("Match Draw!");
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }

    console.log("Game Board:", updatedBoard);
  };

  const restartGame = () => {
    setBoard(Array(9).fill(""));
    setCurrentPlayer("X");
    setWinner(null);
    setIsDraw(false);

    console.log("Game Restarted!");
  };

  return (
    <div className="game-container">
      <h1>XO GAME</h1>
      <p className="subtitle">Tic-Tac-Toe Challenge</p>

      <div className="game-status">
        {winner
          ? `Player ${winner} Wins! 🎉`
          : isDraw
          ? "Match Draw! 🤝"
          : `Player ${currentPlayer}'s Turn`}
      </div>

      <div className="game-board">
        {board.map((value, index) => (
          <button
            key={index}
            className={`cell ${value === "X" ? "x-cell" : "o-cell"}`}
            onClick={() => handleClick(index)}
            disabled={value !== "" || winner !== null || isDraw}
          >
            {value}
          </button>
        ))}
      </div>

      <button className="restart-btn" onClick={restartGame}>
        Restart Game
      </button>
    </div>
  );
}

export default XOGame;
