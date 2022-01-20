import {
  CardActionArea,
  Grid,
  CardMedia,
  CardContent,
  Typography,
  Card,
  Button,
  CardActions,
} from "@material-ui/core";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Store } from "../utils/Store";
import axios from "axios";
import db from "../utils/db";
import Product from "../models/Product";

export default function Home({ products }) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);

  const addToCartHandler = async (product) => {
    //checking for existing item in the cart if user already added the same item then just added the qty number instead
    const existItem = state.cart.cartItems.find(
      (item) => item._id === product._id
    );
    const quantity = existItem ? existItem.quantity + 1 : 1;
    // use axios.get to fetch API and then extract {data} object from the api
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry, Proudct is out of stock");
      return;
    }
    //when users click on add to cart button it will fire this dispatch function and will add this payload to the cart
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    //redirect users to the cart screen after the users added items into cart
    router.push("/cart");
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Products</h1>

        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item md={4} key={product.name}>
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name}
                    />

                    <CardContent>
                      <Typography>{product.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>

                <CardActions>
                  <Typography>${product.price}</Typography>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => addToCartHandler(product)}
                  >
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}

//fetching data from the database
//by having this functiong before redering homepage in the serverside, we fetch data from the database
//and pass it to the homepage commponent
export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();

  return {
    props: {
      //for each item in products we call convertDocToObj to convert items into JSON file
      products: products.map(db.convertDocToObj),
    },
  };
}
