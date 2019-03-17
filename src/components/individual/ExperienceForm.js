import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import Chip from "@material-ui/core/Chip";

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

const animalProductions = [
  "Animal Production",
  "Large livestock (cattle)",
  "small livestock (Sheep, goats)",
  "Micro livestock (Rabbits)",
  "Birds (Chicken, Turkeys, ducks)",
  "Bees",
  "Fisheries"
];

const cropProductions = [
  "Traditional cash crops (tea, cocoa, coffee, sugarcanes)",
  "Cereals and legumes (maize, rice, sorghum, beans, soya, cowpeas, etc) ",
  "Fruits/ Vegetables",
  "Commercial Trees"
];
const sectors = [
  "Public",
  "Private",
  "Academia",
  "NGO",
  "Farmers Organization"
];

class ExperienceForm extends React.Component {
  state = { sectors: [], animalProduction: [], cropProduction: [] };

  onChangeSectors = event => {
    this.setState({ sectors: event.target.value });
  };

  onChangeCrops = event => {
    this.setState({ cropProduction: event.target.value });
  };

  onChangeAnimal = event => {
    this.setState({ animalProduction: event.target.value });
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
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="select-multiple-checkbox">Sector</InputLabel>
              <Select
                multiple
                value={this.state.sectors}
                onChange={this.onChangeSectors}
                input={<Input id="select-multiple-checkbox" />}
                renderValue={selected => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {sectors.map(name => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={this.state.sectors.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} />
          <Grid item xs={12} sm={12}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">
                Agricultural Sector focus
              </FormLabel>
              <RadioGroup
                aria-label="Agricultural sector focus"
                name="agriculturalSectorFocus"
                className={classes.group}
                value={this.state.value}
                onChange={this.handleChange}
              >
                <FormControlLabel
                  value="general"
                  control={<Radio />}
                  label="General"
                />
                <FormControlLabel
                  value="specific"
                  control={<Radio />}
                  label="Specific"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body1"
              color="primary"
              style={{ fontWeight: "bold" }}
              gutterBottom
            >
              Animal Production:
            </Typography>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="select-multiple-chip" color="primary">
                Animal Production
              </InputLabel>
              <Select
                multiple
                value={this.state.animalProduction}
                color="primary"
                onChange={this.onChangeAnimal}
                input={<Input id="select-multiple-chip" />}
                renderValue={selected => (
                  <div className={classes.chips}>
                    {selected.map(value => (
                      <Chip
                        key={value}
                        label={value}
                        className={classes.chip}
                      />
                    ))}
                  </div>
                )}
                MenuProps={MenuProps}
              >
                {animalProductions.map(name => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body1"
              color="primary"
              style={{ fontWeight: "bold" }}
              gutterBottom
            >
              Crop Production:
            </Typography>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="select-multiple-chip" color="primary">
                Crop Production
              </InputLabel>
              <Select
                multiple
                value={this.state.cropProduction}
                onChange={this.onChangeCrops}
                input={<Input id="select-multiple-chip" />}
                renderValue={selected => (
                  <div className={classes.chips}>
                    {selected.map(value => (
                      <Chip
                        key={value}
                        label={value}
                        className={classes.chip}
                      />
                    ))}
                  </div>
                )}
                MenuProps={MenuProps}
              >
                {cropProductions.map(name => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="body1"
              color="primary"
              style={{ fontWeight: "bold" }}
              gutterBottom
            >
              Post-Harvest handling:
            </Typography>

            <FormControlLabel
              control={<Checkbox color="secondary" name="saveCard" value="" />}
              label="Post-Harvest handling"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="body1"
              color="primary"
              style={{ fontWeight: "bold" }}
              gutterBottom
            >
              Agribusiness Development services :
            </Typography>

            <FormControlLabel
              control={<Checkbox color="secondary" name="saveCard" value="" />}
              label="Agribusiness Development services
            "
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="body1"
              color="primary"
              style={{ fontWeight: "bold" }}
              gutterBottom
            >
              Consultancy:
            </Typography>

            <FormControlLabel
              control={<Checkbox color="secondary" name="saveCard" value="" />}
              label="Consultancy"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ExperienceForm);
