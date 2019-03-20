import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 800,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  margin: {
    margin: theme.spacing.unit
  },
  link: {
    textDecoration: "none",
    color: "white"
  }
});

class SignUp extends Component {
  render() {
    const { classes } = this.props;
    //const { classes } = props;

    return (
      <React.Fragment>
        <main className={classes.main}>
          <CssBaseline />

          <Paper className={classes.paper}>
            <Grid container spacing={24}>
              <Grid item xs={10} sm={10} />
              <Grid item xs={2} sm={2}>
                <Link to="/" className={classes.link}>
                  <Button
                    variant="contained"
                    size="medium"
                    color="secondary"
                    className={classes.margin}
                  >
                    Sign In
                  </Button>
                </Link>
              </Grid>
            </Grid>
            <Typography variant="h4" gutterBottom>
              Sign up for a free account
            </Typography>
            <Typography variant="h6" gutterBottom>
              Select below the type of account you want to create
            </Typography>

            <br />

            <div>
              <Link to="/individual" className={classes.link}>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  className={classes.margin}
                >
                  Individual
                </Button>
              </Link>
              <Link to="/organization" className={classes.link}>
                <Button
                  variant="contained"
                  size="large"
                  color="default"
                  className={classes.margin}
                >
                  Organization
                </Button>
              </Link>
            </div>

            <br />
            <br />
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUp);
