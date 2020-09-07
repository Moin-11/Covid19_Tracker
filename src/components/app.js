import React, { useState, useEffect } from "react";
import Header from "./header";
import GlobalGrid from "./globalGrid";
import { fetchRelevantData, fetchTimelineStats } from "../api/apis";
import DataDisplay from "./DataDisplay";

import theme from "../Material_Styles/GlobalTheme";
import { responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles";
import OptionsRow from "./OptionsRow";

const Theme = responsiveFontSizes(theme);

const App = () => {
  const [country, setcountry] = useState("");
  const [data, setData] = useState({});
  const [timelineStats, setTimelineStats] = useState([]);
  const [showChart, setShowChart] = useState(false);

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

  const handleDisplayChange = () => {
    setShowChart(!showChart);
  };

  return (
    <div>
      <ThemeProvider theme={Theme}>
        <Header />
        <GlobalGrid data={data} />
        <OptionsRow
          handleCountryChange={handleCountryChange}
          handleDisplayChange={handleDisplayChange}
          showChart={showChart}
        />
        <DataDisplay
          showChart={showChart}
          data={data}
          timelineStats={timelineStats}
          country={country}
        />
      </ThemeProvider>
    </div>
  );
};

export default App;
