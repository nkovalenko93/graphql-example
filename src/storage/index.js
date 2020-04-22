'use strict';

const countries = require('./countries');
const languages = require('./languages');
const authors = require('./authors');
const books = require('./books');
const libraries = require('./libraries');


const getCountries = () => countries;
const getLanguages = () => languages;
const getAuthors = () => authors;
const getLibraries = () => libraries;
const getBooks = () => books;

const createBook = params => {
    const book = {
        ...params,
        id: books[books.length - 1].id + 1, // incremented id of last book
        authorId: params.authorId || (params.author && params.author.id),
        author: undefined,
        countryId: params.countryId || (params.country && params.country.id),
        country: undefined,
        languageId: params.languageId || (params.language && params.language.id),
        language: undefined,
        libraryId: params.libraryId || (params.library && params.library.id),
        library: undefined
    };
    books.push(book);
    return book;
};

module.exports = {
    getCountries,
    getLanguages,
    getAuthors,
    getLibraries,
    getBooks,
    createBook
};
