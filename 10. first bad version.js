// This is a JavaScript coding problem from BFE.dev

/*
 type IsBad = (version: number) => boolean
 */

/**
 * @param {IsBad} isBad
 */
function firstBadVersion(isBad) {
  // firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  return (version) => {
    // write your code to return the first bad version
    // if none found, return -1

    let start = 0;
    let end = version;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (isBad(mid)) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return start <= version ? start : -1;
  };
}
