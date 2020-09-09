import React, { useState, useEffect } from "react";
import dropDownStyles from "../Material_Styles/dropDownMenuStyles";
import { fetchCountries } from "../api/apis";
//Material-UI Imports
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Typography,
} from "@material-ui/core";

const DropDownMenu = ({ handleCountryChange }) => {
  const classes = dropDownStyles();

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchCountries();
      setCountries(data.map((country) => country.name));
    };

    fetch();
  }, []);
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="select-a-country">
        <Typography variant="h4">Country</Typography>
      </InputLabel>
      <Select
        labelId="select-a-country"
        id="select-a-country"
        onChange={(e) => {
          handleCountryChange(e.target.value);
        }}
        label="Country"
      >
        <MenuItem key={-1}>
          <em>
            <Typography variant="h4">Global</Typography>
          </em>
        </MenuItem>
        {countries.map((country, index) => {
          return (
            <MenuItem value={country} key={index}>
              <Typography variant="h4">{country}</Typography>
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default DropDownMenu;
