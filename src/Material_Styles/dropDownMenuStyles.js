import { makeStyles } from "@material-ui/core";

const dropDownStyles = makeStyles((theme) => ({
  formControl: {
    backgroundColor: "transparent",
    margin: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: 140,
    },
    width: 200,
  },
}));

export default dropDownStyles;
