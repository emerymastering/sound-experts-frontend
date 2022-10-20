import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  loading: true,
  proposals: [],
};

const proposalsSlice = createSlice({
  name: "proposals",
  initialState,
  reducers: {
    startLoadingProposals: (state) => {
      state.loading = true;
    },
    proposalsFullyFetched: (state, action) => {
      state.proposals = action.payload.proposals;
    },
    doneLoadingProposals: (state) => {
      state.loading = false;
    },
  },
});

export const {
  startLoadingProposals,
  proposalsFullyFetched,
  doneLoadingProposals,
} = proposalsSlice.actions;

export default proposalsSlice.reducer;
