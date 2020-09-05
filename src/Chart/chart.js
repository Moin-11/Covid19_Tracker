import React from "react";
import BarChart from "./barChart";
import GlobalLineChart from "./lineChart";

const ChartDisplay = ({
  data: { confirmed, recovered, deaths },
  timelineStats,
  country,
}) => {
  return (
    <div
      style={{
        minHeight: "50vh",
        width: "100%",
        margin: "30px 20px 20px 30px",
      }}
    >
      {country ? (
        <BarChart
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
