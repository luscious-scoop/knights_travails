function getPath(move) {
  let str = `You made it in ${move.distance} moves! Here's your path:
  `;

  let array = [];

  while (move !== null) {
    array.push(move.vertex);
    move = move.pre;
  }
  array.reverse().forEach((el) => {
    str += ` [${el}]
  `;
  });
  return str;
}

function getAllPossibleMoves(x, y) {
  const moves = [];

  if (x + 1 <= 7 && y + 2 <= 7) {
    moves.push({
      distance: null,
      pre: null,
      vertex: [x + 1, y + 2],
    });
  }

  if (x + 2 <= 7 && y + 1 <= 7) {
    moves.push({
      distance: null,
      pre: null,
      vertex: [x + 2, y + 1],
    });
  }
  if (x - 1 >= 0 && y - 2 >= 0) {
    moves.push({
      distance: null,
      pre: null,
      vertex: [x - 1, y - 2],
    });
  }

  if (x - 2 >= 0 && y - 1 >= 0) {
    moves.push({
      distance: null,
      pre: null,
      vertex: [x - 2, y - 1],
    });
  }

  if (x - 2 >= 0 && y + 1 <= 7) {
    moves.push({
      distance: null,
      pre: null,
      vertex: [x - 2, y + 1],
    });
  }

  if (x + 1 <= 7 && y - 2 >= 0) {
    moves.push({
      distance: null,
      pre: null,
      vertex: [x + 1, y - 2],
    });
  }

  if (x + 2 <= 7 && y - 1 >= 0) {
    moves.push({
      distance: null,
      pre: null,
      vertex: [x + 2, y - 1],
    });
  }

  if (x - 1 >= 0 && y + 2 <= 7) {
    moves.push({
      distance: null,
      pre: null,
      vertex: [x - 1, y + 2],
    });
  }

  return moves;
}

function knightMoves(start, end) {
  const [x1, y1] = end;

  const Q = [];

  Q.push({
    distance: 0,
    pre: null,
    vertex: start,
  });

  while (Q.length > 0) {
    const move = Q.shift();

    if (move.vertex[0] === x1 && move.vertex[1] === y1) {
      return getPath(move);
    }
    Q.push(...getAllPossibleMoves(move.vertex[0], move.vertex[1]));

    for (let i = 0; i < Q.length; i++) {
      if (Q[i].pre === null) {
        Q[i].pre = move;
        Q[i].distance = move.distance + 1;
      }
    }
  }
}

console.log(knightMoves([3, 3], [4, 3]));
