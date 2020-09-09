import React, { useEffect, useState } from "react";
import ChartDisplay from "../Chart/chart";
import TableDisplay from "./TableStats";
import { fetchTableData } from "../api/apis";
const DataDisplay = ({ showChart, country, timelineStats, data }) => {
  const [tableData, setTableData] = useState({});

  useEffect(() => {
    const fetchTabData = async () => {
      setTableData(await fetchTableData());
    };

    fetchTabData();
  }, []);

  return showChart ? (
    <div
      style={{
        margin: "50px 20px 50px 20px",
        height: "100vh",
        width: "auto",
      }}
    >
      <ChartDisplay
        data={data}
        timelineStats={timelineStats}
        country={country}
      />
    </div>
  ) : (
    <div
      style={{
        margin: "30px 10px 10px 30px",
      }}
    >
      <TableDisplay tableData={tableData} />
    </div>
  );
};
export default DataDisplay;
