import { apiUrl } from "../../config/constants";
import axios from "axios";
import { startLoadingJobs, jobsFullyFetched, doneLoadingJobs } from "./slice";

import { selectToken } from "../user/selectors";

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

export const fetchUserJobs = () => async (dispatch, getState) => {
  try {
    dispatch(startLoadingJobs());

    const token = selectToken(getState());
    if (token === null) return;

    const response = await axios.get(`${apiUrl}/jobs/user`, {
      // params: { id },
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log("response", response);

    dispatch(jobsFullyFetched({ jobs: response.data.jobs }));

    dispatch(doneLoadingJobs());
  } catch (e) {
    console.log(e.message);
  }
};

export const deleteJob = (id) => async (dispatch, getState) => {
  try {
    const token = selectToken(getState());
    // console.log(token, "token");

    // if we have no token, stop
    if (token === null) return;
    await axios.delete(`${apiUrl}/jobs/by/${id}`, {
      // params: { id },
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(fetchUserJobs());
  } catch (e) {
    console.log(e.message);
  }
};

// Create job
export const jobForm = (
  description,
  budget,
  specialisationId,
  deadline,
  genreId,
  remote
) => {
  return async (dispatch, getState) => {
    try {
      const token = selectToken(getState());
      // console.log("token", token);
      if (token === null) return;
      const response = await axios.post(
        `${apiUrl}/jobs`,
        {
          description,
          budget,
          deadline,
          remote,
          specialisation_id: specialisationId,
          genre_id: genreId,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(fetchJobs());
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const applyToJob = (id) => async (dispatch, getState) => {
  try {
    const token = selectToken(getState());
    // console.log(token, "token");

    // if we have no token, stop
    if (token === null) return;
    await axios.post(
      `${apiUrl}/jobs/${id}/apply`,
      { message: "jump,jump,poshol nahuj" },
      {
        // params: { id },
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    dispatch(fetchUserJobs());
  } catch (e) {
    console.log(e.message);
  }
};
