import { Title } from "../styled";
import { Link } from "react-router-dom";
import { LinkWord } from "../styled";
import styled from "styled-components";

export const Homepage = () => {
  return (
    <div className="">
      <h1 className="flex place-content-center text-3xl underline p-10">
        Welcome to SoundExperts
      </h1>
      <p className="flex place-content-center p-10 text-xl">
        Here you can find the best experts in sound and music. Experienced
        Singers, Musicians, Producers, Mixing and Mastering Engineers will help
        you to take your production to the next level!
      </p>
      <div className="flex p-10">
        <div className="flex-auto">
          <button
            className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-20 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded"
            onClick={""}
            style={{ color: "white" }}
          >
            I am a customer and I look for a professional help for my project
          </button>
        </div>
        <div className="flex-auto">
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-20 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={""}
            style={{ color: "white" }}
          >
            I am an expert and I want to offer my services
          </button>
        </div>
      </div>
    </div>
  );
};
