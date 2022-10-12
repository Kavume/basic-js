const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  let newArr = [];

  for (let i = 0; i < str.length; i++) {
    let sum = 1;

    while ( i < (str.length - 1) && str[i] === str[i+1] ) {
      sum++;
      i++;
    }
    newArr.push(sum, str[i]);
  }

  let result = [];

  for ( let j = 0; j < newArr.length; j++ ) {
    result.push( newArr.slice(j, j += 2) );
    j--;
  }

  let answer = result.map( i => i.filter( item => item !== 1))

  return answer.join("").split(",").join("");
}

module.exports = {
  encodeLine
};
