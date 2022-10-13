import styled from "styled-components";
import { Button, Input, Title } from "../styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../store/user/thunks";
import { selectToken } from "../store/user/selectors";
import axios from "axios";
import { apiUrl } from "../config/constants";

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [streetAdd, setStreetAdd] = useState("");
  const [city, setCity] = useState("");
  const [countryId, setCountryId] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [countries, setCountries] = useState(null);

  const fetchCountries = async () => {
    try {
      const response = await axios.get(`${apiUrl}/users/countries`);
      console.log("Countries", response);
      setCountries(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [token, navigate]);

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(
      signUp(
        firstName,
        secondName,
        artistName,
        streetAdd,
        city,
        countryId,
        phone,
        email,
        password
      )
    );
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Container>
        <Title>Sign Up</Title>
        <form onSubmit={submitForm}>
          <Input
            placeholder="first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            placeholder="second name"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
          />
          <Input
            placeholder="artist name (optional)"
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)}
          />
          <Input
            placeholder="street address"
            value={streetAdd}
            onChange={(e) => setStreetAdd(e.target.value)}
          />
          <Input
            placeholder="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <select
            className="w-1/2 p-3 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            defaultValue="choose"
            onChange={(e) => setCountryId(e.target.value)}
          >
            <option value="choose">Choose Your Country</option>
            {countries ? (
              countries.map((c) => (
                <option value={c.id} key={c.id}>
                  {c.name}
                </option>
              ))
            ) : (
              <></>
            )}
          </select>
          <Input
            placeholder="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
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
          <Button type="submit">Sign Up</Button>
        </form>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: "flex";
  flex-direction: "column";
  margin: 10%;
`;
