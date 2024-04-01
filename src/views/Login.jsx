import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const LoginHandler = () => {
    if (email === "azsidhu@gmail.com" && password === "123456") {
      setIsLoggedIn(true);
      navigate("/all-resumes"); // Redirect to /cv page
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };
  return (
    <Container>
      <Card>
        <h2>Login</h2>
        <Input
          type="text"
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Button onClick={LoginHandler}>Log In</Button>
      </Card>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Card = styled.div`
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
  width: 80%;
  max-width: 400px;
  height: auto;
  background-color: #ffffff;
  padding: 20px;
  text-align: center;
`;
const Input = styled.input`
  width: calc(100% - 40px);
  height: 40px;
  margin: 10px 0;
`;
const Button = styled.button`
  text-decoration: none;
  background-color: #005af0;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  outline: none;
  transition: 0.3s;
  margin: 10px 0 0 15rem;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
    color: #005af0;
    padding: 10px 20px;
    border: none;
    outline: 1px solid #010101;
  }
`;
