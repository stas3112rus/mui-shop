import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react'
import BasketItem from './BasketItem';

export const Bascet  = (props) => {
    const {
        cartOpen,
        closeCart = Function.prototype, 
        order = [], 
        removeFromOrder
    } = props;


    return(
        <Drawer
            anchor='right'
            open={cartOpen}
            onClose={closeCart}
            
        >
            <List
                sx = {{width: "400px"}}
            >
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket/>
                    </ListItemIcon>
                    <ListItemText primary="Корзина" />                    
                </ListItem>
                <Divider />

                {!order.length ? 
                    (<ListItem>Корзина пуста</ListItem>) :
                    
                    (order.map((item)=>
                            <BasketItem 
                                key= {item.name}
                                removeFromOrder = {removeFromOrder} 
                                {...item}
                            />
                        )
                    )    
                }    
            </List>
        </Drawer>
    )
}
