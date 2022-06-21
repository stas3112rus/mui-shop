import React from 'react'
import {AppBar, Toolbar, Typography, IconButton, Badge} from "@mui/material"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default function Header(props) {

    const {handleCart, orderLen} = props;

    

    return (
    <AppBar
        position='static'
    >
        <Toolbar>
            <Typography
                variant='h6'
                component="span" 
                sx={{ flexGrow: 1 }}               
            >
                MUI Shop
            </Typography>
            <IconButton
                color="inherit"
                onClick={handleCart}
            >
            <Badge
                color="secondary"
                badgeContent={orderLen}
            >
                <ShoppingBasketIcon />
            </Badge>
                              
            
            </IconButton>
        </Toolbar>
    </AppBar>
    )
}
