import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import LoginFormPage from "./components/LoginFormPage"
import LandingPage from "./components/LandingPage/index"
import ExplorePage from "./components/ExplorePage"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          {/* <Route path="/explore"> */}
            {/* <ExplorePage /> */}
          {/* </Route> */}
        </Switch>
      )}
    </>
  );
}

export default App;
