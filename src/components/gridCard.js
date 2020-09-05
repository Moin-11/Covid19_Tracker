import {gridStyle} from "../Material_Styles/gridStyles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import React from 'react';


export const GridCard = ({title, statistic}) => {

    const classes = gridStyle();

  return (
    <Grid item xs={4}>
      <Paper className={classes.paper}>
        <h1>{title}</h1>
        <h2>{statistic}</h2>
      </Paper>
    </Grid>
  );
};
