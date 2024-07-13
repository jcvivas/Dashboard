import { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import Paper from '@mui/material/Paper';
import "../App.css"


export default function WeatherChart() {
    const [chart, setChart] = useState([]);
    
    useEffect(() => {
        (async () => {
            let API_KEY = "81aebda6dbd5149683c967788c6a0b21";
            let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Guayaquil&mode=xml&appid=${API_KEY}`);
            let savedTextXML = await response.text();

            const parser = new DOMParser();
            const xml = parser.parseFromString(savedTextXML, "application/xml");

            const timeElements = xml.getElementsByTagName('time');
            const data: Array<Array<any>> = [['Time', 'Wind Speed (m/s)', 'Wind Gust (m/s)']];

            for (let i = 0; i < timeElements.length; i++) {
                let from = timeElements[i].getAttribute('from');
                let windSpeed = parseFloat(timeElements[i].getElementsByTagName('windSpeed')[0].getAttribute('mps'));
                let windGust = parseFloat(timeElements[i].getElementsByTagName('windGust')[0].getAttribute('gust'));

                data.push([from, windSpeed, windGust]);
            }

            setChart(data);
        })();
    }, []);

    const options = {
        title: ` Wind Speed, Wind Gust vs Time`,
        curveType: "function",
        legend: { position: 'bottom' },
        hAxis: { title: 'Time' },
        vAxis: { title: 'm/s' }
    };

    return (
        <Paper
            sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column'
            }}
        >
        <Chart
            className='chart'
            chartType="LineChart"
            width="100%"
            height="500px"
            data={chart}
            options={options}
        />
        </Paper>
    );
}
