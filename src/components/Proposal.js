import React from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DateTime } from "luxon";

export default function Proposal({ proposal }) {
  const date = DateTime.fromISO(proposal.createdAt).toLocaleString();
  return (
    <div className="flex  bg-blue-500">
      Proposal
      <br />
      Posted {date}
      <div
        className="flex bg-blue-500 hover:bg-blue-400 text-white font-bold py-6 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded min-h-full"
        style={{ color: "white" }}
      >
        <img
          style={{ height: 100, width: 100 }}
          src={proposal.user_expert.user.image_URL}
          alt="user"
        />
        <div className="flex pl-4">
          <div className="min-w-20 w-80">
            Hello, I am {proposal.user_expert.user.first_name}
            <p>I am a:</p>
            <ul>
              {proposal.user_expert.specialisations.map((spec) => (
                <li>{spec.title}</li>
              ))}
            </ul>
          </div>
          <div>{proposal.message}</div>
          <div>And my asking price is {proposal.price}€</div>
        </div>
      </div>
    </div>
  );
}
