import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserWithStoredToken } from "./store/user/thunks";
import { Routes, Route } from "react-router-dom";
import { Navigation, MessageBox } from "./components";
import {
  Homepage,
  Login,
  SignUp,
  Experts,
  JobForm,
  Jobs,
  MyAccount,
  JobApply,
  Proposals,
} from "./pages";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <MessageBox />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/experts" element={<Experts />} />
        <Route path="/jobform" element={<JobForm />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/jobapply/:id" element={<JobApply />} />
        <Route path="/jobs/proposals/:job_id" element={<Proposals />} />
      </Routes>
    </div>
  );
}

export default App;
