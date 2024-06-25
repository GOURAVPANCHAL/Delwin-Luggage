import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import aboutImage from "../images/bag3.png";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Homemain from "../Home/homemain";

const about = () => {
  return (
    <>
      <Container>
        <Typography
          sx={{ marginTop: { xs: "5rem", md: "7rem", sm: "5rem" } }}
          variant="h3"
          align="center"
          mb={5}
          fontWeight={800}
        >
          <span className="getcolor">A</span>bout Us
        </Typography>
        <Grid container spacing={5}>
          <Grid item md={6}>
            <Box>
              <img src={aboutImage} width="100%" />
            </Box>
          </Grid>
          <Grid item md={6}>
            <Typography
              mt={8}
              color="#4c4d4e"
              letterSpacing="1px"
              fontWeight="700"
              mb={3}
              variant="h5"
            >
              ABOUT OUR DELWIN BAGGAGE
            </Typography>
            <Typography
              variant="subtitle1"
              lineHeight="36px"
              letterSpacing="1px"
              color="#777"
            >
              At Delwin, we believe that your luggage should enhance your travel
              experience, not hinder it. Our Delwin Luggage collection is
              meticulously designed to meet the highest standards of quality,
              durability, and style. Whether you're a frequent flyer or an
              occasional traveler, our luggage is built to handle all your
              travel needs with ease and sophistication.
            </Typography>
            <Typography
              variant="subtitle1"
              lineHeight="36px"
              letterSpacing="1px"
              color="#777"
            >
             
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} style={{backgroundColor:'#d3d3c54f'}}>
          <Typography variant="h5" style={{color:'#4c4d4e'}}><b>Key Features:</b></Typography>
          <Typography sx={{lineHeight:{xs:'30px', md:'40px', sm:'40px'}}}>
              <ul>
                <li style={{color:'gray', letterSpacing:'1px'}}>
                  <b>Durable Construction: </b>
                  Made from premium materials, Delwin luggage is designed to withstand the wear and tear of frequent travel.
                </li>
                <li style={{color:'gray', letterSpacing:'1px'}}>
                  <b>Spacious Interiors: </b>
                  With multiple compartments and pockets, our luggage provides ample space and organization for all your belongings.
                </li>
                <li style={{color:'gray', letterSpacing:'1px'}}>
                  <b>Smooth Mobility: </b>
                  Equipped with smooth-rolling wheels and a sturdy telescopic handle, navigating through airports and cities is effortless.
                </li>
                <li style={{color:'gray', letterSpacing:'1px'}}>
                  <b>Sleek Design: </b>
                  Our luggage combines functionality with a sleek, modern design, ensuring you travel in style.
                </li>
                <li style={{color:'gray', letterSpacing:'1px'}}>
                  <b>Security: </b>
                  Integrated TSA-approved locks keep your items secure, providing peace of mind during your travels.
                </li>
              </ul>
          </Typography>
          </Grid>
        </Grid>
      </Container>
      <Homemain />
    </>
  );
};

export default about;
