function pushCoordinates(list, x, y) {
  list.push([x, y]);
}

function knightMoves(start, end) {
  let list = [];

  let [x, y] = start;

  let [x1, y1] = end;

  if (x + 1 < 7 && y + 2 < 7) {
    pushCoordinates(list, x + 1, y + 2);
  }

  if (x + 2 < 7 && y + 1 < 7) {
    pushCoordinates(list, x + 2, y + 1);
  }
  if (x - 1 >= 0 && y - 2 >= 0) {
    pushCoordinates(list, x - 1, y - 2);
  }

  if (x - 2 >= 0 && y - 1 >= 0) {
    pushCoordinates(list, x - 2, y - 1);
  }

  if (x - 2 >= 0 && y + 1 < 7) {
    pushCoordinates(list, x - 2, y + 1);
  }

  if (x + 1 < 7 && y - 2 >= 0) {
    pushCoordinates(list, x + 1, y - 2);
  }

  if (x + 2 < 7 && y - 1 >= 0) {
    pushCoordinates(list, x + 2, y - 1);
  }

  if (x - 1 >= 0 && y + 2 < 7) {
    pushCoordinates(list, x - 1, y + 2);
  }

  return list;
}

console.log(knightMoves([3, 3], [4, 3]));

// [1,2], [2,1], [4,1], [5,2], [5,4], [4,5], [2,5], [1,4]
