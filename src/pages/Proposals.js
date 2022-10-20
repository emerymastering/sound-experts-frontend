import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { selectToken } from "../store/user/selectors";
import { selectJobs } from "../store/jobs/selectors";
// import { fetchUserJobs } from "../store/jobs/thunks";
// import { selectProposals } from "../store/proposals/selectors";
// import { fetchProposals } from "../store/proposals/thunks";
import Proposal from "../components/Proposal";

export const Proposals = () => {
  const { job_id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user = useSelector(selectUser);
  const jobs = useSelector(selectJobs);
  //   console.log("proposals ideee", proposals[0]);

  const token = useSelector(selectToken);

  const currentJob = jobs.find((job) => job.id === parseInt(job_id));

  useEffect(() => {
    if (!token) navigate("/login");
  }, [token, navigate]);

  // useEffect(() => {
  //   dispatch(fetchProposals());
  // }, [dispatch]);

  return (
    <div className="h-screen bg-[url('../public/images/vinyl.jpg')] bg-center bg-cover">
      <div className="flex items-center flex-col pt-6">
        <h1 className="text-3xl font-medium dark:text-blue-300 pt-10 pb-20 text-center bg-black bg-opacity-70 rounded-full w-80 h-20">
          List of Proposals
        </h1>
        <div className="flex flex-col flex-wrap mx-32 justify-center">
          {!currentJob ? (
            <p className="text-white">Loading...</p>
          ) : (
            currentJob.job_applications.map((proposal) => {
              return (
                <div className="p-5" key={proposal.id}>
                  <Proposal proposal={proposal} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
