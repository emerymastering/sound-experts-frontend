import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import specialisationReducer from "./experts/slice";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    specialisation: specialisationReducer,
  },
});
