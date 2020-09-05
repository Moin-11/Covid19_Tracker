import { createMuiTheme } from "@material-ui/core/styles";
import common from "@material-ui/core/colors/common";

const theme = createMuiTheme({
  typography: {
    subtitle1: {
      fontFamily: "Share",

      fontSize: "3.0rem",
      color: common.black,
    },
    h1: {
      fontFamily: "Share",
      fontSize: "2.5rem",
      color: common.black,
    },

    h2: {
      fontFamily: "Share",
      fontSize: "2.0rem",
      color: common.black,
    },

    h3: {
      fontFamily: "Share",
      fontSize: "1.5rem",
      color: common.black,
    },
    h4: {
      fontFamily: "Share",
      fontSize: "1.0rem",
      color: common.black,
    },
    h5: {
      fontFamily: "Share",
      fontSize: "0.5rem",
      color: common.black,
    },
  },
});

export default theme;
