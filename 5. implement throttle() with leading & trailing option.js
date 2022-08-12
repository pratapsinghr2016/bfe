

// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function throttle(func, wait, option = {leading: true, trailing: true}) {
  // your code here
  if(!option.leading && !option.trailing)
  return ()=>{}

  let lastArgs = null;
  let lastContext = null;
  let timer = null;

  return function(...args){

    if(timer){
      lastArgs = args;
      lastContext = this;
      return
    }else{
      if(option.leading){
        func.apply(this, args)
      }
    }

    const timeup = ()=>{

      if(option.trailing && lastArgs){
        func.apply(lastContext, lastArgs);
        lastArgs = null;
        lastContext = null;
        timer = setTimeout(timeup, wait)
      }else{
        timer = null;
      }

    }

    timer = setTimeout(timeup, wait)

  }
}



