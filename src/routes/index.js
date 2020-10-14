import React from "react";
import { Switch } from "react-router-dom";
import App from "../components/App";
import Login from "../components/Login";
import Route from "./Route";

const Routes = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Switch>
        <Route exact path="/" component={Login} />
        {/* <Route exact path="/" isPrivate component={App}></Route> */}
      </Switch>
    </div>
  );
};

export default Routes;
