import React, { useState, useEffect } from "react";
import dropDownStyles from "../Material_Styles/dropDownMenuStyles";
import { fetchCountries } from "../api/apis";
//Material-UI Imports
import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";

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
    <div
      style={{
        margin: "30px 0px 0px 0px",
        textAlign: "center",
        backgroundColor: "greenyellow",
      }}
    >
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="select-a-country">Country</InputLabel>
        <Select
          labelId="select-a-country"
          id="select-a-country"
          onChange={(e) => {
            handleCountryChange(e.target.value);
          }}
          label="Country"
        >
          <MenuItem key={-1}>
            <em>Global</em>
          </MenuItem>
          {countries.map((country, index) => {
            return (
              <MenuItem value={country} key={index}>
                {country}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropDownMenu;
