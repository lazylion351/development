import './App.css';
import { useState } from "react";
import data from "./assets/data.json";
import DriverItem from "./components/DriverItem.js";
import OptionsItem from "./components/OptionsItem.js";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';

data.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {

  const logo_src = process.env.PUBLIC_URL + "/images/logo.jpg";

  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const [type, setType] = useState("All");


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
      <Stack spacing={3}>
        <AppBar position="static">
          <img src={logo_src} alt="Formula 1 Logo" class="logo"/>
        </AppBar>  
        <Container>
          <Grid container spacing={3}>
            <Grid item xs>
              <OptionsItem />
            </Grid>
            <Grid item xs={9.5}>
              <Grid container spacing={3}>
                {data.map((item, index) => ( 
                  <Grid item xs={12} sm={6} md={6}>
                    <DriverItem name={item.name} country={item.country} team={item.team} points={item.points}
                    wins={item.wins} image={item.image}/>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          
        </Container>
        </Stack>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
