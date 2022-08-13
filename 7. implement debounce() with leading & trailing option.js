// This is a JavaScript coding problem from BFE.dev

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait, option = { leading: false, trailing: true }) {
  // your code here

  if (!option.leading && !option.trailing) {
    return () => {};
  }

  let lastArgs = null;
  let timer = null;

  return function (...args) {
    if (!timer && option.leading) {
      func.apply(this, args);
    } else {
      lastArgs = args;
    }

    clearTimeout(timer);

    timer = setTimeout(() => {
      if (option.trailing && lastArgs) {
        func.apply(this, lastArgs);
      }
      lastArgs = null;
      timer = null;
    }, wait);
  };
}
