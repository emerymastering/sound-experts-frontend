import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <div className="relative  min-h-screen max-h-screen bg-[url('../public/images/soundwaves.jpg')] bg-center bg-cover bg-no-repeat bg-fixed overflow-hidden">
      <h1 className="flex place-content-center text-3xl  p-10 text-gray-900 dark:text-blue-300 pb-10 text-center">
        Welcome to SoundExperts
      </h1>
      <div className="flex mx-auto text-xl object-scale-down text-gray-900 dark:text-blue-300 pt-4 pb-4 text-center bg-black bg-opacity-70 rounded-full max-w-xl m-auto pl-10 pr-10">
        Here you can find the best experts in sound and music. Experienced
        Singers, Musicians, Producers, Mixing and Mastering Engineers will help
        you to take your production to the next level!
      </div>
      <div className="flex lg:flex-nowrap sm:flex-wrap p-10 fixed top-60 left-10 right-10 bottom-40">
        <div className="flex-auto w-1/2 p-20 pt-20 mb-20 ml-4 mr-12">
          <Link to={"/experts"}>
            <button
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-20 px-4 border-b-4 border-gray-400 hover:border-gray-200 rounded-l-full w-full h-full text-xl opacity-95"
              style={{ color: "white" }}
            >
              I am a customer and I look for a professional help for my project.
              <br /> <br />
              Click here to browse though the list of our Experts.
            </button>
          </Link>
        </div>
        <div className="flex-auto w-1/2 p-20 pt-20 mb-20 mr-4 ml-12">
          <Link to={"/jobs"}>
            <button
              className="bg-teal-700 hover:bg-teal-600 text-white font-bold py-20 px-4 border-b-4 border-teal-200 hover:border-teal-100 rounded-r-full w-full h-full text-xl opacity-95"
              style={{ color: "white" }}
            >
              I am an expert and I want to offer my services.
              <br /> <br />
              Click here to see and apply for current jobs.
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
