import { makeStyles } from "@material-ui/core";

export const gridStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    padding: "0px 0px",
    margin: "60px 20px !important",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    justifyItems: "top",
    borderBottomColor: "green",
  },
}));
