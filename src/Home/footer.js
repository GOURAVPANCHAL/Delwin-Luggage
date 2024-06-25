import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { render } from "@testing-library/react";
import Container from "@mui/material/Container";
import { Box, Button, TextField } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";


const footer = () => {
  return (
    <>
      <footer
        style={{
          background: "#0000000f",
          marginTop: "3rem",
          padding:'1rem'
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item style={{padding:'0px 16px'}} xs={12} md={4}>
              <Box maxWidth='50%' variant="h2">
                <Link to={'/'}>
                  <img width='100%' src={logo} />
                </Link>
              </Box>
              <Typography
                variant="subtitle1"
                style={{ color: "gray", lineHeight: "30px" }}
              >
                Compact, durable Delwin Luggage Mini: sleek design, ample
                storage, ideal for stylish travel essentials.
              </Typography>
            </Grid>

            <Grid item xs={6} md={2}>
              <Typography variant="h6">Company</Typography>
              <ul className="FooterUl">
                <li>
                  <Link to="/product">Hard Luggage</Link>
                </li>
                {/* <li>
                  <Link to="/DuffleBags">Duffle Luggage</Link>
                </li> */}
                <li>
                  <Link to="/briefcase">BriefCase</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/blog">blog</Link>
                </li>
              </ul>
            </Grid>

            <Grid item xs={6} md={2}>
              <Typography variant="h6" style={{ marginBottom: "1rem" }}>
                Follow On
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  maxWidth: "90%",
                }}
              >
                <Link to="/">
                  <FacebookOutlinedIcon
                    style={{ color: "blue", fontSize: "30px" }}
                  />
                </Link>
                <Link to="">
                  <InstagramIcon style={{ color: "red", fontSize: "30px" }} />
                </Link>
                <Link to="">
                  <TwitterIcon style={{ color: "skyblue", fontSize: "30px" }} />
                </Link>
                <Link to="">
                  <WhatsAppIcon style={{ color: "green", fontSize: "30px" }} />
                </Link>
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="h6">Sign Up Now & Get 10% Off</Typography>
              <ul className="FooterUl">
                <TextField
                  sx={{ width: { xs: "60%" } }}
                  className="footerInput"
                  id="outlined-basic"
                  placeholder="Enter Your Email Address"
                  variant="outlined"
                />

                <Button
                  style={{
                    padding: "1rem",
                    background: "black",
                    color: "white",
                    marginBottom: "1rem",
                  }}
                >
                  Subscribe
                </Button>
                <li>
                  Be the first to hear about special offers, new arrivals &
                  more.
                </li>
                {/* <input required  className='footerInput' type='email' placeholder='Enter Your Email Address' /> */}
                <li>
                  Send me news and offers from the HasThemes. I can unsubscribe
                  at any time.
                </li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </footer>
      <div style={{background:'black', padding:'3px'}}>
      <Container className="container" style={{textAlign:'end', color:'white'}}>
        <p style={{letterSpacing:'1px'}}>
          Designed By Digi India Solution
        </p>
      </Container>
      </div>
    </>
  );
};

export default footer;
