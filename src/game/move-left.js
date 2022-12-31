export default function moveLeft(inputBoard) {
  let board = [];
  let score = 0;
  for (let row = 0; row < inputBoard.length; row++) {
    //each row
    const workingRow = inputBoard[row];
    let temp = workingRow
      .filter((i) => i > 0)
      .concat(0, 0, 0, 0)
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
    board.push(temp1);
  }
  return { board, score };
}
