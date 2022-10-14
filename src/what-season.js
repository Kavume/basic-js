const {NotImplementedError} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {

    if (isNaN(date)) return 'Unable to determine the time of year!';

    // if ( !(date instanceof Date) || (Object.prototype.toString.call(new Date(date)) !== "[object Date]")  ) throw new Error("Invalid date!");
    // if ( !date.hasOwnProperty() ) throw new Error("Invalid date!");
    // if ( Object.hasOwn(date instanceof Date) )  throw new Error("Invalid date!");
// === 'Invalid Date'

    let month = date.getMonth();
    if (month >= 2 && month < 5) return 'spring';
    else if (month >= 5 && month < 8) return 'summer';
    else if (month >= 8 && month < 11) return 'fall';
    else return 'winter';

}

module.exports = {
    getSeason
};
