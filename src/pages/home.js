import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  }
};

function LandingPage(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h3" component="h2" align="center">
          Registration Form
        </Typography>
        <br />
        <Typography component="h1" variant="h6" align="center">
          Select your category and proceed to register
        </Typography>
        <br />

        <Grid container spacing={24}>
          <Grid item xs={3} sm={3} align="center">
            <Link to={"/individual"} style={{ textDecoration: "none" }}>
              <Card
                className={classes.card}
                style={{
                  textAlign: "center",
                  borderLeft: "3px solid dodgerblue"
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="h2" color="primary">
                    I'm an Individual
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Annex 1a Registration
                  </Typography>
                  <Typography component="p">
                    Individual extension worker
                    <br />
                  </Typography>
                </CardContent>
                <Divider light />
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Link to={"/organization"} style={{ textDecoration: "none" }}>
              <Card
                className={classes.card}
                style={{
                  textAlign: "center",
                  borderLeft: "3px solid dodgerblue"
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="h2" color="primary">
                    I'm an Organization
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Annex 1b Registration
                  </Typography>
                  <Typography component="p">
                    Group of extension workers under organization
                    <br />
                  </Typography>
                </CardContent>
                <Divider light />
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Link to={"/practioner"} style={{ textDecoration: "none" }}>
              <Card
                className={classes.card}
                style={{
                  textAlign: "center",
                  borderLeft: "3px solid dodgerblue"
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="h2" color="primary">
                    I'm an Indivual Practioner
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Annex 1c Registration
                  </Typography>
                  <Typography component="p">
                    Indiviual practioner extension worker
                    <br />
                  </Typography>
                </CardContent>
                <Divider light />
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Link to={"/foreigner"} style={{ textDecoration: "none" }}>
              <Card
                className={classes.card}
                style={{
                  textAlign: "center",
                  borderLeft: "3px solid dodgerblue"
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="h2" color="primary">
                    I'm an Indivual Foreigner
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Annex 1d Registration
                  </Typography>
                  <Typography component="p">
                    Individual Foreigner extension worker
                    <br />
                  </Typography>
                </CardContent>
                <Divider light />
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LandingPage);
