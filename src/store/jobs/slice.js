import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  loading: true,
  jobs: [],
  proposals: [],
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
    proposalsFullyFetched: (state, action) => {
      console.log("action", action);
      state.proposals = action.payload.proposals;
    },
  },
});

export const {
  startLoadingJobs,
  jobsFullyFetched,
  doneLoadingJobs,
  proposalsFullyFetched,
} = jobsSlice.actions;

export default jobsSlice.reducer;
