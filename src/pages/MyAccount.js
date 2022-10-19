import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { selectUser, selectToken } from "../store/user/selectors";
import { selectJobs } from "../store/jobs/selectors";
import { fetchUserJobs } from "../store/jobs/thunks";
import { selectProposals } from "../store/proposals/selectors";
import { fetchProposals } from "../store/proposals/thunks";
import Job from "../components/Job";

export const MyAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const jobs = useSelector(selectJobs);
  // const proposals = useSelector(selectProposals);

  const token = useSelector(selectToken);

  useEffect(() => {
    if (!token) navigate("/login");
  }, [token, navigate]);

  useEffect(() => {
    dispatch(fetchUserJobs());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchProposals());
  // }, [dispatch]);

  return (
    <div className="h-screen bg-[url('https://thevinylfactory.com/wp-content/uploads/2018/01/01-The-Vinyl-Factory-Vinyl-Record-Pressing-Plant-London.-16-of-71.jpg')] bg-center bg-cover">
      <div className="h-screen bg-black bg-opacity-70 ">
        {user && jobs && (
          <>
            <div className="block text-2xl font-medium text-gray-900 dark:text-blue-300 pt-10 text-center">
              Hello {user.first_name}
            </div>
            <p className="block text-xl font-medium text-gray-900 dark:text-blue-300 pt-10 pb-10 text-center">
              Here is the list of jobs you posted
            </p>
            <div className="flex flex-col flex-wrap mx-32 justify-center">
              {jobs.map((job) => {
                return (
                  <div
                    className="p-5 w-800
                "
                    key={job.id}
                  >
                    <Job
                      id={job.id}
                      job={job}
                      token={token}
                      deleteEnabled={true}
                      proposalsCount={job.job_applications.length}
                    />
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
