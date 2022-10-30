import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <div className="flex justify-center relative h-screen bg-[url('../public/images/soundwaves.jpg')] bg-center bg-cover bg-fixed">
      <div className="fixed text-3xl m-10 text-gray-900 dark:text-blue-300">
        Welcome to SoundExperts
      </div>
      <div className="fixed text-xl text-gray-900 dark:text-blue-300 pt-4 pb-4 text-center bg-black bg-opacity-70 rounded-full max-w-xl pl-10 pr-10 mt-24">
        Here you can find the best experts in sound and music. Experienced
        Singers, Musicians, Producers, Mixing and Mastering Engineers will help
        you to take your production to the next level!
      </div>
      <div className="flex p-10 top-80 left-20 right-20 fixed lg:mt-10">
        <div className="w-1/2 mr-10">
          <Link to={"/experts"}>
            <div>
              <div
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-20 px-2 pl-8 border-b-4 border-gray-400 hover:border-gray-200 rounded-l-full text-xl md:text-base sm:text-sm opacity-95 sm:py-10 sm:m-auto"
                style={{ color: "white" }}
              >
                <div className="">
                  I look for a professional help for my project
                  <br /> <br />
                  Click here to browse though the list of our Experts
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-1/2 ml-10">
          <Link to={"/jobs"}>
            <div>
              <div
                className="bg-teal-700 hover:bg-teal-600 text-white font-bold py-20 px-2 lg:pl-8 border-b-4 border-teal-200 hover:border-teal-100 rounded-r-full w-full text-xl md:text-base sm:text-sm opacity-95 sm:py-10 sm:m-auto"
                style={{ color: "white" }}
              >
                <div className="">
                  I am an expert and I want to offer my services
                  <br /> <br />
                  Click here to see and apply for current jobs
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
