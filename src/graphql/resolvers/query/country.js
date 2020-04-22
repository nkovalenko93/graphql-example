'use strict';

const {getCountries} = require('../../../storage');

const countriesResolver = () => getCountries();

const countryResolver = () => getCountries()[0];

module.exports = {
    getCountries: countriesResolver,
    getCountry: countryResolver
};
