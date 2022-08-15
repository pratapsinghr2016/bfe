// This is a JavaScript coding problem from BFE.dev

/**
 * @param {string[][]} message
 * @return {string}
 */
function decode(message) {
  // your code here

  let row = 0;
  let col = 0;
  let str = "";
  let numberOfColumns = message[0]?.length;

  while (col < numberOfColumns) {
    str += message[row][col];

    col++;
    if (!message[row + 1]) {
      row--;
    } else {
      row++;
    }
  }

  return str;
}
