function pushCoordinates(list, x, y) {
  list.push([x, y]);
}

function knightMoves(x, y) {
  let list = [];
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

  return list;
}

console.log(knightMoves(7, 7));
