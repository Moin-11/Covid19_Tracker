import React, { useState, useEffect } from "react";
import Header from "./header";
import GlobalGrid from "./globalGrid";
import DropDownMenu from "./dropdownMenu";
import { fetchRelevantData, fetchTimelineStats } from "../api/apis";
import ChartDisplay from "../Chart/chart";
const App = () => {
  const [country, setcountry] = useState("");
  const [data, setData] = useState({});
  const [timelineStats, setTimelineStats] = useState([]);

  useEffect(() => {
    handleCountryChange();

    fetchTimelineStats().then((data) => {
      setTimelineStats(data);
    });
  }, []);

  const handleCountryChange = async (country) => {
    setcountry(country);
    setData(await fetchRelevantData(country));
  };
  console.log(timelineStats);
  return (
    <div>
      <Header />
      <GlobalGrid data={data} />
      <DropDownMenu handleCountryChange={handleCountryChange} />
      <ChartDisplay
        data={data}
        timelineStats={timelineStats}
        country={country}
      />
    </div>
  );
};

export default App;
