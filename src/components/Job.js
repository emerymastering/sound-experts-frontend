import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Job({ job }) {
  const { description, budget, deadline, user, genre, specialisation } = job;

  return (
    <div
      className="flex bg-teal-500 hover:bg-teal-400 text-white font-bold py-6 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded min-h-full "
      style={{ color: "white" }}
    >
      <img style={{ height: 100 }} src={user.image_URL} alt="user" />

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
      </div>
    </div>
  );
}
