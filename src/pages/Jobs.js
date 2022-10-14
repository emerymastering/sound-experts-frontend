import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectJobs } from "../store/jobs/selectors";
import { fetchJobs } from "../store/jobs/thunks";
import Job from "../components/Job";

export const Jobs = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(selectJobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <div className="p-20 pb-80 pl-80 pr-80 ml-100 mr-100 bg-[url('https://www.electronicbeats.net/app/uploads/fly-images/118676/DVS1-Full-Page-1920x1000-c.png')] bg-center bg-cover">
      <h1 className="block text-3xl font-medium text-gray-900 dark:text-blue-300 pt-10 pb-20 text-center bg-black bg-opacity-70 rounded-full w-80 h-20 ml-80">
        List of current Jobs
      </h1>
      <div className="flex flex-col flex-wrap mx-32 justify-center">
        {!jobs.length
          ? "Loading"
          : jobs.map((job) => {
              return (
                <div
                  className="p-5 w-800
                "
                  key={job.id}
                >
                  <Job id={job.id} job={job} />
                </div>
              );
            })}
      </div>
    </div>
  );
};
