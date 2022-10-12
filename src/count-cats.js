const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats( matrix ) {
  let arr = matrix.slice();

  let sum = [];

  for( let i = 0; i <arr.length; i++) {

    for( let j = 0; j <arr[i].length; j++) {
      if ( arr[i][j] ===  '^^') {
        sum.push(arr[i][j]);
      }
    }
  }

  return sum.length;
}

module.exports = {
  countCats
};
