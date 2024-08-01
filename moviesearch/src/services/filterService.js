export const filterData = ({ data, filters }) => {
  if (!data || !data.results || !filters || !Array.isArray(data.results))
    return data;

  let results = data.results;

  if (filters.category !== "null" && Number.isInteger(filters.category))
    results = results.filter((m) => m.genre_ids.includes(filters.category));

  return { ...data, results };
};
