import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

function ProfileForm() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Organization Profile
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="organizationName"
            name="organizationName"
            label="Organization/ Institution name"
            fullWidth
            autoComplete="organizationName"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="registrationDate"
            name="registrationDate"
            //value={registrationDate}
            //onChange={this.onChange}
            label="Date of registration"
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
            label="Legal Registration Entity No"
            helperText="(NGO or Company)"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Telephone"
            fullWidth
            autoComplete="telephone"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="website"
            name="website"
            label="Website(optional)"
            fullWidth
            autoComplete="website"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
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
        <Grid item xs={12} sm={12}>
          <TextField
            id="missionStatement"
            label="Mission Statement"
            multiline
            rowsMax="4"
            fullWidth
            //value={this.state.multiline}
            //onChange={this.handleChange("multiline")}
            margin="normal"
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <Typography variant="h6" color="primary" gutterBottom>
            Physical location:
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="district"
            name="district"
            label="District"
            fullWidth
            autoComplete="district"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="town"
            name="town"
            label="Town"
            fullWidth
            autoComplete="town"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="street"
            name="street"
            label="Street"
            fullWidth
            autoComplete="street"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6" color="primary" gutterBottom>
            Contact Person:
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="contactPersonName"
            name="contactPersonName"
            label="Name"
            fullWidth
            autoComplete="name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="contactPersonPosition"
            name="contactPersonPosition"
            label="Position"
            fullWidth
            autoComplete="position"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="contactPersonTelephone"
            name="contactPersonTelephone"
            label="Mobile"
            fullWidth
            autoComplete="mobile"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ProfileForm;
