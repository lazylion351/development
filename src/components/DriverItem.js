import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import { useState } from "react";

export default function DriverItem(props) {

    const handleClick = () => {
        props.setFavList([...props.favList, props.name])
        props.setFavPoints(props.favPoints + props.points)
    }

    const [buttonVariant, setButtonVariant] = useState("text");
    const [buttonText, setButtonText] = useState("Add to Favourites");

	return (
        <div>
            <Card sx={{ display: 'flex', justifyContent: 'space-between'}} elevation={1}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {props.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div" align="left">
                        {props.team}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div" align="left">
                        Points: &nbsp; &nbsp; &nbsp; &nbsp; {props.points}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div" align="left">
                        Race Wins: &nbsp; {props.wins}
                    </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <Button 
                        size="small" 
                        variant={buttonVariant}
                        onClick={handleClick}
                        >
                            {buttonText}
                        </Button>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 161 }}
                    image={props.image}
                    alt="Live from space album cover"
                    style={{
                        justify: 'right',
                        alignContent: 'right',
                        alignItems: 'right'
                      }}
                />
            </Card>
        </div>
      
      );
}
