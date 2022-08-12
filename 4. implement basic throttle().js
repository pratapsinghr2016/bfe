// This is a JavaScript coding problem from BFE.dev

/**
 * @param {(...args:any[]) => any} func
 * @param {number} wait
 * @returns {(...args:any[]) => any}
 */
function throttle(func, wait) {
  // your code here
  let flag = true;
  let lastArgs = null;

  return function (...args) {
    if (flag) {
      func.apply(this, args);
      flag = false;
      setTimeout(() => {
        flag = true;
        if (lastArgs) {
          func.apply(this, lastArgs);
          lastArgs = null;
        }
      }, wait);
    } else {
      lastArgs = args;
    }
  };
}
