/**
 *
 * */
function add(...args) {
  function recSum(num) {
    return add(...args, num)
  }
  recSum.valueOf = function() {
    return args.reduce((acc, n)=> acc + n, 0)
  };
  return recSum;
}

export {add};
