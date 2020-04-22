'use strict';

require('graphql-import-node/register');
const {mergeTypes} = require('merge-graphql-schemas');

const queryType = require('./query.graphql');
const mutationType = require('./mutation.graphql');
const inputType = require('./input.graphql');
const countryType = require('./country.graphql');
const languageType = require('./language.graphql');
const authorType = require('./author.graphql');
const libraryType = require('./library.graphql');
const bookType = require('./book.graphql');

module.exports = mergeTypes(
    [countryType, languageType, authorType, libraryType, bookType, inputType, queryType, mutationType],
    {all: true}
);
