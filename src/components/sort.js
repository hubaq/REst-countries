 
// Sorting function
export default function sortCountries(countries, criterion, order = 'asc') {
  return countries.sort((a, b) => {
    let valueA, valueB;

    // Extract the values based on the sorting criterion
    switch (criterion) {
      case 'population':
        valueA = a.population;
        valueB = b.population;
        break;
      case 'region':
        valueA = a.region;
        valueB = b.region;
        break;
      case 'area':
        valueA = a.area;
        valueB = b.area;
        break;
      case 'name':
        valueA = a.name.common.toLowerCase();
        valueB = b.name.common.toLowerCase();
        break;
      case 'unMember':
        valueA = a.unMember;
        valueB = b.unMember;
        break;
      case 'independent':
        valueA = a.independent;
        valueB = b.independent;
        break;
      default:
        return 0; // If an invalid criterion is provided, do not change the order
    }

    // Handle different data types (strings, numbers, booleans)
    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return order === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    } else if (typeof valueA === 'boolean' && typeof valueB === 'boolean') {
      return order === 'asc' ? valueA - valueB : valueB - valueA;
    } else {
      return order === 'asc' ? valueA - valueB : valueB - valueA;
    }
  });
}
