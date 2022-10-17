import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectUser, selectToken } from "../store/user/selectors";
import { selectJobs } from "../store/jobs/selectors";
import { fetchUserJobs } from "../store/jobs/thunks";
import Job from "../components/Job";

export const MyAccount = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const jobs = useSelector(selectJobs);

  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(fetchUserJobs());
  }, [dispatch]);

  if (!user) return;

  return (
    <div className="bg-[url('https://thevinylfactory.com/wp-content/uploads/2018/01/01-The-Vinyl-Factory-Vinyl-Record-Pressing-Plant-London.-16-of-71.jpg')] bg-center bg-cover pb-96">
      <div className="h-100% pl-80 pr-80 pb-96 bg-black bg-opacity-70 ">
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
