import React from "react";
import { deleteJob } from "../store/jobs/thunks";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BasicModal from "./Modal.js";

export default function Job({
  id,
  job,
  deleteEnabled,
  applyEnable,
  propEnable,
  token,
  proposalsCount,
  isExpert,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { description, budget, deadline, user, genre, specialisation } = job;

  const removeJob = (id) => {
    dispatch(deleteJob(id));
  };
  const applyJob = (id) => {
    navigate(`/jobapply/${id}`);
  };

  if (!job) return <div>No Jobs Found</div>;
  return (
    <div
      className="flex bg-sky-800 hover:bg-sky-900 text-white font-bold py-6 px-4 border-b-4 border-sky-300 hover:border-sky-100 rounded min-h-full"
      style={{ color: "white" }}
    >
      <img
        style={{ height: 100, width: 100 }}
        src={user.image_URL}
        alt="user"
      />

      <div className="flex pl-4">
        <div className="min-w-20 w-80">
          {user.first_name && <p>Hi, I am {user.first_name}</p>}
          <p>I am looking for a {specialisation.title}</p>
          <p>{description}</p>
          <p>The genre is {genre.title}</p>
        </div>
        <div className="pr-5">
          <p>My Budget is {budget} €</p>
          <p>Deadline: {deadline}</p>
        </div>
        <div>
          {deleteEnabled && (
            <>
              <button
                className="bg-green-500 hover:bg-green-700 font-bold py-2 px-4 ml-2 rounded"
                onClick={() => removeJob(id)}
              >
                Delete
              </button>
              <div className="pl-2">
                <BasicModal description={description} />
              </div>
            </>
          )}
          {applyEnable && (
            <button
              className="bg-green-500 hover:bg-green-700 font-bold py-2 px-4 ml-5 pr-8 rounded"
              onClick={() => applyJob(id)}
            >
              Apply
            </button>
          )}
          {!applyEnable && isExpert && (
            <button
              className="bg-green-700 hover:bg-green-800 font-bold py-2 px-4 ml-4 rounded"
              // onClick={() => applyJob(id)}
            >
              Applied
            </button>
          )}
          {!token && (
            <button
              className="bg-sky-500 hover:bg-sky-700 font-bold py-2 px-4 ml-2 rounded"
              onClick={() => navigate("/login")}
            >
              Login to Apply
            </button>
          )}
          {!token && (
            <p className="pl-2 pt-2">
              {proposalsCount} {proposalsCount === 1 ? "proposal" : "proposals"}
            </p>
          )}
          {isExpert && (
            <p className="pl-4 pt-2">
              {proposalsCount} {proposalsCount === 1 ? "proposal" : "proposals"}
            </p>
          )}
          {propEnable && (
            <button
              className="bg-stone-400 hover:bg-stone-500 font-bold py-2 px-4 ml-2 rounded max-w-full"
              onClick={() => navigate(`/jobs/proposals/${id}`)}
            >
              {proposalsCount} {proposalsCount === 1 ? "prop" : "props"}
            </button>
          )}
          {!propEnable && token && !isExpert && (
            <div className="pl-6">
              {proposalsCount} {proposalsCount === 1 ? "prop" : "props"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
