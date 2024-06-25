import React from "react";
import product1 from "../images/product1.png";
import product2 from "../images/product2.png";
import product3 from "../images/product3.png";
import product4 from "../images/product4.png";
import product5 from "../images/product5.png";
import product6 from "../images/product6.png";
import product7 from "../images/product7.png";
import product8 from "../images/product8.png";
import product9 from "../images/product9.png";
import product10 from "../images/product10.png";
import product11 from "../images/product11.png";
import product12 from "../images/product12.png";

import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const products = () => {
  const ProductArr = [
    {
      id: "1",
      image: product12,
      name: "DELWIN MAESTRO NXT",
      desc: "Premium Duffle with Fanny Pack",
      price: "₹3000",
    },
    {
      id: "2",
      image: product9,
      name: "DELWIN HIGHLANDER",
      desc: "Cabin+Medium Luggage",
      price: "₹4500",
    },
    {
      id: "3",
      image: product10,
      name: "DELWIN PRINTED",
      desc: "Cabin+Large Hard Luggage",
      price: "₹6200",
    },
    {
      id: "4",
      image: product11,
      name: "DELWIN ZORRO",
      desc: "Medium Hard Luggage Duffle Bag",
      price: "₹1000",
    },
    {
      id: "5",
      image: product5,
      name: "DELWIN EXPERIA",
      desc: "Cabin+Medium Luggage",
      price: "₹8900",
    },
    {
      id: "6",
      image: product6,
      name: "DELWIN MOLECULE",
      desc: "Cabin Hard Luggage with Backpack",
      price: "₹9000",
    },
    {
      id: "7",
      image: product7,
      name: "DELWIN PRINTED",
      desc: "Cabin Hard Luggage",
      price: "₹4700",
    },
    {
      id: "8",
      image: product8,
      name: "DELWIN PRINTED",
      desc: "Medium Hard Luggage",
      price: "₹9000",
    },
  ];

  return (
    <Typography sx={{ marginTop: { xs: "5rem", md: "5rem", sm: "5rem" } }}>
      <Container>
        <Typography
          variant="h3"
          align="center"
          sx={{ fontSize: { xs: "30px", md: "40px", sm: "35px" } }}
          fontWeight={800}
        >
          <span className="getcolor">H</span>ard Luggage
        </Typography>
        <Grid container spacing={2} mt={5}>
          {ProductArr.map((item) => (
            <Grid item xs={12} md={3}>
              <Link to={`/Products-Info/${item.name}/${item.id}`}>
                <div className="imagehover">
                  <img
                    src={item.image}
                    style={{
                      width: "100%",
                      height: "100%",
                      marginBottom: "1rem",
                    }}
                    alt="products"
                  />
                </div>
                <Box>
                  <Typography color="#00000099" variant="h6">
                    {item.name}
                  </Typography>
                  <Typography color="gray">{item.desc}</Typography>
                  <Typography color="gray">{item.price}</Typography>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Typography>
  );
};

export default products;
