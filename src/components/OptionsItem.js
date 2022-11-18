import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import { useState } from "react";
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

export default function OptionsItem(props) {

    const handleClick = () => {
        props.setItems([...props.items, props.name])
        props.updatePrice(props.totalPrice + props.price)
    }

    const handleSortOrder = (event) => {
        props.setSortType(event.target.value);
    };

    const handleCheckedChange = (event) => {
        props.setSortOrder(event.target.checked);
    };

    const handleTeamChange = (event) => {
        props.setFilterTeam(event.target.value);
    };

    const handleRaceWinnersChange = (event) => {
        props.setRaceWinnersOnly(event.target.checked);
    };

    const handleFavouritesChange = (event) => {
        props.setFavouritesOnly(event.target.checked);
    };
    
	return (
        <div>
            <Card sx={{ display: 'flex', flexDirection: 'column'}} elevation={1}>
            <CardContent sx={{ flex: '1 0 auto' }}>
            <Stack spacing={2}>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Sort by</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Points"
                        name="radio-buttons-group"
                        onChange={handleSortOrder}
                    >
                        <FormControlLabel value="Points" control={<Radio />} label="Points" />
                        <FormControlLabel value="Wins" control={<Radio />} label="Race Wins" />
                    </RadioGroup>
                    <FormControlLabel
                        control={
                            <Switch checked={props.checked} onChange={handleCheckedChange} name="increasing" size="medium" />
                        }
                        label="Lowest First"
                    />
                </FormControl>
                <Divider />
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Team</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="All"
                        name="radio-buttons-group"
                        onChange={handleTeamChange}
                    >
                        <FormControlLabel value="All" control={<Radio />} label="All Teams" />
                        <FormControlLabel value="Red Bull Racing" control={<Radio />} label="Red Bull" />
                        <FormControlLabel value="Ferrari" control={<Radio />} label="Ferrari" />
                        <FormControlLabel value="Mercedes" control={<Radio />} label="Mercedes" />
                        <FormControlLabel value="McLaren" control={<Radio />} label="McLaren" />
                        <FormControlLabel value="Alpine" control={<Radio />} label="Alpine" />
                        <FormControlLabel value="Alfa Romeo" control={<Radio />} label="Alfa Romeo" />
                        <FormControlLabel value="Aston Martin" control={<Radio />} label="Aston Martin" />
                    </RadioGroup>
                </FormControl>
                <Divider />
                <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Other</FormLabel>
                    <FormGroup>
                    <FormControlLabel
                        control={
                        <Checkbox checked={props.raceWinnersOnly} onChange={handleRaceWinnersChange}/>
                        }
                        label="Race Winners"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={props.favouritesOnly} onChange={handleFavouritesChange}/>
                        }
                        label="Favourites"
                    />
                    </FormGroup>
                </FormControl>
            </Stack>
            </CardContent>
            </Card>
        </div>
      
      );
}
