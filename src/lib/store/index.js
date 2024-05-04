import { configureStore } from "@reduxjs/toolkit";
import { jobsApi } from "./apis/fetchJobs";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: { [jobsApi.reducerPath]: jobsApi.reducer },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(jobsApi.middleware);
  },
});
setupListeners(store.dispatch);

export { useFetchJobsMutation } from "./apis/fetchJobs";
