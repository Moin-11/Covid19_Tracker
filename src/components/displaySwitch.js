import React from "react";

import {
  FormControlLabel,
  Switch,
  Typography,
  useMediaQuery,
} from "@material-ui/core";

const DisplaySwitch = ({ showChart, handleDisplayChange }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

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
          <Typography variant={isSmallScreen ? "h5" : "h4"}>
            {showChart ? "Display Table" : "Display Chart"}
          </Typography>
        }
      />
    </div>
  );
};
export default DisplaySwitch;
