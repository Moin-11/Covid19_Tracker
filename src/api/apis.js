import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchCountries = async () => {
  try {
    const response = await axios.get(`${url}/countries`);
    return response.data.countries;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const fetchRelevantData = async (country) => {
  let mutableURL = url;

  // We check if country is present and modify the url. 
  //JSON-data structure is same
  // hence one function fetches both Global data in absence of country
  // and country data if country is present

  if (country) {
    mutableURL = `${url}/countries/${country}`;
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(mutableURL);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const fetchTimelineStats = async () => {
const {data} = await axios.get(`${url}/daily`)
const newData = data.map(({confirmed, recovered, deaths, reportDate: date}) => ({confirmed: confirmed.total, recovered: recovered.total, deaths: deaths.total, date 
})) 
return newData 

}