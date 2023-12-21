import React, { useState } from 'react';

function TicTacToe() {
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);

  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const handleClick = (row, col) => {
    if (board[row][col] || winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);

    if (checkWinner()) {
      setWinner(currentPlayer);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const checkWinner = () => {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === currentPlayer &&
        board[i][1] === currentPlayer &&
        board[i][2] === currentPlayer
      ) {
        return true;
      }

      if (
        board[0][i] === currentPlayer &&
        board[1][i] === currentPlayer &&
        board[2][i] === currentPlayer
      ) {
        return true;
      }
    }

    if (
      board[0][0] === currentPlayer &&
      board[1][1] === currentPlayer &&
      board[2][2] === currentPlayer
    ) {
      return true;
    }

    if (
      board[0][2] === currentPlayer &&
      board[1][1] === currentPlayer &&
      board[2][0] === currentPlayer
    ) {
      return true;
    }

    return false;
  };

  const resetGame = () => {
    setBoard([
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]);
    setCurrentPlayer('X');
    setWinner(null);
  };

  return (
    <div style={{backgroundColor:'white'}}>
    <div className="container-fluid  d-flex align-items-center justify-content-center vh-100 "
     >
      <div className="status " style={{position:'absolute',top:'80px', left:'auto'}}>
       <h2>{winner ? `Winner: ${winner}` : `Current Player: ${currentPlayer}`}</h2>
      </div>
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className="cell"
                style={{
                  width: '100px',
                  height: '100px',
                  border: '1px solid #ccc',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  cursor: 'pointer',
                  backgroundColor:'aliceblue'
                }}
                onClick={() => handleClick(rowIndex, colIndex)}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
      <button className="reset" style={{position:'absolute',top:'550px', left:'auto'}} onClick={resetGame}>
        Reset Game
      </button>
    </div>
    </div>
  );
}

export default TicTacToe;
