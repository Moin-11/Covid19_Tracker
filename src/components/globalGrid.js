import React from "react";

//Material-UI Imports
import { gridStyle } from "../Material_Styles/gridStyles";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const GlobalGrid = () => {
const classes = gridStyle();

  return(
  
  <div className={classes.root}>
    <Grid container spacing={10}>
      <Grid item  xs = {4}>
        <Paper className={classes.paper}>
         <h1>Confirmed Cases:</h1>
         <h2>123456789</h2>
          </Paper>
      </Grid>
      <Grid item  xs = {4}>
        <Paper className={classes.paper}>
         <h1>Recovered Cases:</h1>
         <h2>123456789</h2>
          </Paper>
      </Grid>
      <Grid item  xs = {4}>
        <Paper className={classes.paper}>
         <h1>Death Cases:</h1>
         <h2>123456789</h2>
          </Paper>
      </Grid>
      
    </Grid>
    </div>
    );
}

export default GlobalGrid