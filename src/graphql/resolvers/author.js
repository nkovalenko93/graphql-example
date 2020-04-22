'use strict';

const {getBooks} = require('../../storage');

module.exports = {
    books: author => getBooks().filter(book => (book.authorId === author.id))
};
