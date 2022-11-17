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

export default function OptionsItem(props) {

    const handleClick = () => {
        props.setItems([...props.items, props.name])
        props.updatePrice(props.totalPrice + props.price)
    }

	return (
        <div>
            <Card sx={{ display: 'flex', flexDirection: 'column'}} elevation={1}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Sort by</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="points"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="points" control={<Radio />} label="Points" />
                        <FormControlLabel value="racewins" control={<Radio />} label="Race Wins" />
                    </RadioGroup>
                </FormControl>

                <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Team</FormLabel>
                    <FormGroup>
                    <FormControlLabel
                        control={
                        // <Checkbox checked={gilad} onChange={handleChange} name="redbull" />
                        <Checkbox name="redbull" />
                        }
                        label="Red Bull"
                    />
                    </FormGroup>
                </FormControl>

                <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Other</FormLabel>
                    <FormGroup>
                    <FormControlLabel
                        control={
                        // <Checkbox checked={gilad} onChange={handleChange} name="redbull" />
                        <Checkbox name="won race" />
                        }
                        label="Won A Race"
                    />
                    <FormControlLabel
                        control={
                        // <Checkbox checked={gilad} onChange={handleChange} name="redbull" />
                        <Checkbox name="favourites" />
                        }
                        label="Favourites"
                    />
                    </FormGroup>
                </FormControl>


            </CardContent>
            </Card>
        </div>
      
      );
}
