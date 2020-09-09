import React from "react";

import { FormControlLabel, Switch, Typography } from "@material-ui/core";

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
        label={
          <Typography variant="h4">
            {showChart ? "Display Table" : "Display Chart"}
          </Typography>
        }
      />
    </div>
  );
};
export default DisplaySwitch;
