'use strict';

const queryResolvers = require('./query');
const mutationResolvers = require('./mutation');
const authorResolvers = require('./author');
const bookResolvers = require('./book');

module.exports = {
    Query: queryResolvers,
    Mutation: mutationResolvers,
    Book: bookResolvers,
    Author: authorResolvers
};
