'use strict';

const {getAuthors, getCountries, getLanguages, getLibraries} = require('../../storage');

module.exports = {
    author: book => getAuthors().find(author => (author.id === book.authorId)),
    country: book => getCountries().find(country => (country.id === book.countryId)),
    language: book => getLanguages().find(language => (language.id === book.languageId)),
    library: book => getLibraries().find(library => (library.id === book.libraryId))
};
