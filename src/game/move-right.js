import * as utils from './utils';
import moveLeft from './move-left';
export default function moveRight(inputBoard) {
  let board = [];
  let score = 0;
  for (let row = 0; row < inputBoard.length; row++) {
    //each row
    const workingRow = inputBoard[row];
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
  console.log('board', board);
  return { board, score };
}
