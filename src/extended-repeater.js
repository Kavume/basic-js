const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options) {

  if ( str === null) str = "null";
  if ( str === true) str = "true";
  if ( str === false) str = "false";

  let count = options["repeatTimes"];
  if( !count ) count = 1;


  let separator = options["separator"];
  if ( separator === undefined) separator = "+";



  let addition = options["addition"];

  if ( addition === null) addition = "null";
  if ( addition === true) addition = "true";
  if ( addition === false) addition = "false";


  let additionRepeatTimes = options["additionRepeatTimes"];
  if( !additionRepeatTimes ) additionRepeatTimes =1;


  let additionSeparator = options["additionSeparator"];
  if ( additionSeparator === undefined )  additionSeparator = "|";


  let newStr = [];

    for( let i = 0; i < additionRepeatTimes; i++) {
      newStr.push( addition, additionSeparator )
    }

  let resultAdd = newStr.splice( newStr.length-1, 1)
  addition = newStr.join("");


  let arr = [];

  for( let i = 0; i < count; i++) {
    arr.push(str, addition, separator)
  }

  let result = arr.splice( arr.length-1, 1)

  return arr.join("");
}

module.exports = {
  repeater
};
