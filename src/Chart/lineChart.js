import React from "react";
import { Line } from "react-chartjs-2";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";

const GlobalLineChart = ({ timelineStats }) => {
  return (
    <Line
      options={{ maintainAspectRatio: true, responsive: true }}
      data={{
        labels: timelineStats?.map(({ date }) => date),
        datasets: [
          {
            data: timelineStats?.map((stats) => stats?.confirmed),
            label: "Confirmed",
            borderColor: green.A400,
            fill: true,
            hoverBackgroundColor: green[100],
          },
          {
            data: timelineStats?.map((stats) => stats?.deaths),
            label: "Deaths",
            borderColor: red.A400,
            fill: true,
            hoverBackgroundColor: red[100],
          },
        ],
      }}
    />
  );
};

export default GlobalLineChart;
