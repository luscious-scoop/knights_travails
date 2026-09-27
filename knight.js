function getAllPossibleMoves(x, y) {
  const moves = [];

  if (x + 1 < 7 && y + 2 <= 7) {
    moves.push([x + 1, y + 2]);
  }

  if (x + 2 < 7 && y + 1 <= 7) {
    moves.push([x + 2, y + 1]);
  }
  if (x - 1 >= 0 && y - 2 >= 0) {
    moves.push([x - 1, y - 2]);
  }

  if (x - 2 >= 0 && y - 1 >= 0) {
    moves.push([x - 2, y - 1]);
  }

  if (x - 2 >= 0 && y + 1 <= 7) {
    moves.push([x - 2, y + 1]);
  }

  if (x + 1 <= 7 && y - 2 >= 0) {
    moves.push([x + 1, y - 2]);
  }

  if (x + 2 <= 7 && y - 1 >= 0) {
    moves.push([x + 2, y - 1]);
  }

  if (x - 1 >= 0 && y + 2 <= 7) {
    moves.push([x - 1, y + 2]);
  }

  return moves;
}

function knightMoves(start, end) {
  const [x1, y1] = end;

  const Q = [];

  Q.push(start);
  let count = 0;
  while (Q.length > 0) {
    const move = Q.shift();

    if (move[0] === x1 && move[1] === y1) {
      return count;
    }

    Q.push(...getAllPossibleMoves(move[0], move[1]));
    count++;
  }
}

console.log(knightMoves([0, 0], [2, 1]));
