import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const products = [
  { name: "Product 1", desc: "A nice thing", price: "$9.99" },
  { name: "Product 2", desc: "Another thing", price: "$3.45" },
  { name: "Product 3", desc: "Something else", price: "$6.51" },
  { name: "Product 4", desc: "Best thing of all", price: "$14.11" },
  { name: "Shipping", desc: "", price: "Free" }
];
const addresses = [
  "1 Material-UI Drive",
  "Reactville",
  "Anytown",
  "99999",
  "USA"
];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" }
];

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`
  },
  total: {
    fontWeight: "700"
  },
  title: {
    marginTop: theme.spacing.unit * 2
  }
});

function Review(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Verfication Information
      </Typography>
      <Typography variant="body1" gutterBottom>
        <b>Note:</b> This should be recognized AEAS professionals, e.g.
        Professionals of High Level Academic institutions, Directors or Chief
        Executive Officers of institutions, District Production or any other
        related officer, etc
      </Typography>

      <Grid container spacing={16}>
        <br />
        <br />
        <br />
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="organizationName"
            name="organizationName"
            label="Firstname"
            fullWidth
            autoComplete="organizationName"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="organizationName"
            name="organizationName"
            label="Surname"
            fullWidth
            autoComplete="organizationName"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="organizationName"
            name="organizationName"
            label="Title"
            fullWidth
            autoComplete="organizationName"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="organizationName"
            name="organizationName"
            label="Telephone"
            fullWidth
            autoComplete="organizationName"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="organizationName"
            name="organizationName"
            label="Email"
            fullWidth
            autoComplete="organizationName"
          />
          <br />
          <br />
          <br />
          <br />
        </Grid>

        {/* <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map(payment => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}

Review.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Review);
