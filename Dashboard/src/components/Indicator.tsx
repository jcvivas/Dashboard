import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import '../App.css'

interface Config {
    title?: String;
    subtitle?: String;
    value: Number;
}

export default function Indicator(config: Config) {
    return (
        <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '10px',
              boxShadow: '2px 2px 5px black',
              transition: 'background-color 0.3s ease'
            }}
            className='box-indicator'
          >
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                {config.title} 
            </Typography>
            <Typography component="p" variant="h4">
                {config.value.toString()}
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                {config.subtitle}
            </Typography>
        </Paper> 
    )
}