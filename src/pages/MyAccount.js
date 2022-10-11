import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectUser } from "../store/user/selectors";
import { selectJobs } from "../store/jobs/selectors";
import { fetchJobs } from "../store/jobs/thunks";
import Job from "../components/Job";

export const MyAccount = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log("I am", user);
  const jobs = useSelector(selectJobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  if (!user) return;

  return (
    <div>
      {user && jobs && (
        <>
          <div>Hello {user.first_name}</div>
          <div>Here is the list of jobs you posted</div>
          <div></div>
        </>
      )}
    </div>
  );
};
