import React, { useState, useEffect } from "react";
import { GridCard } from "./gridCard";
//Material-UI Imports
import { gridStyle } from "../Material_Styles/gridStyles";

import Grid from "@material-ui/core/Grid";
import { fetchRelevantData } from "../api/apis";

const GlobalGrid = ({ data: { confirmed, recovered, deaths } }) => {
  
  const classes = gridStyle();

  
  if(!confirmed){
    return <div>Loading</div>
  }
  
  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <GridCard title="confirmed" statistic={confirmed.value} />
        <GridCard title="recovered" statistic={recovered.value} />
        <GridCard title="deaths" statistic={deaths.value} />
      </Grid>
    </div>
  );
};

export default GlobalGrid;
