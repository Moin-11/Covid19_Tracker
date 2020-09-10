import { makeStyles } from "@material-ui/core";

import Green from "@material-ui/core/colors/green";
import Blue from "@material-ui/core/colors/blue";
import Red from "@material-ui/core/colors/red";

export const gridStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    padding: "0px 0px",
    margin: "50px 10px 50px 10px !important",
  },
  paper: {
    borderBottomWidth: 10,
    padding: theme.spacing(5),
    textAlign: "center",
    justifyItems: "top",
  },

  Confirmed: {
    borderBottomColor: Green.A400,
  },

  Recovered: {
    borderBottomColor: Blue.A100,
  },

  Deaths: {
    borderBottomColor: Red.A400,
  },
}));
