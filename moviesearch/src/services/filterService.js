export const filterData = ({ data, filters }) => {
  if (!data || !data.results || !filters || !Array.isArray(data.results))
    return data;

  let results = data.results;

  if (
    filters.category !== "null" &&
    Number.isInteger(filters.category) &&
    filters.category > 0
  ) {
    results = results.filter((m) => m.genre_ids.includes(filters.category));
  }

  if (
    filters.minYear !== "null" &&
    Number.isInteger(filters.minYear) &&
    filters.minYear > 0
  ) {
    results = results.filter((m) => {
      const releaseYear = new Date(m.release_date).getFullYear();
      return releaseYear >= filters.minYear;
    });
  }

  if (
    filters.maxYear !== "null" &&
    Number.isInteger(filters.maxYear) &&
    filters.maxYear > 0
  ) {
    results = results.filter((m) => {
      const releaseYear = new Date(m.release_date).getFullYear();
      return releaseYear <= filters.maxYear;
    });
  }

  console.log(data, filters, results);

  return { ...data, results };
};
