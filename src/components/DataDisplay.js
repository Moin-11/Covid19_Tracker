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
    <ChartDisplay data={data} timelineStats={timelineStats} country={country} />
  ) : (
    <TableDisplay tableData={tableData} />
  );
};
export default DataDisplay;
