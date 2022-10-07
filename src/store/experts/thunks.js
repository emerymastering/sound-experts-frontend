import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  startLoadingSpecialisations,
  specialisationFullyFetched,
  doneLoadingSpecialisation,
} from "./slice";

export const fetchSpecialisations = () => async (dispatch, getState) => {
  try {
    dispatch(startLoadingSpecialisations());

    const response = await axios.get(`${apiUrl}/users/experts`);

    console.log("response", response);

    dispatch(specialisationFullyFetched({ specialisation: response.data }));

    dispatch(doneLoadingSpecialisation());
  } catch (e) {
    console.log(e.message);
  }
};
