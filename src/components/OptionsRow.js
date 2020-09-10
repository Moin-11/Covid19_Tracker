import React from "react";
import DropDownMenu from "./dropdownMenu";
import DisplaySwitch from "./displaySwitch";

const OptionsRow = ({
  handleCountryChange,
  showChart,
  handleDisplayChange,
}) => {
  return (
    <div
      style={{
        margin: "30px 10px 30px 10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <DropDownMenu handleCountryChange={handleCountryChange} />
      <DisplaySwitch
        showChart={showChart}
        handleDisplayChange={handleDisplayChange}
      />
    </div>
  );
};

export default OptionsRow;
