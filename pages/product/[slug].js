import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import NextLink from "next/link";
import {
  Grid,
  Link,
  List,
  ListItem,
  Typography,
  Card,
  Button,
} from "@material-ui/core";
import useStyles from "../../utils/styles";
import Image from "next/image";
import { useContext } from "react";
import { Store } from "../../utils/Store";
import Product from "../../models/Product";
import db from "../../utils/db";
import axios from "axios";

function ProductScreen(props) {
  const { dispatch } = useContext(Store);

  const classes = useStyles();
  const { product } = props;

  if (!product) {
    return <div>Product Not Found</div>;
  }

  const addToCartHandler = async () => {
    const { data } = await axios.get(`/api/products/${product._id}`);
    console.log(data);
    console.log(await axios.get(`/api/products/${product._id}`));
    if (data.countInStock <= 0) {
      window.alert("Sorry, Proudct is out of stock");
      return;
    }
    //when users click on add to cart button it will fire this dispatch function and will add this payload to the cart
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity: 1 } });
  };
  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>
            <Typography>Back to products</Typography>{" "}
          </Link>
        </NextLink>
      </div>

      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          />
        </Grid>

        <Grid>
          <List>
            <ListItem>
              <Typography component="h1" variant="h1">
                {product.name}
              </Typography>
            </ListItem>

            <ListItem>
              <Typography>Category: {product.category}</Typography>
            </ListItem>

            <ListItem>
              <Typography>Brand: {product.brand}</Typography>
            </ListItem>

            <ListItem>
              <Typography>
                Rating: {product.rating} stars ({product.numReviews} reviews)
              </Typography>
            </ListItem>

            <ListItem>
              <Typography> Description: {product.description}</Typography>
            </ListItem>
          </List>
        </Grid>

        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography>${product.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>

              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Status</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography>
                      {product.countInStock > 0
                        ? "In stock"
                        : "Currently out of stock"}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>

              <ListItem>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={addToCartHandler}
                >
                  Add to cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default ProductScreen;

//fetching data from the database
//by having this functiong before redering homepage in the serverside, we fetch data from the database
//and pass it to the homepage commponent
export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();

  return {
    props: {
      //for each item in products we call convertDocToObj to convert items into JSON file
      product: db.convertDocToObj(product),
    },
  };
}
