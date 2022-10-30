import React from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { DateTime } from "luxon";
import { acceptProposal } from "../store/jobs/thunks";

export default function Proposal({ proposal }) {
  const date = DateTime.fromISO(proposal.createdAt).toLocaleString();
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  console.log("propsal!!", proposal);

  return (
    <div className="flex-col px-2 bg-sky-700 rounded">
      Proposal received on {date}
      <div
        className="flex bg-sky-800 hover:bg-sky-900 text-white font-bold py-6 px-4 border-b-4 border-sky-300 hover:border-sky-100 rounded min-h-full"
        style={{ color: "white" }}
      >
        <img
          style={{ height: 100, width: 100 }}
          src={proposal.user_expert?.user.image_URL}
          alt="user"
        />
        <div className="flex pl-4 w-full">
          <div className="w-1/3 mr-8">
            Hello, I am {proposal.user_expert?.user.first_name}
            <p>I am a:</p>
            <ul>
              {proposal.user_expert.specialisations.map((spec) => (
                <li key={spec.id}>{spec.title}</li>
              ))}
            </ul>
          </div>
          <div className="w-1/3 pl-2 mr-8 m-auto">
            {proposal.message} <br />
            And my asking price is {proposal.price}€
          </div>
          <div className="w-1/3 pl-8">
            {!proposal.accepted ? (
              <button
                type="submit"
                className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => {
                  dispatch(acceptProposal(proposal.id));
                  // navigate("/myaccount");
                }}
              >
                Accept proposal
              </button>
            ) : (
              "Accepted"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
