import React, { useContext } from "react";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Dashboard from "../Dashboard";
import { AuthContext } from "../../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Quiz from "../quiz";

const Routes = () => {
  const { currentUser, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading</div>;
  }

  if (currentUser) {
    return (
      <Router>
        <Switch>
          <Route path="/quiz/:id">
            <Quiz />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    );
  }

  return (
    <Router>
      <Switch>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/">
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
