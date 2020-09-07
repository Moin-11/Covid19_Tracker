import React from "react";

import { FormControlLabel, Switch } from "@material-ui/core";

const DisplaySwitch = ({ showChart, handleDisplayChange }) => {
  return (
    <div>
      <FormControlLabel
        control={
          <Switch
            checked={showChart}
            onChange={handleDisplayChange}
            name="display"
          />
        }
        label="Display Chart"
      />
    </div>
  );
};
export default DisplaySwitch;
