import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";

import FormControl from "@material-ui/core/FormControl";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: "100%",
    maxWidth: "auto"
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing.unit / 4
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3
  }
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder"
];

const centralDistricts = [
  "Buikwe",
  "Bukomansimbi",
  "Butambala",
  "Buvuma",
  "Gomba",
  "Kalangala"
];

const easternDistricts = ["Amuria", "Budaka", "Bududa"];

class ExperienceForm extends React.Component {
  state = {
    name: [],
    centralDistricts: [],
    easternDistricts: [],
    northernDistricts: [],
    westernDistricts: [],
    beneficiaries: [],
    beneficiaryCategory: [],
    beneficiaryGender: []
  };

  onChangeCentralDistricts = event => {
    this.setState({ centralDistricts: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Experience:
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Work status</FormLabel>
              <RadioGroup
                aria-label="Work status Training"
                name="workStatus"
                className={classes.group}
                value={this.state.value}
                onChange={this.handleChange}
              >
                <FormControlLabel
                  value="employed"
                  control={<Radio />}
                  label="Employed"
                />
                <FormControlLabel
                  value="self-employed"
                  control={<Radio />}
                  label="self-employed"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="postalAddress"
              label="Organization/ Firm"
              multiline
              rowsMax="3"
              fullWidth
              //value={this.state.multiline}
              //onChange={this.handleChange("multiline")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="postalAddress"
              label="Your Position"
              multiline
              rowsMax="3"
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

export default withStyles(styles)(ExperienceForm);
