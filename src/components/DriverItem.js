import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export default function DriverItem(props) {

    const handleClick = () => {
        props.setItems([...props.items, props.name])
        props.updatePrice(props.totalPrice + props.price)
    }

	return (
        <div>
            <Card sx={{ display: 'flex' }} elevation={1}>
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
                        <Button size="small" color="primary">
                            Add to Favourites
                        </Button>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 161 }}
                    image={props.image}
                    alt="Live from space album cover"
                />
            </Card>
        </div>
      
      );
}
