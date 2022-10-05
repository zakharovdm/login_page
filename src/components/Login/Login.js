import { useState, useEffect } from "react";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const indetifier = setTimeout(() => {
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 500);
    return () => {
      clearTimeout(indetifier);
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (evt) => {
    setEnteredEmail(evt.target.value);
  };

  const passwordChangeHandler = (evt) => {
    setEnteredPassword(evt.target.value);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  const emailValidHandler = () => {
    setEmailIsValid(enteredEmail.trim().includes("@"));
  };

  const passwordValidHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailValidHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordValidHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
