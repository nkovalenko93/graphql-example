'use strict';

const typeDefs = require('./types');
const resolvers = require('./resolvers');

const init = () => ({typeDefs, resolvers});

module.exports = {init};
