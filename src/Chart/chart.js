import React, { useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";

const ChartDisplay = ({
  data: { confirmed, recovered, deaths },
  timelineStats,
  country,
}) => {
  // Charts
  const displayBar = confirmed ? (
    <Bar
      data={{
        labels: ["Confirmed", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["blue", "green", "red"],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
    />
  ) : null;

  const liner = (
    <Line
      data={{
        labels: timelineStats?.map(({ date }) => date),
        datasets: [
          {
            data: timelineStats?.map((stats) => stats?.confirmed),
            label: "Confirmed",
            borderColor: "green",
            fill: true,
          },
          {
            data: timelineStats?.map((stats) => stats?.recovered),
            label: "Recovered",
            borderColor: "blue",
            fill: true,
          },
          {
            data: timelineStats?.map((stats) => stats?.deaths),
            label: "Deaths",
            borderColor: "red",
            fill: true,
          },
        ],
      }}
    />
  );

  return <div>{country ? displayBar : liner}</div>;
};

export default ChartDisplay;
