import { makeStyles } from "@material-ui/core";

export const gridStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    padding: "0px 20px 0px 20px",
    margin: "0px 20px !important",
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    textAlign: "center",
    justifyItems: "top",
  },

  
}));
