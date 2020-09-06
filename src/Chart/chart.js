import React from "react";
import DoughnutChart from "./doughnutChart";
import GlobalLineChart from "./lineChart";

const ChartDisplay = ({
  data: { confirmed, recovered, deaths },
  timelineStats,
  country,
}) => {
  return (
    <div
      style={{
        height: "70vh",
      }}
    >
      {country ? (
        <DoughnutChart
          confirmed={confirmed.value}
          recovered={recovered.value}
          deaths={deaths.value}
        />
      ) : (
        <GlobalLineChart timelineStats={timelineStats} />
      )}
    </div>
  );
};

export default ChartDisplay;
