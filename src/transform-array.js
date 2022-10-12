const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform( arr) {


  if ( !(Array.isArray(arr)) ) throw new Error("'arr' parameter must be an instance of the Array!")
  let newArr = arr.slice();

  for ( let i = 0; i < newArr.length; i++) {
    if (newArr[0] === '--discard-prev' || newArr[0] === '--double-prev') {
      newArr.splice(i, 1);
    }if ( newArr[newArr.length-1] === '--double-next' || newArr[newArr.length-1] === '--discard-next' ) {
      newArr.splice(newArr.length-1, 1);
    } else if ( newArr[i] === '--double-next' ) {
      newArr.splice(i, 1, newArr[i+1])
    } else if ( newArr[i] === '--discard-prev' ) {
      newArr.splice(i-1, 2);
    } else if ( newArr[i] === '--double-prev') {
      newArr.splice(i, 1, newArr[i-1])
    } else if ( newArr[i] === '--discard-next' ) {
      newArr.splice(i--, 3);
    }
  }

  return newArr;
}


module.exports = {
  transform
};


