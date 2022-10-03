import classes from "./Navigation.module.css";
import Button from "../UI/Button/Button";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      {props.isLoggedIn && (
        <li>
          <a href="/">Users</a>
        </li>
      )}
      {props.isLoggedIn && (
        <li>
          <a href="/">Admin</a>
        </li>
      )}
      {props.isLoggedIn && (
        <li>
          <Button onClick={props.isLogout}>Logout</Button>
        </li>
      )}
    </nav>
  )
};

export default Navigation;
