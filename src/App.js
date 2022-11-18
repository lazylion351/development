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
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';


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

  const [filterTeam, setFilterTeam] = useState("All");
  const [sortType, setSortType] = useState("Points");
  const [sortOrder, setSortOrder] = useState(false);
  const [raceWinnersOnly, setRaceWinnersOnly] = useState(false);
  const [favouritesOnly, setFavouritesOnly] = useState(false);
  const [favPoints, setFavPoints] = useState(0);
  const [favList, setFavList] = useState([]);

  const sortingFunction = (d1, d2) => {
    if (sortType === "Points") {
      if (sortOrder == false) {
        return d2.points - d1.points
      } else {
        return d1.points - d2.points
      }
    } else if (sortType === "Wins") {
      if (sortOrder == false) {
        return d2.wins - d1.wins
      } else {
        return d1.wins - d2.wins
      }
    } else {
      console.log("error")
    }
  };

  const matchesFilterType = item => {
    if(checkTeam(item) && checkWinnersOnly(item) && checkFavourites(item)) { 
      return true
    } else {
      return false
    }
  };

  const checkTeam = item => {
    if(filterTeam === "All") { 
      return true
    } else if (filterTeam === item.team) {
      return true
    } else {
      return false
    }
  };

  const checkWinnersOnly = item => {
    if(raceWinnersOnly === true) { 
      return (item.wins > 0)
    }  else {
      return true
    }
  };

  const checkFavourites = item => {
    if(favouritesOnly === true) { 
      return (favList.includes(item.name))
    }  else {
      return true
    }
  };
  
  const sortedData = data.sort(sortingFunction)

  const filteredData = sortedData.filter(matchesFilterType)

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
      <Stack spacing={3}>
        <AppBar position="static">
          <img src={logo_src} alt="Formula 1 Logo" class="logo"/>
        </AppBar>  
        <AppBar position="static" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
          <Typography component="div" variant="h6">
            Favourites Points: {favPoints}
          </Typography>
        </AppBar> 
        <Container>
          <Grid container spacing={3}>
            <Grid item xs>
              <OptionsItem setSortType={setSortType} sortOrder={sortOrder} setSortOrder={setSortOrder}
              setFilterTeam={setFilterTeam} raceWinnersOnly={raceWinnersOnly}
              setRaceWinnersOnly={setRaceWinnersOnly} favouritesOnly={favouritesOnly}
              setFavouritesOnly={setFavouritesOnly}/>
            </Grid>
            <Grid item xs={9.5}>
              <Grid container spacing={3}>
                {filteredData.map((item, index) => ( 
                  <Grid item xs={12} sm={6} md={6}>
                    <DriverItem name={item.name} team={item.team} points={item.points}
                    wins={item.wins} image={item.image}
                    favPoints={favPoints} setFavPoints={setFavPoints}
                    favList={favList} setFavList={setFavList}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <br></br>
        </Stack>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
