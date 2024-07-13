import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../App.css';

export default function BasicTable() {

    const [rowsTable, setRowsTable] = useState([]);

    {/* Hook: useEffect */ }

    useEffect(() => {

        (async () => {

            {/* Request */ }

            let API_KEY = "81aebda6dbd5149683c967788c6a0b21"
            let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Guayaquil&mode=xml&appid=${API_KEY}`)
            let savedTextXML = await response.text();

            {/* XML Parser */ }

            const parser = new DOMParser();
            const xml = parser.parseFromString(savedTextXML, "application/xml");

            let arrayObjects = Array.from( xml.getElementsByTagName("time") ).map( (timeElement) =>  {
					
                let rangeHours = timeElement.getAttribute("from").split("T")[1] + " - " + timeElement.getAttribute("to").split("T")[1]

                let windDirection = timeElement.getElementsByTagName("windDirection")[0].getAttribute("deg") + " "+  timeElement.getElementsByTagName("windDirection")[0].getAttribute("code") 
                   
                let windSpeed = timeElement.getElementsByTagName("windSpeed")[0].getAttribute("mps") + " "+  timeElement.getElementsByTagName("windSpeed")[0].getAttribute("unit") 

                let windGust = timeElement.getElementsByTagName("windGust")[0].getAttribute("gust") + " "+  timeElement.getElementsByTagName("windGust")[0].getAttribute("unit") 

                let temperature = timeElement.getElementsByTagName("temperature")[0].getAttribute("value") + " "+  timeElement.getElementsByTagName("temperature")[0].getAttribute("unit") 
                return { "rangeHours": rangeHours,"windDirection": windDirection, "windSpeed": windSpeed, "windGust": windGust, "temperature":temperature }
               
            })
            

            setRowsTable(arrayObjects);
        })()
    }, [])

    return (
        <TableContainer component={Paper} className="table-container">
            <Table aria-label="simple table" className="custom-table">
                <TableHead>
                    <TableRow>
                        <TableCell className="header-cell" ><p className='textCells'>Range Hours</p></TableCell>
                        <TableCell className="header-cell" ><p className='textCells'>Wind Direction</p></TableCell>
                        <TableCell align="center" className="header-cell" ><p className='textCells'>Wind Speed</p></TableCell>
                        <TableCell align="center" className="header-cell" ><p className='textCells'>Wind Gust</p></TableCell>
                        <TableCell align="center" className="header-cell" ><p className='textCells'>Temperature</p></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowsTable.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>{row.rangeHours}</TableCell>
                            <TableCell>{row.windDirection}</TableCell>
                            <TableCell align="center">{row.windSpeed}</TableCell>
                            <TableCell align="center">{row.windGust}</TableCell>
                            <TableCell align="center">{row.temperature}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}