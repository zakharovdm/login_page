import { useState, Fragment } from "react";

import Login from "./components/Login/Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logginHandler = (email, password) => {
    setIsLoggedIn(true);
  };

  return (
    <Fragment>
      <Login onLogin={logginHandler} />
    </Fragment>
  );
};

export default App;
