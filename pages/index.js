import React, { useContext } from 'react';
import { Button, CardActions, Grid } from '@material-ui/core';
import Layout from '../components/Layout';
import { Store } from '../utils/Store';

export default function Home() {
  const { state, dispatch } = useContext(Store);

  const addToCart = () => {
    let quantity = 0;
    const existItems = state.cart.cartItems;
    //console.log(existItems);

    if (existItems > 0) {
      quantity = existItems + 1;
    } else {
      quantity = 1;
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: quantity });
  };

  return (
    <Layout>
      <div>
        <h1> Add to cart </h1>
        <Grid container spacing={3}>
          <CardActions>
            <Button size="small" color="primary" onClick={() => addToCart()}>
              Press button
            </Button>
          </CardActions>
        </Grid>
      </div>
    </Layout>
  );
}
