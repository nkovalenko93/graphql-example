'use strict';

const {ApolloServer} = require('apollo-server');
const graphql = require('./graphql');

const graphqlData = graphql.init();
const server = new ApolloServer(graphqlData);

server.listen().then(({url}) => console.info(`Listening ${url}`));
