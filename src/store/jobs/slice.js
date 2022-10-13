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
    JobPostSuccess: (state, action) => {
      state.jobs.push(action.payload);
    },
  },
});

export const {
  startLoadingJobs,
  jobsFullyFetched,
  doneLoadingJobs,
  JobPostSuccess,
} = jobsSlice.actions;

export default jobsSlice.reducer;
