import React, { useContext } from "react";
import Head from "next/head";
import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
  ThemeProvider,
  CssBaseline,
  Switch,
  Badge,
} from "@material-ui/core";
import useStyles from "../utils/styles";
import NextLink from "next/link";
import { Store } from "../utils/Store";
import Cookies from "js-cookie";
import { createTheme } from "@material-ui/core/styles";

// import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';

function Layout({ title, children, description }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart } = state;

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#208080",
      },
    },
  });

  const classes = useStyles();
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });

    // These lines of code is used to store darkmode in the cookie, so that when user refresh the page it won't change the current mode
    const newDarkMode = !darkMode;
    //storing darkMode in the cookie and then pass in the Store section "folder"
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
  };

  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next Amazona` : "Next Amazona"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>amazona</Typography>
              </Link>
            </NextLink>

            <div className={classes.grow}></div>
            <div>
              <Switch
                checked={darkMode}
                onClick={darkModeChangeHandler}
              ></Switch>
              <NextLink href="/cart">
                <Link>
                  {cart.cartItems.length > 0 ? (
                    <Badge
                      color="secondary"
                      badgeContent={cart.cartItems.length}
                    >
                      Cart
                    </Badge>
                  ) : (
                    "Cart"
                  )}
                </Link>
              </NextLink>

              <NextLink href="/login">
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>

        <Container className={classes.main}>{children}</Container>

        <footer>
          <Typography className={classes.footer}>
            All right reserved. Next Amazona
          </Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}

export default Layout;
