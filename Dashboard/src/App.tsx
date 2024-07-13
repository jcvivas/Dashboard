import Grid from "@mui/material/Unstable_Grid2";
import BasicTable from "./components/BasicTable";
import Indicator from "./components/Indicator";
import ControlPanel from "./components/ControlPanel";
import WeatherChart from "./components/WeatherChart";
import WeatherChart2 from "./components/WeatherChart2";
import Header from "./components/Header";
import WeatherChart3 from "./components/WeatherChart3";

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [indicators, setIndicators] = useState([]);
  let [selectedVariable, setSelectedVariable] = useState("");

  {
    /* Hook: useEffect */
  }

  useEffect(() => {
    (async () => {
      {
        /* Request */
      }

      let API_KEY = "81aebda6dbd5149683c967788c6a0b21";
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=Guayaquil&mode=xml&appid=${API_KEY}`
      );
      let savedTextXML = await response.text();

      {
        /* XML Parser */
      }

      const parser = new DOMParser();
      const xml = parser.parseFromString(savedTextXML, "application/xml");

      let dataToIndicators = new Array();

      let guayaquil = xml.getElementsByTagName("name")[0];
      const city = guayaquil.textContent;

      let ecuador = xml.getElementsByTagName("country")[0];
      const country = ecuador.textContent;

      let location = xml.getElementsByTagName("location")[1];
      dataToIndicators.push(["Location", country, city]);

      let geobaseid = location.getAttribute("geobaseid");
      dataToIndicators.push(["Location", "geobaseid", geobaseid]);

      let latitude = location.getAttribute("latitude");
      dataToIndicators.push(["Location", "Latitude", latitude]);

      let longitude = location.getAttribute("longitude");
      dataToIndicators.push(["Location", "Longitude", longitude]);


      let forecast = xml.getElementsByTagName("forecast")[0].getElementsByTagName("time")[0];

      let probability = forecast.getElementsByTagName("precipitation")[0]?.getAttribute("probability");
      dataToIndicators.push(["Precipitation", "Probabilty", probability]);

      
      

      let pressure = forecast.getElementsByTagName("pressure")[0]?.getAttribute("value");
      dataToIndicators.push(["Pressure", "Pressure", pressure]);

      //console.log(dataToIndicators)

      {
        /* Renderice el arreglo de resultados en un arreglo de elementos Indicator */
      }

      let indicatorsElements = Array.from(dataToIndicators).map((element) => (
        <Indicator
          title={element[0]}
          subtitle={element[1]}
          value={element[2]}
        />
      ));

      {
        /* Modificación de la variable de estado mediante la función de actualización */
      }

      setIndicators(indicatorsElements);
      selectedVariable.split;
    })();
  }, []);

  return (
    <Grid container spacing={5}>
      <Grid xs={12} lg={12}>
        <Header />
      </Grid>      
      <Grid alignItems={"center"} xs={12} lg={12}>
        <h1>INDICATORS</h1>
      </Grid> 
      <Grid id="indicators" xs={6} lg={6}>
        {indicators[0]}
      </Grid>

      <Grid xs={6} md={4} lg={6}>
        {indicators[1]}
      </Grid>

      <Grid xs={6} lg={6}>
        {indicators[2]}
      </Grid>

      <Grid xs={6} md={4} lg={6}>
        {indicators[3]}
      </Grid>

      <Grid xs={6} lg={6}>
        {indicators[4]}
      </Grid>

      <Grid xs={6} md={4} lg={6}>
        {indicators[5]}
      </Grid>

      <Grid xs={12} lg={12}>
      <h2>METEREOLOGICAL VARIABLES</h2>
        <ControlPanel setSelectedVariable={setSelectedVariable} />
      </Grid>

      <Grid id="table" xs={12} md={6} lg={12}>
      <h1>PREDICTIONS</h1>
        <BasicTable />
      </Grid>
      <Grid alignItems={"center"} xs={12} lg={12}>
              <h1>CHARTS</h1>
            </Grid>
      <Grid id="chart" justifyContent={"center"} xs={12} lg={12}>
        <WeatherChart></WeatherChart>
      </Grid>

       
      <Grid xs={6} lg={6}>
        <WeatherChart2></WeatherChart2>
      </Grid>

      <Grid xs={6} lg={6}>
        <WeatherChart3></WeatherChart3>
      </Grid>

    </Grid>
  );
}

export default App;
