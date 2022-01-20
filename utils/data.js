import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "John",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Jane",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: fasle,
    },
  ],

  products: [
    {
      name: "Free Shirts ",
      slug: "free-shirts",
      category: "Shirts",
      // image: '/images/shirt1.jpg',
      image:
        "https://cdn.shopify.com/s/files/1/2597/0436/products/peach_5383788f-2d85-4eef-89e2-a580cf772685_600x.jpg?v=1637097112",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt ",
    },
    {
      name: "Fit Shirts",
      slug: "fit-shirts",
      category: "Shirts",
      // image: '/images/shirt2.jpg',
      image:
        "https://cdn.shopify.com/s/files/1/2597/0436/products/peach_5383788f-2d85-4eef-89e2-a580cf772685_600x.jpg?v=1637097112",
      price: 80,
      brand: "Adidas",
      rating: 4.1,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Slim Shirts",
      slug: "slim-shirts",
      category: "Shirts",
      // image: '/images/shirt3.jpg',
      image:
        "https://cdn.shopify.com/s/files/1/2597/0436/products/peach_5383788f-2d85-4eef-89e2-a580cf772685_600x.jpg?v=1637097112",
      price: 80,
      brand: "Adidas",
      rating: 4.1,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Soccer pants",
      slug: "soccer-pants",
      category: "pants",
      // image: '/images/pants1.jpg',
      image:
        "https://i5.walmartimages.com/asr/cc629700-749d-4166-a97f-dc8bffba73ff_1.b083b51b77f0f91327d1b03fcf701235.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular pants for sports",
    },
    {
      name: "Golf pants",
      slug: "golf-pants",
      category: "Pants",
      // image: '/images/pants2.jpg',
      image:
        "https://i5.walmartimages.com/asr/cc629700-749d-4166-a97f-dc8bffba73ff_1.b083b51b77f0f91327d1b03fcf701235.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      price: 90,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Comfortable pants",
    },
    {
      name: "Fit pants",
      slug: "fit-pants",
      category: "pants",
      // image: '/images/pants3.jpg',
      image:
        "https://i5.walmartimages.com/asr/cc629700-749d-4166-a97f-dc8bffba73ff_1.b083b51b77f0f91327d1b03fcf701235.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Basketball pants",
      slug: "basketball-pants",
      category: "pants",
      // image: '/images/pants3.jpg',
      image:
        "https://i5.walmartimages.com/asr/cc629700-749d-4166-a97f-dc8bffba73ff_1.b083b51b77f0f91327d1b03fcf701235.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 0,
      description: "A popular shirt",
    },
  ],
};

export default data;
