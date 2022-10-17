import React from "react";
import { deleteJob } from "../store/jobs/thunks";
import { applyToJob } from "../store/jobs/thunks";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Job({ id, job, deleteEnabled, applyEnable }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { description, budget, deadline, user, genre, specialisation } = job;

  const removeJob = (id) => {
    dispatch(deleteJob(id));
  };
  const applyJob = (id) => {
    navigate(`/jobapply/${id}`);
    // dispatch(applyToJob(id));
  };

  if (!job) return null;
  return (
    <div
      className="flex bg-blue-500 hover:bg-blue-400 text-white font-bold py-6 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded min-h-full "
      style={{ color: "white" }}
    >
      <img
        style={{ height: 100, width: 100 }}
        src={user.image_URL}
        alt="user"
      />

      <div className="flex pl-4">
        <div className="min-w-20 w-100">
          <p>Hi, I am {user.first_name}</p>
          <p>I am looking for {specialisation.title}</p>
          <p>{description}</p>
          <p>The genre is {genre.title}</p>
        </div>
        <div className="pl-4">
          <p>My Budget is {budget} €</p>
          <p>Deadline: {deadline}</p>
        </div>
        <div>
          {deleteEnabled ? (
            <button
              className="bg-green-500 hover:bg-green-700 font-bold py-2 px-4 ml-2 rounded"
              onClick={() => removeJob(id)}
            >
              Delete
            </button>
          ) : null}
          {applyEnable ? (
            <button
              className="bg-green-500 hover:bg-green-700 font-bold py-2 px-4 ml-2 rounded"
              onClick={() => applyJob(id)}
            >
              Apply
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
