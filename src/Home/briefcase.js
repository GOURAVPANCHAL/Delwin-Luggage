import React from "react";
import product9 from "../images/briefcase1.png";
import product10 from "../images/briefcase2.png";
import product11 from "../images/briefcase3.png";
import product12 from "../images/briefcase4.png";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const briefcase = () => {
  const ProductArr = [
    {
      id: "9",
      image: product9,
      name: "DELWIN BRIEFCASE",
      desc: "Premium Briefcase with Fanny Pack",
      price: "₹3000",
    },
    {
      id: "10",
      image: product10,
      name: "DELWIN BRIEFCASE",
      desc: "Cabin+Medium Briefcase",
      price: "₹4500",
    },
    {
      id: "11",
      image: product11,
      name: "DELWIN BRIEFCASE",
      desc: "Cabin+Large Briefcase",
      price: "₹6200",
    },
    {
      id: "12",
      image: product12,
      name: "DELWIN BRIEFCASE",
      desc: "Medium Briefcase",
      price: "₹1000",
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
          <span className="getcolor">B</span>riefcase
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

export default briefcase;
