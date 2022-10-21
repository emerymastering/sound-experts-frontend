import React from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { DateTime } from "luxon";
import { acceptProposal } from "../store/jobs/thunks";

export default function Proposal({ proposal }) {
  const date = DateTime.fromISO(proposal.createdAt).toLocaleString();
  const dispatch = useDispatch();
  const oneProposal = proposal.job.user;

  // const navigate = useNavigate();
  if (!oneProposal) return null;
  return (
    <div className="flex-col px-2 bg-sky-700 rounded">
      Proposal sent on {date}
      <div
        className="flex bg-sky-800 hover:bg-sky-900 text-white font-bold py-4 px-4 border-b-4 border-sky-300 hover:border-sky-100 rounded"
        style={{ color: "white" }}
      >
        <img
          style={{ height: 100, width: 100 }}
          src={oneProposal.image_URL}
          alt="user"
        />
        <div className="flex pl-4 w-full">
          <div className="w-1/2 mr-8">
            Proposal for {oneProposal.first_name} {oneProposal.second_name}
            <br />
            Delivering job on:
            <br /> {proposal.delivery_date}
          </div>
          <div className="w-1/2 pl-2 mr-8">
            {proposal.message} <br />
            And my asking price is: {proposal.price}€
          </div>
          <div className="w-1/3 pl-8">
            {!proposal.accepted ? (
              <div className="text-yellow-300" type="text">
                Proposal Sent
              </div>
            ) : (
              <div className="text-green-500" type="text">
                Proposal Accepted
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
