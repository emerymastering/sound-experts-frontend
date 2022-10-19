import styled from "styled-components";
import { Button, Input, Title, LinkWord } from "../styled";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/user/thunks";
import { selectToken } from "../store/user/selectors";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [token, navigate]);

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    navigate(-1);
  };

  return (
    <div
      style={{ textAlign: "center" }}
      className="h-screen pr-auto pl-auto bg-[url('../public/images/login.jpg')]  bg-contain bg-center"
    >
      <Container className="max-w-screen-xl">
        <Title>Login</Title>
        <form onSubmit={submitForm}>
          <Input
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <Button type="submit">Login</Button>
        </form>
        <SubText className="bg-white mr-auto ml-auto max-w-fit bg-opacity-70">
          Don't have an account yet? Click{" "}
          <Link to="/signup" style={LinkWord}>
            here
          </Link>{" "}
          to sign up
        </SubText>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: "flex";
  flex-direction: "column";
  margin: auto;
  padding: 200px;
`;

const SubText = styled.p`
  text-align: center;
  color: #1e3163;
  padding: 5px 0px 5px 0px;
`;
