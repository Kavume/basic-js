const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if ( Array.isArray(members) === false ) return false;
    let arr = members.filter(item => typeof item === 'string')
    return arr.map(item => {
        for (let i = 0; i < item.length; i++ ){
            if (item.charAt(i) !== " "){
                return item.charAt(i).toUpperCase();
            } }
    }).sort().join("");
}

module.exports = {
    createDreamTeam
};
