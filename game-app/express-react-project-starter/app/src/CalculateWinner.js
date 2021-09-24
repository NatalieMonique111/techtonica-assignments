// squares: array of length 9 that represents board
// returns X or O if winner, otherwise returns null
export function calculateWinner(squares, addScore) {
  // lines represent any winning order of array elements arranged as 3x3 grid
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]; // need 3 to win
    // squares = [X,X,X,O,X,O,X,O...],
    // a = 0, b =1, c = 2
    // checking if X === X === X in a row
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      addScore(squares[a]); 
      return squares[a];
    }
  }
  return null;
}

