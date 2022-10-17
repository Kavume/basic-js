const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {

    arr: [],

    getLength() {

        return this.arr.length;
    },

    addLink(value) {

        if ( !value ) this.value = "null";
        if ( value === true) this.value = "true";
        if ( value === false) this.value = "false";

        this.arr.push( "( " + value + " )" );

        return this;
    },

    removeLink(position) {

        let index = position - 1;

        if ( position < 0 || typeof position !== 'number' || !Number.isInteger(position) || !this.arr[index] ) {

            this.arr = [];
            throw new Error("You can't remove incorrect link!");

        } else {

            this.arr.splice( index, 1);
        }

        return this;
    },

    reverseChain() {

        this.arr.reverse()

        return this;
    },

    finishChain() {

        let result = this.arr.join("~~");
        this.arr = [];

        return result;
    }
};

module.exports = {
    chainMaker
};
