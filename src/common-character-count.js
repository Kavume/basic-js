const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {

  let minLength = Math.min(s1.length, s2.length);

  let maxArr = [];
  let minArr = [];

  let count = 0;

  if (s1.length === minLength) {
    maxArr = [...s2];
    minArr = [...s1];
  } else {
    maxArr = [...s1];
    minArr = [...s2];
  }

  for (let i=0; i < minLength; i++){
    if (maxArr.includes(minArr[i])) {
      count++;
      maxArr.splice(maxArr.indexOf(minArr[i]), 1);
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
