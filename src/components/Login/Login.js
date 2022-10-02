import { useState } from "react";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const emailChangeHandler = (evt) => {
    setEnteredEmail(evt.target.value);
  }

  const passwordChangeHandler = (evt) => {
    setEnteredPassword(evt.target.value);
  }

  const submitHandler = (evt) => {
    evt.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="email">E-Mail</label>
      <input
        type="email"
        id="email"
        value={enteredEmail}
        onChange={emailChangeHandler}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={enteredPassword}
        onChange={passwordChangeHandler}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default Login;
