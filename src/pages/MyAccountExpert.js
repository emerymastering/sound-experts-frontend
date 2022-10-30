import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { selectUser, selectToken } from "../store/user/selectors";
import { selectJobs } from "../store/jobs/selectors";
import { fetchUserJobs } from "../store/jobs/thunks";
import Job from "../components/Job";
import ProposalExpert from "../components/ProposalExpert";

// path -> user.profile.user_expert.job_applications

export const MyAccountExpert = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const jobs = useSelector(selectJobs);
  const jobApplications = user?.user_expert;

  console.log("proposals!! on expert page", jobApplications);

  const token = useSelector(selectToken);

  useEffect(() => {
    if (!token) navigate("/login");
  }, [token, navigate]);

  useEffect(() => {
    dispatch(fetchUserJobs());
  }, [dispatch]);

  return (
    <div className="h-screen bg-[url('../public/images/factory.jpg')] bg-center bg-cover bg-fixed">
      <div className="h-screen bg-black bg-opacity-70 overflow-scroll">
        {user && jobs && (
          <>
            <div className="block text-2xl font-medium text-gray-900 dark:text-blue-300 pt-10 text-center">
              <p> Hello {user.first_name}</p>
              <img
                className="m-auto mt-4 rounded-xl"
                style={{ height: 100, width: 100 }}
                src={user.image_URL}
                alt="user"
              />
            </div>
            <div className="flex items-center flex-col pt-6">
              <p className="block text-xl font-medium text-gray-900 dark:text-blue-300 pt-10 pb-5 text-center">
                Here is the list of your proposals
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
              <div className="flex flex-col flex-wrap mx-32 justify-center">
                {!jobApplications.job_applications ? (
                  <p className="text-white">Loading...</p>
                ) : (
                  jobApplications.job_applications.map((jobApplication) => {
                    return (
                      <div className="p-5" key={jobApplication.id}>
                        <ProposalExpert proposal={jobApplication} />
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
