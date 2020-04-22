'use strict';

const {getLibraries} = require('../../../storage');

const librariesResolver = () => getLibraries();

const libraryResolver = () => getLibraries()[0];

module.exports = {
    getLibraries: librariesResolver,
    getLibrary: libraryResolver
};
