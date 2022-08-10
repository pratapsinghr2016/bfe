// This is a JavaScript coding problem from BFE.dev
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
let count = 1;
function flat(arr, depth = 1) {
  // your imeplementation here

  let result = [];

  if (depth === Infinity) {
    result = arr.reduce((acc, curr) => {
      if (typeof curr === "object") {
        const x = flat(curr, Infinity);
        acc = [...acc, ...x];
      } else {
        acc = [...acc, curr];
      }
      return acc;
    }, []);
  } else {
    result = arr.reduce((acc, curr) => {
      if (typeof curr === "object") {
        acc = [...acc, ...curr];
      } else {
        acc = [...acc, curr];
      }
      return acc;
    }, []);

    if (count < depth) {
      count += 1;
      return flat(result, depth - 1);
    }
  }
  return result;
}

const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// flat(arr)
console.log(flat(arr, Infinity));
