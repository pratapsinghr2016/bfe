/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
function memo(func, resolver) {
  // your code here
  let mapCache = new Map();

  return function (...args) {
    let key = null;
    if (resolver) {
      key = resolver(...args);
    } else {
      key = Array.from(arguments).join("_");
    }
    if (mapCache.has(key)) {
      return mapCache.get(key);
    } else {
      const val = func.apply(this, args);
      mapCache.set(key, val);
      return val;
    }
  };
}
