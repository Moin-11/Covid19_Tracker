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
        display: "flex",
        justifyContent: "space-around",
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
