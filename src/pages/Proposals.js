import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { selectUser, selectToken } from "../store/user/selectors";
import { selectJobs } from "../store/jobs/selectors";
import { fetchUserJobs } from "../store/jobs/thunks";
import { selectProposals } from "../store/proposals/selectors";
import { fetchProposals } from "../store/proposals/thunks";
import Proposal from "../components/Proposal";

export const Proposals = () => {
  const { job_id } = useParams();
  console.log("jobId", job_id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const jobs = useSelector(selectJobs);
  //   console.log("proposals ideee", proposals[0]);

  const token = useSelector(selectToken);

  const currentJob = jobs.find((job) => job.id === parseInt(job_id));
  console.log(jobs);
  console.log("current job", currentJob);

  useEffect(() => {
    if (!token) navigate("/login");
  }, [token, navigate]);

  return (
    <div className="h-screen bg-[url('https://www.electronicbeats.net/app/uploads/fly-images/118676/DVS1-Full-Page-1920x1000-c.png')] bg-center bg-cover">
      <div className="flex items-center flex-col pt-6">
        <h1 className="block text-3xl font-medium text-gray-900 dark:text-blue-300 pt-10 pb-20 text-center bg-black bg-opacity-70 rounded-full w-80 h-20">
          List of current Jobs
        </h1>
        {!currentJob ? (
          <p className="text-white">Loading...</p>
        ) : (
          currentJob.job_applications.map((proposal) => {
            return (
              <div className="p-5 w-800" key={proposal.id}>
                <Proposal proposal={proposal} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
