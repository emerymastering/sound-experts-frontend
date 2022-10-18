import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import specialisationReducer from "./experts/slice";
import jobReducer from "./jobs/slice";
import proposalReducer from "./proposals/slice";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    specialisation: specialisationReducer,
    jobs: jobReducer,
    proposals: proposalReducer,
  },
});
