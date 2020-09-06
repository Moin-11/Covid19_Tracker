import React from "react";
import { Doughnut } from "react-chartjs-2";
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";

const DoughnutChart = ({ confirmed, recovered, deaths }) => {
  return (
    <Doughnut
      options={{ maintainAspectRatio: "false" }}
      data={{
        labels: ["Confirmed", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [blue.A400, green.A400, red.A400],
            data: [confirmed, recovered, deaths],
          },
        ],
      }}
    />
  );
};
export default DoughnutChart;
