const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n) {

  let str = n.toString();
  let arr = str.split("");

  let newArr = [];

  for ( let i = 0; i < arr.length; i++ ) {

    let returnNum = arr.splice(i, 1)

    newArr.push([...arr]);

    arr.splice(i, 0, returnNum.join(""));
  }

  let result = newArr.map( item => Number(item.join("")) ).sort((a, b) => a - b );

  return result[result.length-1]
}

module.exports = {
  deleteDigit
};
