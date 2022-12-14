import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { selectUser, selectToken } from "../store/user/selectors";
import { selectJobs } from "../store/jobs/selectors";
import { fetchUserJobs } from "../store/jobs/thunks";
import Job from "../components/Job";

export const MyAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const jobs = useSelector(selectJobs);
  console.log("any jobs?", jobs);

  const token = useSelector(selectToken);

  useEffect(() => {
    if (!token) navigate("/login");
  }, [token, navigate]);

  useEffect(() => {
    dispatch(fetchUserJobs());
  }, [dispatch]);

  return (
    <div className="h-screen bg-[url('../public/images/factory.jpg')] bg-center bg-cover">
      <div className="h-screen bg-black bg-opacity-70 ">
        {user && jobs && (
          <>
            <div className="block text-2xl font-medium text-gray-900 dark:text-blue-300 pt-10 text-center">
              Hello {user.first_name}
            </div>
            {jobs.length === 0 ? (
              <p className="block text-xl font-medium text-gray-900 dark:text-blue-300 pt-10 pb-10 text-center">
                You have not posted any jobs yet
              </p>
            ) : (
              <div>
                <p className="block text-xl font-medium text-gray-900 dark:text-blue-300 pt-10 pb-10 text-center">
                  Here is the list of your job offers
                </p>
                <div className="flex flex-col flex-wrap mx-32 justify-center">
                  {jobs.map((job) => {
                    return (
                      <div
                        className="p-5 m-auto
                "
                        key={job.id}
                      >
                        <Job
                          id={job.id}
                          job={job}
                          token={token}
                          deleteEnabled={true}
                          proposalsCount={job.job_applications.length}
                          propEnable={
                            token && !user?.is_expert && job.user_id === user.id
                              ? true
                              : false
                          }
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
