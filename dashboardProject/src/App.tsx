import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

import Indicator from "./components/Indicator";
import Summary from "./components/Summary";
//import BasicTable from "./components/BasicTable";
import WeatherChart from "./components/WeatherChart";
import ControlPanel from "./components/ControlPanel";

import "./App.css";

function App() {
  return (
    <Grid>
        <Grid>1</Grid>
        <Grid>2</Grid>
        <Grid>3</Grid>
        <Grid>4</Grid>
        <Grid>5</Grid>
        <Grid>6</Grid>
      </Grid>
  )
}

export default App;
