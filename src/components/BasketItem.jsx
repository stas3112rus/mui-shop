import { ListItem, IconButton, Typography} from "@mui/material";
import {Close} from "@mui/icons-material"

const BasketItem = ({name, price, quantity, id, removeFromOrder}) => {
    return (
        <ListItem>
            <Typography
                variant="body1"
            >
                {name} {price}руб x{quantity}
            </Typography>           
            <IconButton
               
                onClick={() => removeFromOrder(id)}
            >
                <Close />
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;