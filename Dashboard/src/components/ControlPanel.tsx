import { useState, useRef } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default function ControlPanel({ setSelectedVariable }) {

    const [, setSelected] = useState(-1);
    const descriptionRef = useRef<HTMLDivElement>(null);

    const items = [
        { "name": "Humidity", "description": "Amount of water vapor present in the air, usually expressed as a percentage." },
        { "name": "Temperature", "description": "Measure of heat or cold, generally expressed in degrees Celsius or Fahrenheit." },
        { "name": "Wind Speed", "description": "Speed of the moving air, generally measured in meters per second or kilometers per hour." },
        { "name": "Wind Direction", "description": "The direction from which the wind is blowing, usually expressed in degrees." },
        { "name": "Wind Gust", "description": "A brief increase in the speed of the wind, generally measured in meters per second or kilometers per hour." },
        { "name": "Pressure", "description": "The force exerted by the atmosphere at a given point, usually measured in hectopascals (hPa) or millibars (mb)." },
        { "name": "Latitude", "description": "The geographic coordinate that specifies the north–south position of a point on the Earth's surface, usually expressed in degrees." },
        { "name": "Longitude", "description": "The geographic coordinate that specifies the east–west position of a point on the Earth's surface, usually expressed in degrees." }
    ];
    

    const options = items.map((item, key) => <MenuItem key={key} value={key}>{item["name"]}</MenuItem>);

    const handleChange = (event: SelectChangeEvent) => {
        let idx = parseInt(event.target.value)
        setSelected(idx);
        setSelectedVariable(items[idx].name);

        if (descriptionRef.current !== null) {
            descriptionRef.current.innerHTML = (idx >= 0) ? items[idx]["description"] : ""
        }

    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem'
            }}
        >
            <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    maxWidth: '500px'
                }}
            >
                <Typography mb={2} component="h3" variant="h6" color="primary">
                    Meteorological Variables
                </Typography>

                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="simple-select-label">Variables</InputLabel>
                        <Select
                            labelId="simple-select-label"
                            id="simple-select"
                            label="Variables"
                            defaultValue='-1'
                            onChange={handleChange}
                        >
                            <MenuItem key="-1" value="-1" disabled>Select variable</MenuItem>
                            {options}
                        </Select>
                    </FormControl>
                </Box>

                <Typography ref={descriptionRef} mt={2} component="p" color="text.secondary" />
            </Paper>
        </Box>
    );
}