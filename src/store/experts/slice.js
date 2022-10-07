import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  loading: true,
  specialisations: [],
};

const specialisationSlice = createSlice({
  name: "specialisation",
  initialState,
  reducers: {
    startLoadingSpecialisations: (state) => {
      state.loading = true;
    },
    specialisationFullyFetched: (state, action) => {
      console.log("action", action);
      state.specialisations = action.payload.specialisation;
    },
    doneLoadingSpecialisation: (state) => {
      state.loading = false;
    },
  },
});

export const {
  startLoadingSpecialisations,
  specialisationFullyFetched,
  doneLoadingSpecialisation,
} = specialisationSlice.actions;

export default specialisationSlice.reducer;
