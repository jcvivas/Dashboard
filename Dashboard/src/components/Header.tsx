import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import '../App.css';

export default function Header() {
  return (
    <Box className="header-container" display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center">
       <Typography variant="h3" component="h1" className="header-text">
          Weather Dashboard
        </Typography>
      </Box>
      <Box className="nav-bar">
        <Button href="#indicators" className="buttons" >
          <p className = "text">Indicators</p>
        </Button>
        <Button href="#table" className="buttons" >
        <p className = "text">Table</p>
        </Button>
        <Button href="#chart" className="buttons">
        <p className = "text">Chart</p>
        </Button>
      </Box>
    </Box>
  );
}
