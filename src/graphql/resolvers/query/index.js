'use strict';

const countryResolvers = require('./country');
const languageResolvers = require('./language');
const authorResolvers = require('./author');
const libraryResolvers = require('./library');
const bookResolvers = require('./book');

module.exports = {
    ...countryResolvers,
    ...languageResolvers,
    ...authorResolvers,
    ...libraryResolvers,
    ...bookResolvers
};
