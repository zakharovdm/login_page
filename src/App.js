import { useState, Fragment } from "react";

import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";

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
        <Login onLogin={logginHandler} />
      </main>
    </Fragment>
  );
};

export default App;
