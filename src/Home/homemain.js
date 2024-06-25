import { Grid, Typography, Container, Box } from "@mui/material";
import React from "react";
import banner from "../images/3.jpg";
import banner2 from "../images/2.jpg";

const homemain = () => {
  return (
    <>
      <Typography
        sx={{ marginTop: { xs: "5rem", sm: "7rem", md: "7rem" } }}
        style={{ background: "#000000f0" }}
      >
        <Grid container spacing={2}>
          <Grid sx={{padding:{xs:'0rem 0rem 0rem 0rem', md:'0rem 0rem 5rem 0rem', sm:'0rem 0rem 5rem 0rem'}}} item xs={12} md={7}>
            <img
              src={banner}
              style={{ width: "100%", borderRadius: "10px", marginTop: "-4rem" }}
              alt="bagimage"
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                padding: {
                  xs: "1rem 1rem 0rem 1rem",
                  md: "2rem 1rem 0rem 1rem",
                },
              }}
            >
              <Typography variant="subtitle1" color="red" fontWeight="700">
                Bags
              </Typography>
              <Typography
                variant="h4"
                mb={4}
                color="white"
                style={{ fontWeight: "800" }}
              >
                Delwin Premium Luggage Travel Effortlessly
              </Typography>
              <Typography variant="h6" color="#D3D3D3" letterSpacing="1px">
                Upgrade your travel experience with the Delwin Premium Luggage
                Bag, designed for modern travelers. Featuring a sleek, durable
                exterior and spacious, organized interior, this bag ensures your
                belongings stay safe and easily accessible.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid
          sx={{ marginTop: { xs: "0rem", sm: "0rem", md: "0rem" } }}
          container
          spacing={2}
        >
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                padding: {
                  xs: "1rem 1rem 0rem 1rem",
                  md: "3rem 3rem 2rem 5rem",
                },
              }}
            >
              <Typography variant="subtitle1" color="red" fontWeight="700">
                Bags
              </Typography>
              <Typography
                variant="h4"
                mb={4}
                color="white"
                style={{ fontWeight: "800" }}
              >
                Delwin Luggage Style and Durability
              </Typography>
              <Typography variant="h6" color="#D3D3D3" letterSpacing="1px">
                Experience unparalleled travel convenience with the Delwin
                Luggage Bag. Crafted from high-quality, durable materials, this
                bag is designed to withstand the rigors of travel while
                maintaining a sleek and stylish appearance. The spacious
                interior includes multiple compartments and pockets, providing
                optimal organization for all your essentials.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            sx={{ flexDirection: { xs: "column-reverse" } }}
            xs={12}
            md={6}
            display="flex"
            justifyContent="center"
          >
            <Typography
              sx={{ marginBottom: { xs: "-3rem", md: "-6rem", sm: "-9rem" } }}
            >
              <img
                src={banner2}
                style={{ width: "100%", borderRadius: "10px" }}
                alt="bagimage"
              />
            </Typography>
          </Grid>
        </Grid>
      </Typography>
    </>
  );
};

export default homemain;
