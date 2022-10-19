import { useContext, Fragment } from "react";
import Login from "./components/Login/Login";
import AuthContext from "./store/auth-context";
import MainHeader from "./components/MainHeader/MainHeader";
import Home from "./components/Home/Home";

const App = () => {
  const ctx = useContext(AuthContext);

  return (
    <Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </Fragment>
  );
};

export default App;
