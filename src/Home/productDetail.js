import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link, useParams } from "react-router-dom";
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
import briefcase1 from '../images/briefcase1.png';
import briefcase2 from '../images/briefcase2.png';
import briefcase3 from "../images/briefcase3.png";
import briefcase4 from "../images/briefcase4.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Container, Button } from "@mui/material";
import Products from "./products";
const ProductDetail = () => {
  const { id } = useParams();
  const [item, setItems] = useState(null);
  const ProductArr = [
    {
      id: "1",
      image: product12,
      name: (
        <Box>
          <span style={{ color: "#93c01b" }}>DELWIN</span> MAESTRO NXT
        </Box>
      ),
      desc: "Premium Duffle with Fanny Pack",
      price: (
        <Box>
          <b>Price: </b>
          <del style={{ color: "red" }}>₹4599</del>
          <b style={{ color: "green" }}> ₹2999</b>
        </Box>
      ),
      description: (
        <ul style={{ color: "gray" }}>
          <li>Brand - Delwin</li>
          <li>Style Name - Luggage</li>
          <li>Trolley - No</li>
          <li>Gender - Unisex</li>
          <li>AgeGroup - Adults-Unisex</li>
          <li>Material - Matty</li>
          <li>Closure Type - Zip</li>
          <li>Number of Zips - 1</li>
          <li>Warranty Type - International</li>
          <li>Warranty Duration - 12 Months</li>
        </ul>
      ),
    },
    {
      id: "2",
      image: product9,
      name: (
        <Box>
          <span style={{ color: "#93c01b" }}>DELWIN</span> HIGHLANDER
        </Box>
      ),

      desc: "Cabin+Medium Luggage.",
      price: (
        <Box>
          <b>Price: </b>
          <del style={{ color: "red" }}>₹5500</del>
          <b style={{ color: "green" }}> ₹4999</b>
        </Box>
      ),

      description: (
        <ul>
          <li>Brand - Delwin</li>
          <li>Style Name - Luggage</li>
          <li>Trolley - Yes</li>
          <li>Gender - Unisex</li>
          <li>AgeGroup - Adults-Unisex</li>
          <li>Material - Matty</li>
          <li>Closure Type - Zip</li>
          <li>Number of Zips - 1</li>
          <li>Warranty Type - International</li>
          <li>Warranty Duration - 12 Months</li>
        </ul>
      ),
    },
    {
      id: "3",
      image: product10,
      name: (
        <Box>
          <span style={{ color: "#93c01b" }}>DELWIN</span> HAVELOCK
        </Box>
      ),
      desc: "Cabin+Large Hard Luggage.",
      price: (
        <Box>
          <b>Price: </b>
          <del style={{ color: "red" }}>₹7000</del>
          <b style={{ color: "green" }}> ₹6499</b>
        </Box>
      ),

      description: (
        <ul>
          <li>Brand - Delwin</li>
          <li>Style Name - Luggage</li>
          <li>Trolley - Yes</li>
          <li>Gender - Unisex</li>
          <li>AgeGroup - Adults-Unisex</li>
          <li>Material - Matty</li>
          <li>Closure Type - Zip</li>
          <li>Number of Zips - 1</li>
          <li>Warranty Type - International</li>
          <li>Warranty Duration - 12 Months</li>
        </ul>
      ),
    },
    {
      id: "4",
      image: product11,
      name: (
        <Box>
          <span style={{ color: "#93c01b" }}>DELWIN</span> ZORRO
        </Box>
      ),
      desc: "Medium Hard Luggage Duffle Bag.",
      price: (
        <Box>
          <b>Price: </b>
          <del style={{ color: "red" }}>₹1599</del>
          <b style={{ color: "green" }}> ₹1299</b>
        </Box>
      ),

      description: (
        <ul>
          <li>Brand - Delwin</li>
          <li>Style Name - Luggage</li>
          <li>Trolley - Yes</li>
          <li>Gender - Unisex</li>
          <li>AgeGroup - Adults-Unisex</li>
          <li>Material - Matty</li>
          <li>Closure Type - Zip</li>
          <li>Number of Zips - 1</li>
          <li>Warranty Type - International</li>
          <li>Warranty Duration - 12 Months</li>
        </ul>
      ),
    },
    {
      id: "5",
      image: product5,
      name: (
        <Box>
          <span style={{ color: "#93c01b" }}>DELWIN</span> EXPERIA
        </Box>
      ),
      desc: "Cabin+Medium Luggage.",
      price: (
        <Box>
          <b>Price: </b>
          <del style={{ color: "red" }}>₹8999</del>
          <b style={{ color: "green" }}> ₹7950</b>
        </Box>
      ),
      description: (
        <ul>
          <li>Brand - Delwin</li>
          <li>Style Name - Luggage</li>
          <li>Trolley - Yes</li>
          <li>Gender - Unisex</li>
          <li>AgeGroup - Adults-Unisex</li>
          <li>Material - Matty</li>
          <li>Closure Type - Zip</li>
          <li>Number of Zips - 1</li>
          <li>Warranty Type - International</li>
          <li>Warranty Duration - 12 Months</li>
        </ul>
      ),
    },
    {
      id: "6",
      image: product6,
      name: (
        <Box>
          <span style={{ color: "#93c01b" }}>DELWIN</span> MOLECULE
        </Box>
      ),
      desc: "Cabin Hard Luggage with Backpack.",
      price: (
        <Box>
          <b>Price: </b>
          <del style={{ color: "red" }}>₹7799</del>
          <b style={{ color: "green" }}> ₹6699</b>
        </Box>
      ),

      description: (
        <ul>
          <li>Brand - Delwin</li>
          <li>Style Name - Luggage</li>
          <li>Trolley - Yes</li>
          <li>Gender - Unisex</li>
          <li>AgeGroup - Adults-Unisex</li>
          <li>Material - Matty</li>
          <li>Closure Type - Zip</li>
          <li>Number of Zips - 1</li>
          <li>Warranty Type - International</li>
          <li>Warranty Duration - 12 Months</li>
        </ul>
      ),
    },
    {
      id: "7",
      image: product7,
      name: (
        <Box>
          <span style={{ color: "#93c01b" }}>DELWIN</span> AUGMENT STROLLY
        </Box>
      ),
      desc: "Cabin Hard Luggage.",
      price: (
        <Box>
          <b>Price: </b>
          <del style={{ color: "red" }}>₹4599</del>
          <b style={{ color: "green" }}> ₹2999</b>
        </Box>
      ),
      description: (
        <ul>
          <li>Brand - Delwin</li>
          <li>Style Name - Luggage</li>
          <li>Trolley - Yes</li>
          <li>Gender - Unisex</li>
          <li>AgeGroup - Adults-Unisex</li>
          <li>Material - Matty</li>
          <li>Closure Type - Zip</li>
          <li>Number of Zips - 1</li>
          <li>Warranty Type - International</li>
          <li>Warranty Duration - 12 Months</li>
        </ul>
      ),
    },
    {
      id: "8",
      image: product8,
      name: (
        <Box>
          <span style={{ color: "#93c01b" }}>DELWIN</span> AER 8W STROLLY
        </Box>
      ),
      desc: "Medium Hard Luggage.",
      price: (
        <Box>
          <b>Price: </b>
          <del style={{ color: "red" }}>₹5499</del>
          <b style={{ color: "green" }}> ₹5199</b>
        </Box>
      ),
      description: (
        <ul>
          <li>Brand - Delwin</li>
          <li>Style Name - Luggage</li>
          <li>Trolley - Yes</li>
          <li>Gender - Unisex</li>
          <li>AgeGroup - Adults-Unisex</li>
          <li>Material - Matty</li>
          <li>Closure Type - Zip</li>
          <li>Number of Zips - 1</li>
          <li>Warranty Type - International</li>
          <li>Warranty Duration - 12 Months</li>
        </ul>
      ),
    },
    {
    id: "9",
    image: briefcase1,
    name: "DELWIN BRIEFCASE",
    desc: "Premium Briefcase with Fanny Pack",
    price: (
      <Box>
        <b>Price: </b>
        <del style={{ color: "red" }}>₹5499</del>
        <b style={{ color: "green" }}> ₹5199</b>
      </Box>
    ),
    description: (
      <ul>
        <li>Brand - Delwin</li>
        <li>Style Name - Briefcase</li>
        <li>Trolley - No</li>
        <li>Gender - Unisex</li>
        <li>AgeGroup - Adults-Unisex</li>
        <li>Material - Matty</li>
        <li>Closure Type - Zip</li>
        <li>Number of Zips - 1</li>
        <li>Warranty Type - International</li>
        <li>Warranty Duration - 12 Months</li>
      </ul>
    ),
  },
  {
    id: "10",
    image: briefcase2,
    name: "DELWIN BRIEFCASE",
    desc: "Cabin+Medium Briefcase",
    price: (
      <Box>
        <b>Price: </b>
        <del style={{ color: "red" }}>₹5499</del>
        <b style={{ color: "green" }}> ₹5199</b>
      </Box>
    ),
    description: (
      <ul>
        <li>Brand - Delwin</li>
        <li>Style Name - Briefcase</li>
        <li>Trolley - No</li>
        <li>Gender - Unisex</li>
        <li>AgeGroup - Adults-Unisex</li>
        <li>Material - Matty</li>
        <li>Closure Type - Zip</li>
        <li>Number of Zips - 1</li>
        <li>Warranty Type - International</li>
        <li>Warranty Duration - 12 Months</li>
      </ul>
    ),
  },
  {
    id: "11",
    image: briefcase3,
    name: "DELWIN BRIEFCASE",
    desc: "Cabin+Large Briefcase",
    price: (
      <Box>
        <b>Price: </b>
        <del style={{ color: "red" }}>₹5499</del>
        <b style={{ color: "green" }}> ₹5199</b>
      </Box>
    ),
    description: (
      <ul>
        <li>Brand - Delwin</li>
        <li>Style Name - Briefcase</li>
        <li>Trolley - No</li>
        <li>Gender - Unisex</li>
        <li>AgeGroup - Adults-Unisex</li>
        <li>Material - Matty</li>
        <li>Closure Type - Zip</li>
        <li>Number of Zips - 1</li>
        <li>Warranty Type - International</li>
        <li>Warranty Duration - 12 Months</li>
      </ul>
    ),
  },
  {
    id: "12",
    image: briefcase4,
    name: "DELWIN BRIEFCASE",
    desc: "Medium Briefcase",
    price: (
      <Box>
        <b>Price: </b>
        <del style={{ color: "red" }}>₹5499</del>
        <b style={{ color: "green" }}> ₹5199</b>
      </Box>
    ),
    description: (
      <ul>
        <li>Brand - Delwin</li>
        <li>Style Name - Briefcase</li>
        <li>Trolley - No</li>
        <li>Gender - Unisex</li>
        <li>AgeGroup - Adults-Unisex</li>
        <li>Material - Matty</li>
        <li>Closure Type - Zip</li>
        <li>Number of Zips - 1</li>
        <li>Warranty Type - International</li>
        <li>Warranty Duration - 12 Months</li>
      </ul>
    ),
  },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
    const fillterData = ProductArr.filter((item) => item.id === id);
    if (fillterData.length === 0) {
      alert("No Product");
    } else {
      setItems(fillterData);
    }
    console.log(fillterData);
  }, [id]);
  return (
    <>
      <Box
        sx={{ padding: { xs: "1rem", md: "3rem", sm: "3rem" } }}
        style={{ background: "#d3d3d35c" }}
      >
        <Container>
          <Typography style={{ marginTop: "5rem" }}></Typography>
          {item &&
            item.map((product) => (
              <Grid container spacing={2}>
                <Grid md={5} xs={12}>
                  <img
                    style={{ borderRadius: "20px" }}
                    width="100%"
                    src={product.image}
                  />
                </Grid>
                <Grid
                  xs={12}
                  md={6}
                  mt={5}
                  sx={{
                    padding: {
                      xs: "1rem",
                      md: "0rem 0rem 0rem 5rem",
                      sm: "0rem 0rem 0rem 5rem",
                    },
                  }}
                >
                  <Typography
                    variant="h4"
                    letterSpacing="1px"
                    mb={2}
                    fontWeight="600"
                    color="initial"
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="h5"
                    letterSpacing="1px"
                    mb={1}
                    color="initial"
                  >
                    {product.price}
                  </Typography>
                  <Typography
                    variant="h6"
                    letterSpacing="1px"
                    mb={1}
                    color="initial"
                  >
                    <b>Description</b> : {product.desc}
                  </Typography>
                  <Typography mt={2} variant="h6">
                    <b>Featured</b>
                    <br />
                    {product.description}
                  </Typography>
                  <Link style={{ alignItems: "center" }} to={"/contact"}>
                    <Button style={{ padding: "1rem" }} variant="outlined">
                      Enquire Now
                      <ArrowForwardIcon />
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            ))}
        </Container>
      </Box>
      <Products />
    </>
  );
};

export default ProductDetail;
