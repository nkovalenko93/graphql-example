'use strict';

const {createBook} = require('./../../../storage');

module.exports = {
    createBook: (parent, {input}) => createBook(input)
};
