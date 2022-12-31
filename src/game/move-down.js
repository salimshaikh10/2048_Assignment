import * as utils from './utils';
import moveLeft from './move-left';

export default function moveUp(inputBoard) {
  let board = [];
  let score = 0;
  function transpose(matrix) {
    return matrix.reduce(
      (prev, next) => next.map((item, i) => (prev[i] || []).concat(next[i])),
      []
    );
  }
  let inputBoard1 = transpose(inputBoard);
  for (let row = 0; row < inputBoard1.length; row++) {
    //each row
    const workingRow = inputBoard1[row];
    const temp = [0, 0, 0, 0]
      .concat(workingRow.filter((i) => i > 0))
      .reverse()
      .slice(0, 4);
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] == temp[i + 1]) {
        temp[i] += temp[i + 1];
        temp[i + 1] = 0;
      }
    }
    const temp1 = temp
      .filter((i) => i > 0)
      .concat(0, 0, 0, 0)
      .slice(0, 4);
    board.push(temp1.reverse());
  }
  board = transpose(board);
  return { board, score };
}
