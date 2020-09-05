import React from "react";
import { Typography } from "@material-ui/core";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0px 0px 60px 0px",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2">COVID TRACKER BY MOIN</Typography>
      <Typography variant="h3">moin11.dev@gmail.com</Typography>
    </div>
  );
};

export default Header;
