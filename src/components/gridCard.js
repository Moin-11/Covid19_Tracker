import React from "react";
import { gridStyle } from "../Material_Styles/gridStyles";
import { Grid, Paper, Typography } from "@material-ui/core";
import cx from "classnames";
import CountUp from "react-countup";

export const GridCard = ({ className, title, statistic }) => {
  const classes = gridStyle();

  return (
    <Grid item xs={12} md={4}>
      <Paper
        variant="outlined"
        className={cx(classes.paper, classes[`${className}`])}
      >
        <Typography variant="h1">{title}</Typography>
        <Typography variant="h2">
          <CountUp start={0} end={statistic} duration={2} />
        </Typography>
      </Paper>
    </Grid>
  );
};
