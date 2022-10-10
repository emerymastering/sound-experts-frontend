import { apiUrl } from "../../config/constants";
import axios from "axios";
import { startLoadingJobs, jobsFullyFetched, doneLoadingJobs } from "./slice";

export const fetchJobs = () => async (dispatch, getState) => {
  try {
    dispatch(startLoadingJobs());

    const response = await axios.get(`${apiUrl}/jobs`);

    console.log("response", response);

    dispatch(jobsFullyFetched({ jobs: response.data.jobs }));

    dispatch(doneLoadingJobs());
  } catch (e) {
    console.log(e.message);
  }
};
