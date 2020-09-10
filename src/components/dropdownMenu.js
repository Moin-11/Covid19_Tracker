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
  useMediaQuery,
} from "@material-ui/core";

const DropDownMenu = ({ handleCountryChange }) => {
  const classes = dropDownStyles();

  const [countries, setCountries] = useState([]);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const dropDownProps = {
    variant: isSmallScreen ? "h5" : "h4",
  };
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
        <Typography {...dropDownProps}>Country</Typography>
      </InputLabel>
      <Select
        labelId="select-a-country"
        id="select-a-country"
        onChange={(e) => {
          handleCountryChange(e.target.value);
        }}
        label="Country"
        autoWidth
      >
        <MenuItem key={-1}>
          <em>
            <Typography variant="h4">Global</Typography>
          </em>
        </MenuItem>
        {countries.map((country, index) => {
          return (
            <MenuItem value={country} key={index}>
              <Typography {...dropDownProps}>{country}</Typography>
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default DropDownMenu;
