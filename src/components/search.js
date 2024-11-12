export default function searchCountries(countries, query) {
  // Normalize query to lowercase for case-insensitive matching
  const lowerCaseQuery = query.toLowerCase();

  // Filter countries array
  return countries.filter(country =>
    country.name.common.toLowerCase().includes(lowerCaseQuery) ||
    country.region.toLowerCase().includes(lowerCaseQuery) 
  );
}


