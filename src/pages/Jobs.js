import { useDispatch, useSelector, useStore } from "react-redux";
import { useEffect } from "react";
import { selectJobs } from "../store/jobs/selectors";
import { fetchJobs } from "../store/jobs/thunks";
import { selectUser } from "../store/user/selectors";
import Job from "../components/Job";
import { selectToken } from "../store/user/selectors";

export const Jobs = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(selectJobs);
  const store = useStore();
  const token = selectToken(store.getState());
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  if (!jobs) return null;
  return (
    <div className="flex flex-col h-screen bg-[url('../public/images/vinyl.jpg')] bg-center bg-cover">
      <div className="flex items-center flex-col pt-6 flex-grow overflow-scroll">
        <h1 className="block text-3xl font-medium text-gray-900 dark:text-blue-300 pt-10 pb-20 text-center bg-black bg-opacity-70 rounded-full w-80 h-20 mb-8">
          List of current Jobs
        </h1>
        <div className="flex flex-col flex-wrap mx-32 justify-center bg-black bg-opacity-70 mb-20 rounded-xl">
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
                      applyEnable={
                        token &&
                        user?.is_expert &&
                        !job.job_applications.find(
                          (job_application) =>
                            job_application.user_expert.user.id === user?.id
                        )
                          ? true
                          : false
                      }
                      propEnable={
                        token && !user?.is_expert && job.user_id === user?.id
                          ? true
                          : false
                      }
                      isExpert={user?.is_expert}
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
