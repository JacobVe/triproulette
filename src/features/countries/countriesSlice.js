import {COUNTRIES} from './COUNTRIES';

// Export all Countries
export const selectAllCountries = () => {
    return COUNTRIES;
};

// Export random Countries
export const selectRandomCountry = (id) => {
    return COUNTRIES.find((country)=>country.id === parseInt(id));
};


