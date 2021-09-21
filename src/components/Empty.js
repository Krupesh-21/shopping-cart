import React from "react";
import {
    Paper,
    Container,
    Typography,
  } from "@material-ui/core";
  import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
  import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

const Empty = ({label,component})=>{
    return(
        <div style={{marginTop:"15px"}}>
            <Container>
                <Paper>
                    {component==="cart"?<RemoveShoppingCartIcon className="empty-cart-icon"/>:<ShoppingBasketIcon className="empty-cart-icon"/>}
                    <Typography variant="h4" align="center">{label}!!</Typography>
                </Paper>
            </Container>
        </div>
    )
}

export default Empty;