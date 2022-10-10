import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  loading: true,
  jobs: [],
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    startLoadingJobs: (state) => {
      state.loading = true;
    },
    jobsFullyFetched: (state, action) => {
      console.log("action", action);
      state.jobs = action.payload.jobs;
    },
    doneLoadingJobs: (state) => {
      state.loading = false;
    },
  },
});

export const { startLoadingJobs, jobsFullyFetched, doneLoadingJobs } =
  jobsSlice.actions;

export default jobsSlice.reducer;
