// This is a JavaScript coding problem from BFE.dev

/**
 * @param {any[]} arr
 * @returns {void}
 */
function shuffle(arr) {
  // modify the arr inline to change the order randomly

  for (let i = 0; i < arr.length; i += 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const randomeEl = arr[randomIndex];
    arr[randomIndex] = arr[i];
    arr[i] = randomeEl;
  }
  return arr;
}
