// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Grid from "@mui/material/Unstable_Grid2";
// import Indicator from "./components/Indicator";
// import Summary from "./components/Summary";
// import BasicTable from "./components/BasicTable";
// import WeatherChart from "./components/WeatherChart";
// import ControlPanel from "./components/ControlPanel";

import "./App.css";
import {  useState } from "react";

function App() {
  {
    /* Variable de estado y función de actualización */
  }

  // const [indicators, setIndicators] = useState([])
  // const [rowsTable, setRowsTable] = useState([])
  // {
  //   /* Función para el efecto secundario a ejecutar y Arreglo de dependencias */
  // }

  // useEffect(() => {
  //   (async () => {

  //     let savedTextXML = localStorage.getItem("openWeatherMap");
  //     let expiringTime = localStorage.getItem("expiringTime");

  //     {
  //       /* 3. Obtenga la estampa de tiempo actual */
  //     }

  //     let nowTime = new Date().getTime();
  //     {
  //       /* 4. Realiza la petición asicrónica cuando: 
  //                (1) La estampa de tiempo de expiración (expiringTime) es nula, o  
  //                (2) La estampa de tiempo actual es mayor al tiempo de expiración */
  //     }

  //     if (expiringTime === null || nowTime > parseInt(expiringTime)) {
  //       {
  //         /* 5. Request */
  //       }

  //       let API_KEY = "81aebda6dbd5149683c967788c6a0b21";
  //       let response = await fetch(
  //         `https://api.openweathermap.org/data/2.5/forecast?q=Guayaquil&mode=xml&appid=${API_KEY}`
  //       );
  //       savedTextXML = await response.text();

  //       {
  //         /* 6. Diferencia de tiempo */
  //       }

  //       let hours = 1;
  //       let delay = hours * 3600000;

  //       {
  //         /* 7. En el LocalStorage, almacena texto en la clave openWeatherMap y la estampa de tiempo de expiración */
  //       }

  //       localStorage.setItem("openWeatherMap", savedTextXML);
  //       localStorage.setItem("expiringTime", (nowTime + delay).toString());
  //     }

  //     {
  //       /* XML Parser */
  //     }
      
  //     const parser = new DOMParser();
  //     const xml = parser.parseFromString(savedTextXML, "application/xml");


  //     {
  //       /* Arreglo para agregar los resultados */
  //     }

  //     let dataToIndicators = new Array();

  //     {
  //       /* 
  //         Análisis, extracción y almacenamiento del contenido del XML 
  //         en el arreglo de resultados
  //     */
  //     }

  //     let location = xml.getElementsByTagName("location")[1];

  //     let geobaseid = location.getAttribute("geobaseid");
  //     dataToIndicators.push(["Location", "geobaseid", geobaseid]);

  //     let latitude = location.getAttribute("latitude");
  //     dataToIndicators.push(["Location", "Latitude", latitude]);

  //     let longitude = location.getAttribute("longitude");
  //     dataToIndicators.push(["Location", "Longitude", longitude]);
      

  //     //console.log( dataToIndicators )

  //     let indicatorsElements = Array.from(dataToIndicators).map((element) => (
  //       <Indicator
  //         title={element[0]}
  //         subtitle={element[1]}
  //         value={element[2]}
  //       />
  //     ));

  //     {
  //       /* Modificación de la variable de estado mediante la función de actualización */
  //     }

  //     setIndicators(indicatorsElements);
  //      {/* 
  //                2. Procese los resultados de acuerdo con el diseño anterior.
  //                   Revise la estructura del documento XML para extraer los datos necesarios. 
  //            */}
             

  //            let arrayObjects = Array.from( xml.getElementsByTagName("time") ).map( (timeElement) =>  {
					
  //             let rangeHours = timeElement.getAttribute("from").split("T")[1] + " - " + timeElement.getAttribute("to").split("T")[1]

  //             let windDirection = timeElement.getElementsByTagName("windDirection")[0].getAttribute("deg") + " "+  timeElement.getElementsByTagName("windDirection")[0].getAttribute("code") 
       
  //             return { "rangeHours": rangeHours,"windDirection": windDirection }
     
  //         })
  //         arrayObjects = arrayObjects.slice(0,8)
			
  //            {/* 3. Actualice de la variable de estado mediante la función de actualización */}

  //            setRowsTable(arrayObjects)
  //   })();
  // }, []);

  return (
    <Grid container spacing={5}>
      <p>Hola</p>
    </Grid>
  );
}

export default App;
