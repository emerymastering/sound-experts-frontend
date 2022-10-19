import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Specialisation(props) {
  return (
    <div
      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-10 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded min-h-full "
      style={{ color: "white" }}
    >
      <p className="text-center">{props.title}s</p>
    </div>
  );
}
