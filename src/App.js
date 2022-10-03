import { useState, Fragment } from "react";

import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import Home from "./components/Home/Home";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logginHandler = (email, password) => {
    //need to check email and password
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
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
