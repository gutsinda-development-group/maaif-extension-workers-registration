import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const styles = theme => ({});

class IndividualProfileForm extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Individual Profile
        </Typography>
        <Grid container spacing={24}>
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
          <Grid item xs={12} sm={12}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="Gender"
                name="gender1"
                className={classes.group}
                value={this.state.value}
                onChange={this.handleChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="registrationDate"
              name="registrationDate"
              //value={registrationDate}
              //onChange={this.onChange}
              label="Date of birth"
              type="date"
              fullWidth
              autoComplete="off"
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="address1"
              name="address1"
              label="National Identification No"
              helperText="(NIN)"
              fullWidth
              autoComplete="nin"
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
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="postalAddress"
              label="Postal Address"
              multiline
              rowsMax="4"
              fullWidth
              //value={this.state.multiline}
              //onChange={this.handleChange("multiline")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="postalAddress"
              label="Physical Address"
              multiline
              rowsMax="4"
              fullWidth
              //value={this.state.multiline}
              //onChange={this.handleChange("multiline")}
              margin="normal"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(IndividualProfileForm);
