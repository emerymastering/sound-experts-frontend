import { useDispatch, useSelector, useStore } from "react-redux";
import { useEffect } from "react";
import { selectJobs } from "../store/jobs/selectors";
import { fetchJobs } from "../store/jobs/thunks";
import { selectUser } from "../store/user/selectors";
import { selectProposals } from "../store/proposals/selectors";
import { fetchProposals } from "../store/proposals/thunks";
import Job from "../components/Job";
import { selectToken } from "../store/user/selectors";

export const Jobs = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(selectJobs);
  const store = useStore();
  const token = selectToken(store.getState());
  const user = useSelector(selectUser);
  // const proposals = useSelector(selectProposals);
  // console.log("proposals count", proposals.length);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch, jobs]);

  // useEffect(() => {
  //   dispatch(fetchProposals());
  // }, [dispatch]);

  return (
    <div className="h-screen bg-[url('https://www.electronicbeats.net/app/uploads/fly-images/118676/DVS1-Full-Page-1920x1000-c.png')] bg-center bg-cover">
      <div className="flex items-center flex-col pt-6">
        <h1 className="block text-3xl font-medium text-gray-900 dark:text-blue-300 pt-10 pb-20 text-center bg-black bg-opacity-70 rounded-full w-80 h-20">
          List of current Jobs
        </h1>
        <div className="flex flex-col flex-wrap mx-32 justify-center">
          {!jobs.length
            ? "Loading"
            : jobs.map((job) => {
                return (
                  <div
                    className="p-5
                "
                    key={job.id}
                  >
                    <Job
                      id={job.id}
                      userId={user?.id}
                      job={job}
                      deleteEnabled={false}
                      applyEnable={token && user?.is_expert ? true : false}
                      token={token}
                      proposalsCount={job.job_applications.length}
                    />
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};
