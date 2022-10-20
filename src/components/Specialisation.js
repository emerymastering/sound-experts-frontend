import React from "react";

export default function Specialisation(props) {
  return (
    <div
      className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-10 px-4 border-b-4 border-white hover:border-yellow-200 rounded min-h-full "
      style={{ color: "white" }}
    >
      <p className="text-center text-gray-600">{props.title}s</p>
    </div>
  );
}
