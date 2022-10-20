import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { selectUser, selectToken } from "../store/user/selectors";
import { selectJobs } from "../store/jobs/selectors";
import { fetchUserJobs } from "../store/jobs/thunks";
import Job from "../components/Job";

// path -> user.profile.user_expert.job_applications

export const MyAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const jobs = useSelector(selectJobs);
  const jobApplications = user?.user_expert.job_applications;

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
            {!user.is_expert ? (
              <p className="block text-xl font-medium text-gray-900 dark:text-blue-300 pt-10 pb-10 text-center">
                Here is the list of jobs you posted
              </p>
            ) : (
              <p className="block text-xl font-medium text-gray-900 dark:text-blue-300 pt-10 pb-10 text-center">
                Here is the list of your proposals
              </p>
            )}
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
            <div className="flex flex-col flex-wrap mx-32 justify-center"></div>
          </>
        )}
      </div>
    </div>
  );
};
