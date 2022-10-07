import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Specialisation(props) {
  return (
    <div
      className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-20 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded min-h-full "
      style={{ color: "white" }}
    >
      <p>{props.title}</p>
    </div>
  );
}
