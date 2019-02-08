import React from "react";
import { CssBaseline, withStyles } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Layout/Header";
import RegisterIndividual from "./components/Individual/RegisterIndividual";
import LandingPage from "./pages/home";

const styles = theme => ({
  main: {
    padding: 3 * theme.spacing.unit,
    [theme.breakpoints.down("xs")]: {
      padding: 2 * theme.spacing.unit
    }
  }
});

const App = ({ classes }) => (
  <React.Fragment>
    <CssBaseline />
    <Header />
    <main className={classes.main}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/individual" component={RegisterIndividual} />
        <Route path="/organization" />
        <Route path="/practioner" />
        <Route path="/foreigner" />
      </Switch>
    </main>
  </React.Fragment>
);

export default withStyles(styles)(App);
