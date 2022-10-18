import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  startLoadingProposals,
  proposalsFullyFetched,
  doneLoadingProposals,
} from "./slice";

import { selectToken } from "../user/selectors";

export const fetchProposals = () => async (dispatch, getState) => {
  try {
    dispatch(startLoadingProposals());

    const token = selectToken(getState());
    if (token === null) return;
    const response = await axios.get(`${apiUrl}/jobs/proposals/${1}`, {
      // params: { id },
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log("proposal response", response);

    dispatch(proposalsFullyFetched({ proposals: response.data.proposals }));

    dispatch(doneLoadingProposals());
  } catch (e) {
    console.log(e.message);
  }
};
