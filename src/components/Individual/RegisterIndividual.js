import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import API from "../common/APIUtils";

const styles = theme => ({});

class RegisterIndividual extends React.Component {
  constructor() {
    super();
    this.state = {
      payee: "",
      amount: "",
      item: "",
      comment: ""
    };
  }

  onChange = e => {
    /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    // get our form data out of state
    const expense = {
      payee: this.state.payee,
      amount: this.state.amount,
      item: this.state.item,
      comment: this.state.comment
    };

    API.post("expenses", expense)
      .then(response => {
        console.log(response);
        //this.handleClose();
      })
      .catch(error => {
        console.log(error);
      });

    this.setState({
      payee: "",
      amount: "",
      item: "",
      comment: ""
    });
  };

  render() {
    const { payee, amount, item, comment } = this.state;

    return (
      <div style={{ marginLeft: "370px" }}>
        <br />
        <form onSubmit={this.handleSubmit}>
          <Card style={{ width: "800px", align: "center" }}>
            <CardContent>
              <Typography component="h1" variant="h4" align="center">
                Registration Form - Individual
              </Typography>
              <br />
              <Grid container spacing={24}>
                <Grid item xs={6} sm={6}>
                  <TextField
                    required
                    id="payee"
                    name="payee"
                    value={payee}
                    onChange={this.onChange}
                    label="Name"
                    fullWidth
                    autoComplete="off"
                  />
                </Grid>

                <Grid item xs={6} sm={6}>
                  <TextField
                    required
                    id="pickUpDate"
                    name="pickUpDate"
                    onChange={this.onChange}
                    label="Pick Up Date"
                    type="date"
                    fullWidth
                    autoComplete="off"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>

                <Grid item xs={4} sm={4}>
                  <TextField
                    required
                    id="payee"
                    name="payee"
                    value={payee}
                    onChange={this.onChange}
                    label="National ID No."
                    fullWidth
                    autoComplete="off"
                  />
                </Grid>

                <Grid item xs={4} sm={4}>
                  <TextField
                    required
                    id="payee"
                    name="payee"
                    value={payee}
                    onChange={this.onChange}
                    label="Telephone"
                    fullWidth
                    autoComplete="off"
                  />
                </Grid>

                <Grid item xs={4} sm={4}>
                  <TextField
                    required
                    id="payee"
                    name="payee"
                    value={payee}
                    onChange={this.onChange}
                    label="Email"
                    fullWidth
                    autoComplete="off"
                  />
                </Grid>

                <Grid item xs={6} sm={6}>
                  <TextField
                    required
                    id="payee"
                    name="payee"
                    value={payee}
                    onChange={this.onChange}
                    label="Postal Address"
                    fullWidth
                    autoComplete="off"
                  />
                </Grid>

                <Grid item xs={6} sm={6}>
                  <TextField
                    required
                    id="payee"
                    name="payee"
                    value={payee}
                    onChange={this.onChange}
                    label="Physical Address"
                    fullWidth
                    autoComplete="off"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    color="primary"
                  >
                    Save Individual
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(RegisterIndividual);
