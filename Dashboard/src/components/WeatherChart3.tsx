import  { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import "../App.css"
export default function WeatherChart3() {
    const [chart, setChart] = useState([]);
    
    useEffect(() => {
        (async () => {
            let API_KEY = "81aebda6dbd5149683c967788c6a0b21";
            let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Guayaquil&mode=xml&appid=${API_KEY}`);
            let savedTextXML = await response.text();

            const parser = new DOMParser();
            const xml = parser.parseFromString(savedTextXML, "application/xml");

            const timeElements = xml.getElementsByTagName('time');
            const data: Array<Array<any>> = [['Time', 'Temperature (Kelvin)']];

            for (let i = 0; i < timeElements.length; i++) {
                let from = timeElements[i].getAttribute('from');
                let temperature = parseFloat(timeElements[i].getElementsByTagName('temperature')[0].getAttribute('value'));
                
                data.push([from, temperature]);
            }

            setChart(data);
        })();
    }, []);

    const options = {
        title: 'Temperature vs Time',
        hAxis: { title: 'Time' },
        vAxis: { title: 'Temperature (kelvin)' },
        legend: { position: 'bottom' },
        colors: ['#FF5733'],
    };

    return (
        <Chart
            className='chart'
            chartType="BarChart"
            width="100%"
            height="500px"
            data={chart}
            options={options}
        />
    );
}
