import React from "react";
import { GridCard } from "./gridCard";
//Material-UI Imports
import { gridStyle } from "../Material_Styles/gridStyles";

import Grid from "@material-ui/core/Grid";

const GlobalGrid = ({ data: { confirmed, recovered, deaths } }) => {
  const classes = gridStyle();

  if (!confirmed) {
    return <div>Loading</div>;
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <GridCard
          title="Confirmed"
          statistic={confirmed.value}
          className="Confirmed"
        />
        <GridCard
          title="Recovered"
          statistic={recovered.value}
          className="Recovered"
        />
        <GridCard title="Deaths" statistic={deaths.value} className="Deaths" />
      </Grid>
    </div>
  );
};

export default GlobalGrid;
