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
  token,
  proposalsCount,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { description, budget, deadline, user, genre, specialisation } = job;
  console.log("count", proposalsCount);

  const removeJob = (id) => {
    dispatch(deleteJob(id));
  };
  const applyJob = (id) => {
    navigate(`/jobapply/${id}`);
  };

  if (!job) return null;
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
          <p>I am looking for {specialisation.title}</p>
          <p>{description}</p>
          <p>The genre is {genre.title}</p>
        </div>
        <div className="pl-4">
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
              className="bg-green-500 hover:bg-green-700 font-bold py-2 px-4 ml-2 rounded"
              onClick={() => applyJob(id)}
            >
              Apply
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
          <button
            className="bg-stone-400 hover:bg-stone-500 font-bold py-2 px-4 ml-2 rounded"
            onClick={() => navigate(`/jobs/proposals/${id}`)}
          >
            {proposalsCount} props
          </button>
        </div>
      </div>
    </div>
  );
}
