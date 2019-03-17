import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";

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
const northernDistricts = ["Abim", "Adjumani", "Agago"];
const westernDistricts = ["Buhweju", "Buliisa", "Bundibugyo"];

const beneficiaries = ["Farmers", "Students", "Field Extension workers"];

const beneficiaryCategory = ["All Farmers", "Rural", "Peri-Urban"];
const beneficiaryGender = ["All Genders", "Women", "Youths"];

class OperationsForm extends React.Component {
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

  onChangeEasternDistricts = event => {
    this.setState({ easternDistricts: event.target.value });
  };

  onChangeNorthernDistricts = event => {
    this.setState({ northernDistricts: event.target.value });
  };

  onChangeWesternDistricts = event => {
    this.setState({ westernDistricts: event.target.value });
  };

  onChangeBeneficiaries = event => {
    this.setState({ beneficiaries: event.target.value });
  };

  onChangeBeneficiaryCategory = event => {
    this.setState({ beneficiaryCategory: event.target.value });
  };

  onChangeBeneficiaryGender = event => {
    this.setState({ beneficiaryGender: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Area of operation:
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12}>
            <Typography
              variant="body1"
              color="primary"
              style={{ fontWeight: "bold" }}
              gutterBottom
            >
              Target districts:
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="select-multiple-checkbox">
                Central
              </InputLabel>
              <Select
                multiple
                value={this.state.centralDistricts}
                onChange={this.onChangeCentralDistricts}
                input={<Input id="select-multiple-checkbox" />}
                renderValue={selected => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {centralDistricts.map(name => (
                  <MenuItem key={name} value={name}>
                    <Checkbox
                      checked={this.state.centralDistricts.indexOf(name) > -1}
                    />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="select-multiple-checkbox">East</InputLabel>
              <Select
                multiple
                value={this.state.easternDistricts}
                onChange={this.onChangeEasternDistricts}
                input={<Input id="select-multiple-checkbox" />}
                renderValue={selected => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {easternDistricts.map(name => (
                  <MenuItem key={name} value={name}>
                    <Checkbox
                      checked={this.state.easternDistricts.indexOf(name) > -1}
                    />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="select-multiple-checkbox">North</InputLabel>
              <Select
                multiple
                value={this.state.northernDistricts}
                onChange={this.onChangeNorthernDistricts}
                input={<Input id="select-multiple-checkbox" />}
                renderValue={selected => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {northernDistricts.map(name => (
                  <MenuItem key={name} value={name}>
                    <Checkbox
                      checked={this.state.northernDistricts.indexOf(name) > -1}
                    />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="select-multiple-checkbox">West</InputLabel>
              <Select
                multiple
                value={this.state.westernDistricts}
                onChange={this.onChangeWesternDistricts}
                input={<Input id="select-multiple-checkbox" />}
                renderValue={selected => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {westernDistricts.map(name => (
                  <MenuItem key={name} value={name}>
                    <Checkbox
                      checked={this.state.westernDistricts.indexOf(name) > -1}
                    />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography
              variant="body1"
              color="primary"
              style={{ fontWeight: "bold" }}
              gutterBottom
            >
              Key beneficiaries:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="select-multiple-checkbox">
                Key beneficiaries
              </InputLabel>
              <Select
                multiple
                value={this.state.beneficiaries}
                onChange={this.onChangeBeneficiaries}
                input={<Input id="select-multiple-checkbox" />}
                renderValue={selected => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {beneficiaries.map(name => (
                  <MenuItem key={name} value={name}>
                    <Checkbox
                      checked={this.state.beneficiaries.indexOf(name) > -1}
                    />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="select-multiple-checkbox">
                Category
              </InputLabel>
              <Select
                multiple
                value={this.state.beneficiaryCategory}
                onChange={this.onChangeBeneficiaryCategory}
                input={<Input id="select-multiple-checkbox" />}
                renderValue={selected => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {beneficiaryCategory.map(name => (
                  <MenuItem key={name} value={name}>
                    <Checkbox
                      checked={
                        this.state.beneficiaryCategory.indexOf(name) > -1
                      }
                    />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="select-multiple-checkbox">Gender</InputLabel>
              <Select
                multiple
                value={this.state.beneficiaryGender}
                onChange={this.onChangeBeneficiaryGender}
                input={<Input id="select-multiple-checkbox" />}
                renderValue={selected => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {beneficiaryGender.map(name => (
                  <MenuItem key={name} value={name}>
                    <Checkbox
                      checked={this.state.beneficiaryGender.indexOf(name) > -1}
                    />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(OperationsForm);
