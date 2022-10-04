import { useState, useEffect, Fragment } from "react";

import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import Home from "./components/Home/Home";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInValue = localStorage.getItem("isLoggedIn");
    if (loggedInValue === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logginHandler = (email, password) => {
    //need to check email and password
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <Fragment>
      <MainHeader isAuthenticated={isLoggedIn} isLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={logginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </Fragment>
  );
};

export default App;
