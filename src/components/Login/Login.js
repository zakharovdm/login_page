import { useState } from "react";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";

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
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit">Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
