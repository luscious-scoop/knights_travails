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
  if (!start) return;
  let [x, y] = start;

  let [x1, y1] = end;

  if (x === x1 && y === y1) return true;
}

console.log(knightMoves([3, 3], [4, 3]));
