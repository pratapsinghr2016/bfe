/**
 * @param {Array<(arg: any) => any>} funcs
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
  // your code here
  return (x) => {
    let last = x;
    for (let i = 0; i < funcs.length; i++) {
      let func = funcs[i];
      last = func(last);
    }
    return last;
  };
}
