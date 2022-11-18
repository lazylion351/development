import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import { useState } from "react";

export default function FavouritesItem(props) {

    const handleClick = () => {
        if (props.favList.includes(props.name)) {
            props.setFavList(props.favList.filter(item => item !== props.name))
            props.setFavPoints(props.favPoints - props.points)
        } else {
            props.setFavList([...props.favList, props.name])
            props.setFavPoints(props.favPoints + props.points)
        }
    }

    if (props.favList.includes(props.name)) {
        return <Button 
                size="small" 
                variant="contained"
                onClick={handleClick}
                >
                Remove from Favourites
                </Button>
    } else {
        return <Button 
                size="small" 
                variant="text"
                onClick={handleClick}
                >
                Add to Favourites
                </Button>
    }

}