'use strict';

const lodash = require('lodash');
const {getBooks} = require('../../../storage');

const booksResolver = (parent, filters) => lodash.filter(getBooks(), filters);

const bookResolver = (parent, {id}) => getBooks().find(book => (book.id === id));

module.exports = {
    getBooks: booksResolver,
    getBook: bookResolver
};
