import { Title } from "../styled";
import { Link } from "react-router-dom";
import { LinkWord } from "../styled";
import styled from "styled-components";

export const Homepage = () => {
  return (
    <div className="p-20 pb-80 pl-80 pr-80 ml-100 mr-100 bg-[url('https://media-rd.s3.amazonaws.com/embedded_image/2017/03/soundwaves.jpg')] bg-center bg-cover">
      <h1 className="flex place-content-center text-3xl  p-10 text-gray-900 dark:text-blue-300 pb-10 text-center">
        Welcome to SoundExperts
      </h1>
      <p className="flex place-content-center text-xl  p-10 text-gray-900 dark:text-blue-300 pt-10 pb-10 text-center bg-black bg-opacity-70 rounded-full">
        Here you can find the best experts in sound and music. Experienced
        Singers, Musicians, Producers, Mixing and Mastering Engineers will help
        you to take your production to the next level!
      </p>
      <div className="flex p-10">
        <div className="flex-auto w-1/2 p-10">
          <Link to={"/experts"}>
            <button
              className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-20 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded-full w-full h-full"
              style={{ color: "white" }}
            >
              I am a customer and I look for a professional help for my project.
              <br /> <br />
              Click here to browse though the list of our Experts.
            </button>
          </Link>
        </div>
        <div className="flex-auto w-1/2 p-10">
          <Link to={"/jobs"}>
            <button
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-20 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full w-full h-full"
              style={{ color: "white" }}
            >
              I am an expert and I want to offer my services.
              <br /> <br />
              Click here to see and apply to current jobs.
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
