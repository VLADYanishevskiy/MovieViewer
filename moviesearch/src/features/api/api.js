import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiKeys } from "../../configs/ApiKeys";

const baseQuery = fetchBaseQuery({
  baseUrl: "/",
  prepareHeaders: (headers) => {
    headers.set("Authorization", `Bearer ${ApiKeys.Token}`);
    headers.set("X-Custom-Header", "your-custom-header-value");
    headers.set("accept", "application/json");
    return headers;
  },
});

const baseQueryWithLogging = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithLogging,
  endpoints: (builder) => ({
    searchByName: builder.query({
      query: ({ query, page }) => {
        return {
          url: "/3/search/movie",
          params: {
            query,
            include_adult: true,
            language: "en-US",
            page: page ? page : 1,
          },
        };
      },
    }),
    searchByFilters: builder.query({
      query: ({ filters }) => {
        return {
          url: "/3/search/movie",
          params: { filters },
        };
      },
    }),
    fetchCategories: builder.query({
      query: () => ({
        url: "/3/genre/movie/list",
        params: { language: "en" },
      }),
    }),
  }),
});

export const { useSearchByNameQuery, useSearchByFiltersQuery } = api;
export default api.reducer;
