import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectJobs } from "../store/jobs/selectors";
import { fetchJobs } from "../store/jobs/thunks";
import Job from "../components/Job";

export const Jobs = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(selectJobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  console.log("show me:", jobs);

  return (
    <div className="ml-80 mr-80">
      <h1 className="flex place-content-center text-3xl underline p-10 ">
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
