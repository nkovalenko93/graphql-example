'use strict';

const {getLanguages} = require('../../../storage');

const languagesResolver = () => getLanguages();

const languageResolver = () => getLanguages()[0];

module.exports = {
    getLanguages: languagesResolver,
    getLanguage: languageResolver
};
