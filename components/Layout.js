import React, { useContext } from 'react';
import Head from 'next/head';
import useStyles from '../utils/styles';
import NextLink from 'next/link';
import {
  AppBar,
  Badge,
  Container,
  Link,
  Toolbar,
  Typography,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@material-ui/core';
import { Store } from '../utils/Store';

export default function Layout({ title, desciption, children }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const theme = createTheme({
    Typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      palette: {
        type: 'light',
        primary: {
          main: '#f0c000',
        },
        secondary: {
          main: '#208080',
        },
      },
    },
  });

  const classes = useStyles();
  //console.log(cart.cartItems);

  return (
    <div>
      <Head>
        <title>shopping cart</title>
        {desciption && <meta name="description" content={desciption}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passhref>
              <Link>
                <Typography className={classes.brand}>shopping cart</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <NextLink href="/" passhref>
                <Link>
                  {cart.cartItems > 0 ? (
                    <Badge color="secondary" badgeContent={cart.cartItems}>
                      Cart
                    </Badge>
                  ) : (
                    'Cart'
                  )}
                </Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>for educational purposes.</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
