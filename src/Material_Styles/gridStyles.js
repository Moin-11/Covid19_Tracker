import { makeStyles } from "@material-ui/core";

import Green from "@material-ui/core/colors/green";
import Blue from "@material-ui/core/colors/blue";
import Red from "@material-ui/core/colors/red";

export const gridStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    padding: "0px 0px",
    margin: "50px 20px 50px 20px !important",

    borderWidth: "100px",
    borderBottomColor: "green",
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    justifyItems: "top",
  },

  Confirmed: {
    borderBottomColor: Blue.A400,
  },

  Recovered: {
    borderBottomColor: Green.A400,
  },

  Deaths: {
    borderBottomColor: Red.A400,
  },
}));
