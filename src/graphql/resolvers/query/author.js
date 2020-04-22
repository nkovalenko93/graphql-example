'use strict';

const {getAuthors} = require('../../../storage');

const authorsResolver = () => getAuthors();

const authorResolver = () => getAuthors()[0];


module.exports = {
    getAuthors: authorsResolver,
    getAuthor: authorResolver
};
