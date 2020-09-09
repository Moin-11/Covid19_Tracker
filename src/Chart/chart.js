import React from "react";
import GlobalLineChart from "./lineChart";
import BarChart from "./BarChart";

const ChartDisplay = ({
  data: { confirmed, recovered, deaths },
  timelineStats,
  country,
}) => {
  return country ? (
    <BarChart
      confirmed={confirmed.value}
      recovered={recovered.value}
      deaths={deaths.value}
    />
  ) : (
    <GlobalLineChart timelineStats={timelineStats} />
  );
};

export default ChartDisplay;
