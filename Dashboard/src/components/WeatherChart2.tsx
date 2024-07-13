import  { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import "../App.css"
export default function WeatherChart2() {
    const [chart, setChart] = useState<Array<Array<any>>>([]);
    
    useEffect(() => {
        (async () => {
            let API_KEY = "81aebda6dbd5149683c967788c6a0b21";
            let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Guayaquil&mode=xml&appid=${API_KEY}`);
            let savedTextXML = await response.text();

            const parser = new DOMParser();
            const xml = parser.parseFromString(savedTextXML, "application/xml");

            const timeElements = xml.getElementsByTagName('time');
            const data: Array<Array<any>> = [['Time', 'Wind Direction (deg)']];

            for (let i = 0; i < timeElements.length; i++) {
                let from = timeElements[i].getAttribute('from');
                let windDirection = parseFloat(timeElements[i].getElementsByTagName('windDirection')[0].getAttribute('deg'));
                
                data.push([from, windDirection]);
            }

            setChart(data);
        })();
    }, []);

    const options = {
        title: 'Wind Direction vs Time',
        hAxis: { title: 'Time' },
        vAxis: { title: 'deg' },
        legend: { position: 'bottom' },
        colors: ['Green'],
    };

    return (
        <Chart
            className='chart'
            chartType="ColumnChart"
            width="100%"
            height="500px"
            data={chart}
            options={options}
        />
    );
}
