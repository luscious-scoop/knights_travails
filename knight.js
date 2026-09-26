function getAllPossibleMoves(x, y) {
  const moves = [];

  if (x + 1 < 7 && y + 2 < 7) {
    moves.push([x + 1, y + 2]);
  }

  if (x + 2 < 7 && y + 1 < 7) {
    moves.push([x + 2, y + 1]);
  }
  if (x - 1 >= 0 && y - 2 >= 0) {
    moves.push([x - 1, y - 2]);
  }

  if (x - 2 >= 0 && y - 1 >= 0) {
    moves.push([x - 2, y - 1]);
  }

  if (x - 2 >= 0 && y + 1 < 7) {
    moves.push([x - 2, y + 1]);
  }

  if (x + 1 < 7 && y - 2 >= 0) {
    moves.push([x + 1, y - 2]);
  }

  if (x + 2 < 7 && y - 1 >= 0) {
    moves.push([x + 2, y - 1]);
  }

  if (x - 1 >= 0 && y + 2 < 7) {
    moves.push([x - 1, y + 2]);
  }

  return moves;
}

function knightMoves(start, end) {
  let list = [];

  let [x, y] = start;

  let [x1, y1] = end;

  return getAllPossibleMoves(x, y);
}

let list = knightMoves([0, 0], [4, 3]);

function doesCoordinatesExist(x, y) {
  for (let i = 0; i < list.length; i++) {
    if (list[i][0] === x && list[i][1] === y) {
      return true;
    }
  }

  return false;
}
