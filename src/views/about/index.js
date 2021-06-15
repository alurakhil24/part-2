import React from "react";
import Sidebar from "../../components/Sidebar";
import ProtectedRoute from "../../components/ProtectedRoute";
import Company from "../../components/Company";
import Jobs from "../../components/Jobs";
import EditJobs from "../../components/EditJobs";
import AboutUs from "../../components/AboutUs";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import "./index.css";

function About() {
  const { path } = useRouteMatch();
  return (
    <div className="flex-container">
      <Sidebar />
      <Switch>
        <Route exact path={`${path}/company`}>
          <Company />
        </Route>
        <Route exact path={`${path}/jobs`}>
          <Jobs />
        </Route>
        <ProtectedRoute exact path={`${path}/jobs/edit`}>
          <EditJobs />
        </ProtectedRoute>
        <Route path="/">
          <AboutUs />
        </Route>
      </Switch>
    </div>
  );
}

export default About;
