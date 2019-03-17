import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
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

const animalProduction1 = [
  "Animal Production",
  "Large livestock (cattle)",
  "small livestock (Sheep, goats)",
  "Micro livestock (Rabbits)",
  "Birds (Chicken, Turkeys, ducks)",
  "Bees",
  "Fisheries"
];

const cropProduction1 = [
  "Traditional cash crops (tea, cocoa, coffee, sugarcanes)",
  "Cereals and legumes (maize, rice, sorghum, beans, soya, cowpeas, etc) ",
  "Fruits/ Vegetables",
  "Commercial Trees"
];

const services = [
  {
    value: "Public",
    label: "Public"
  },
  {
    value: "Private",
    label: "Private"
  },
  {
    value: "Academia",
    label: "Academia"
  },
  {
    value: "Professional body",
    label: "Professional body"
  },
  {
    value: "NGO",
    label: "NGO"
  },
  {
    value: "Farmers",
    label: "Farmers"
  },
  {
    value: "Organization",
    label: "Organization"
  }
];

const animalProduction = [
  {
    value: "Animal Production",
    label: "Animal Production"
  },
  {
    value: "Large livestock (cattle)",
    label: "Large livestock (cattle)"
  },
  {
    value: "small livestock (Sheep, goats)",
    label: "small livestock (Sheep, goats)"
  },
  {
    value: "Micro livestock (Rabbits)",
    label: "Micro livestock (Rabbits)"
  },
  {
    value: "Birds (Chicken, Turkeys, ducks)",
    label: "Birds (Chicken, Turkeys, ducks)"
  },
  {
    value: "Bees",
    label: "Bees"
  },
  {
    value: "Fisheries",
    label: "Fisheries"
  }
];

const cropProduction = [
  {
    value: "Traditional cash crops (tea, cocoa, coffee, sugarcanes)",
    label: "Traditional cash crops (tea, cocoa, coffee, sugarcanes)"
  },
  {
    value:
      "Cereals and legumes (maize, rice, sorghum, beans, soya, cowpeas, etc) ",
    label:
      "Cereals and legumes (maize, rice, sorghum, beans, soya, cowpeas, etc) "
  },
  {
    value: "Fruits/ Vegetables",
    label: "Fruits/ Vegetables"
  },
  {
    value: "Commercial Trees",
    label: "Commercial Trees"
  }
];

const levels = [
  {
    value: "PhD",
    label: "PhD"
  },
  {
    value: "Masters",
    label: "Masters"
  },
  {
    value: "BSc",
    label: "BSc"
  },
  {
    value: "Diploma",
    label: "Diploma"
  },
  {
    value: "Certificate",
    label: "Certificate"
  }
];

class StaffTrainingForm extends React.Component {
  state = { animalProduction: [], cropProduction: [] };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleChangeCrops = event => {
    this.setState({ cropProduction: event.target.value });
  };

  onChange = event => {
    this.setState({ animalProduction: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Staff & Training
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12}>
            <Typography variant="h6" color="primary" gutterBottom>
              AEAS staff:
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="totalAmount"
              name="totalAmount"
              //value={totalAmount}
              //onChange={this.onChange}
              label="Number of Male"
              type="number"
              fullWidth
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="totalAmount"
              name="totalAmount"
              //value={totalAmount}
              //onChange={this.onChange}
              label="Number of Female"
              type="number"
              fullWidth
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography variant="h6" color="primary" gutterBottom>
              Trained staff:
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="servicesOffered"
              select
              name="servicesOffered"
              //value={servicesOffered}
              //onChange={this.onChange}
              label="Level*"
              fullWidth
              helperText="Please select Level"
              InputLabelProps={{
                shrink: true
              }}
            >
              {levels.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              required
              id="totalAmount"
              name="totalAmount"
              //value={totalAmount}
              //onChange={this.onChange}
              label="Number of Male"
              type="number"
              fullWidth
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              required
              id="totalAmount"
              name="totalAmount"
              //value={totalAmount}
              //onChange={this.onChange}
              label="Number of Female"
              type="number"
              fullWidth
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Fab color="primary" aria-label="Add">
              <AddIcon />
            </Fab>
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography variant="h6" color="primary" gutterBottom>
              Sectors:
            </Typography>
            <TextField
              id="servicesOffered"
              select
              name="servicesOffered"
              //value={servicesOffered}
              //onChange={this.onChange}
              label="Sector*"
              fullWidth
              helperText="Please select Sector"
              InputLabelProps={{
                shrink: true
              }}
            >
              {services.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" color="primary" gutterBottom>
              Agricultural sector focus:
            </Typography>

            <RadioGroup
              aria-label="Agricultural sector focus:"
              name="gender1"
              value="female"
              color="primary"
              //onChange={this.handleChange}
            />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="General"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Specific"
            />
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
                onChange={this.onChange}
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
                {animalProduction1.map(name => (
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
                onChange={this.handleChangeCrops}
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
                {cropProduction1.map(name => (
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

export default withStyles(styles)(StaffTrainingForm);
