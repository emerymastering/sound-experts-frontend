import { useDispatch, useStore, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { applyToJob } from "../store/jobs/thunks";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../config/constants";
import { selectToken } from "../store/user/selectors";

export const JobApply = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const store = useStore();
  const token = useSelector(selectToken);
  const [jobApplication, setJobApplication] = useState(null);
  const [message, setMessage] = useState("");
  const [budget, setBudget] = useState(null);
  const [deadline, setDeadline] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const fetchOneJob = async () => {
    try {
      const token = selectToken(store.getState());
      // console.log("tekonas yra?", token);
      const response = await axios.get(`${apiUrl}/jobs/by/${params.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJobApplication(response.data);
      setBudget(response.data.job.budget);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (!token) navigate("/login");
  }, [token, navigate]);

  useEffect(() => {
    fetchOneJob();
  }, [params.id]);

  const submitApplication = (e) => {
    e.preventDefault();
    dispatch(applyToJob(params.id, message, budget, deadline));
    //   jobForm(description, budget, specialisationId, deadline, genreId, remote)
    navigate("/jobs");
  };
  // console.log("kas ce", jobApplication.job.first_name);

  if (!jobApplication) return null;

  return (
    <form
      onSubmit={submitApplication}
      className="h-screen bg-[url('../public/images/studio.jpg')] bg-center bg-cover pl-40 pr-40 pt-20
    "
    >
      <div className="flex-col gap-6 p-10 pb-40 max-w-2xl mx-auto bg-black bg-opacity-70 w-auto ">
        <h1 className="block text-2xl font-medium text-gray-900 dark:text-blue-300 pt-10 pb-0 text-center">
          Fill the fields below to send a job proposal
        </h1>
        <div>
          <div className="block text-2xl font-medium text-gray-900 dark:text-blue-300 pt-10 pb-10 text-center">
            {jobApplication.job.user.first_name}{" "}
            {jobApplication.job.user.second_name} says: <br />
            <br />
            {jobApplication.job.description}
            <br />I have a budget of {jobApplication.job.budget} €
          </div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-300"
          >
            Message to client
          </label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-50 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-clip-content hover:bg-clip-padding"
            placeholder="What will you deliver?"
            required
          />
        </div>

        <div className="flex">
          <div className="w-full md:w-1/2 pr-3">
            <label
              htmlFor="Budget"
              className="block mb-2  pt-2 text-sm font-medium text-gray-900 dark:text-blue-300 "
            >
              Your fee in EUR
            </label>
            <input
              type="integer"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              id="budget"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-50 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-clip-content hover:bg-clip-padding"
              placeholder="Enter an amount"
              required
            />
          </div>
          <div className="w-full md:w-1/2 pl-3">
            <label
              htmlFor="deadline"
              className="block mb-2 pt-2 text-sm font-medium text-gray-900 dark:text-blue-300 "
            >
              When can you deliver?
            </label>
            <input
              type="date"
              value={deadline}
              id="deadline"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-50 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-clip-content hover:bg-clip-padding "
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>
        </div>
        <div className="items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-transparent dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            required
          />

          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
            .
          </label>
          <button
            type="submit"
            className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
