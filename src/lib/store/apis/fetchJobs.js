import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const jobsApi = createApi({
  reducerPath: "jobs",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.weekday.technology/adhoc/",
    prepareHeaders: async (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      fetchJobs: builder.mutation({
        query: (body) => {
          return {
            method: "POST",
            url: "getSampleJdJSON",
            body,
            serializeQueryArgs: ({ endpointName }) => {
              return endpointName;
            },
            merge: (currentCache, newItems) => {
              currentCache.results.push(...newItems.results);
            },
            // Refetch when the page arg changes
            forceRefetch({ currentArg, previousArg }) {
              return currentArg !== previousArg;
            },
          };
        },
      }),
    };
  },
});

export const { useFetchJobsMutation } = jobsApi;
export { jobsApi };
