import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectToken } from "../store/user/selectors";
import axios from "axios";
import { apiUrl } from "../config/constants";
import { jobForm } from "../store/jobs/thunks";

export const JobForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [budget, setBudget] = useState("");
  const [description, setDescription] = useState("");
  const [remote, setRemote] = useState(true);
  const [deadline, setDeadline] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [genreId, setGenreId] = useState("");
  const [genres, setGenres] = useState(null);
  const [specialisationId, setSpecialisationId] = useState("");
  const [specialisations, setSpecialisations] = useState(null);

  const token = useSelector(selectToken);

  const fetchSpecialisations = async () => {
    try {
      const response = await axios.get(`${apiUrl}/jobs/specialisations`);
      setSpecialisations(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchSpecialisations();
  }, []);

  const fetchGenres = async () => {
    try {
      const response = await axios.get(`${apiUrl}/jobs/genres`);
      setGenres(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (!token) navigate("/login");
  }, [token, navigate]);

  useEffect(() => {
    fetchGenres();
  }, []);

  const submitJob = (e) => {
    e.preventDefault();
    dispatch(
      jobForm(description, budget, specialisationId, deadline, genreId, remote)
    );
    navigate("/jobs");
  };

  return (
    <form
      onSubmit={submitJob}
      className="h-screen bg-[url('../public/images/studio.jpg')] bg-center pt-40
    "
    >
      <div className="flex-col p-10 max-w-3xl m-auto bg-black bg-opacity-70 rounded-lg">
        <h1 className="block text-2xl font-medium text-gray-900 dark:text-blue-300 pb-10  text-center">
          Create a new job post below
        </h1>
        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-300"
          >
            Job description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-50 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-clip-content hover:bg-clip-padding"
            placeholder="What is your job about? (short description)"
            required
          />
        </div>
        <div className="flex">
          <div className="w-full md:w-1/2 pr-3">
            <label
              htmlFor="small"
              className="block mb-2 pt-2 text-sm font-medium text-gray-900 dark:text-blue-300 "
            >
              Choose a specialisation
            </label>
            <select
              id="small"
              className="block p-2  w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-clip-content hover:bg-clip-padding"
              defaultValue="choose"
              onChange={(e) => setSpecialisationId(e.target.value)}
            >
              <option value="choose">I am looking to hire a...</option>
              {specialisations ? (
                specialisations.map((s) => (
                  <option value={s.id} key={s.id}>
                    {s.title}
                  </option>
                ))
              ) : (
                <></>
              )}
            </select>
          </div>
          <div className="w-full md:w-1/2 pl-3">
            <label
              htmlFor="small"
              className="block mb-2 pt-2 text-sm font-medium text-gray-900 dark:text-blue-300 "
            >
              Select a style of music
            </label>
            <select
              id="small"
              className="block p-2 mb-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-clip-content hover:bg-clip-padding"
              defaultValue="choose"
              onChange={(e) => setGenreId(e.target.value)}
            >
              <option value="choose">My project is in genre...</option>
              {genres ? (
                genres.map((g) => (
                  <option value={g.id} key={g.id}>
                    {g.title}
                  </option>
                ))
              ) : (
                <></>
              )}
            </select>
          </div>
        </div>
        <div className="flex">
          <div className="w-full md:w-1/2 pr-3">
            <label
              htmlFor="Budget"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-300 "
            >
              Approx. budget in EUR
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
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-300 "
            >
              Deadline
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
        <div className="pt-3">
          <label
            htmlFor="remote"
            className="inline-flex relative items-center cursor-pointer text-white"
          >
            <input
              type="checkbox"
              value=""
              id="remote"
              className="sr-only peer"
              checked={remote}
              onChange={() => setRemote(!remote)}
              // required
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-transparent peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              {remote ? "Remote Job" : "On-site Job"}
            </span>
          </label>
        </div>
        <div className="mb-6 pt-1">
          <label
            htmlFor="reference"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-300  "
          >
            Reference Song URL
          </label>
          <input
            type="url"
            id="reference"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-50 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-clip-content hover:bg-clip-padding"
            placeholder="URL to Spotify or YouTube"
            // required
          />
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
        </div>
        <button
          type="submit"
          className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
