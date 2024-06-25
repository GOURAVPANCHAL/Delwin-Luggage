import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CallIcon from "@mui/icons-material/Call";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import PublicIcon from "@mui/icons-material/Public";
import {
  Box,
  Typography,
  FormControl,
  FormLabel,
  FormHelperText,
  TextField,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const contact = () => {
  return (
    <div>
      <Box mt={10} style={{ background: "#f8f6f3", padding: "1rem" }}>
        <Typography variant="h3" fontWeight={700} className="heading">
          <span className="getcolor">Get</span> In Touch
        </Typography>
      </Box>
      <Container>
        <Grid container spacing={5} mb={5} mt={1}>
          <Grid item md={4} xs={12}>
            <Box
            sx={{padding:{xs:'2rem 1rem 1rem', md:'3rem 1rem 1rem 1rem'}}}
              style={{ background: "#93c01b"}}
              textAlign="center"
            >
              <Typography variant="h4" color="white" fontWeight="700" mb={1}>
                Let's Get In Touch
              </Typography>

              <Typography
                variant="subtitle1"
                color="white"
                fontWeight="500"
                maxWidth="83%"
                margin="auto"
                mb={3}
              >
                We're are open for any suggestion or just to have a chat.
              </Typography>
              <Box sx={{ maxWidth: { xs: "100%", md: "100%", sm: "100%" } }}>
                <Typography
                  sx={{
                    maxWidth: { xs: "80%", md: "100%", sm: "85%" },
                    margin: { xs: "auto", sm: "auto", md: "auto" },
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      border: "2px solid white",
                      borderRadius: "50%",
                      display: "flex",
                      padding: "14px",
                    }}
                  >
                    <CallIcon />
                  </div>
                  <div className="content">
                    <Typography variant="subtitle1" color="white">
                      <b>Phone:</b> +91 0000 000 000
                    </Typography>
                  </div>
                </Typography>
                <Typography
                  sx={{
                    maxWidth: { xs: "80%", md: "100%", sm: "85%" },
                    margin: { xs: "auto", sm: "auto", md: "auto" },
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      border: "2px solid white",
                      borderRadius: "50%",
                      display: "flex",
                      padding: "14px",
                    }}
                  >
                    <EmailIcon />
                  </div>
                  <div className="content">
                    <Typography variant="subtitle1" color="white">
                      <b>Email: </b>Delwin@gmail.com
                    </Typography>
                  </div>
                </Typography>
                <Typography
                  sx={{
                    maxWidth: { xs: "80%", md: "100%", sm: "85%" },
                    margin: { xs: "auto", sm: "auto", md: "auto" },
                  }}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      border: "2px solid white",
                      borderRadius: "50%",
                      display: "flex",
                      padding: "14px",
                    }}
                  >
                    <PlaceIcon />
                  </div>

                  <div className="content">
                    <Typography variant="subtitle1" color="white">
                      <b>Address: </b>Digi india solution
                    </Typography>
                  </div>
                </Typography>
                <Typography
                  sx={{
                    maxWidth: { xs: "80%", md: "100%", sm: "85%" },
                    margin: { xs: "auto", sm: "auto", md: "auto" },
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      border: "2px solid white",
                      borderRadius: "50%",
                      display: "flex",
                      padding: "14px",
                    }}
                  >
                    <PublicIcon />
                  </div>
                  <div className="content">
                    <Typography variant="subtitle1" color="white">
                      <b>Website: </b> <Link to='https://trally-bag.vercel.app/'>www.Delwin.com</Link>
                    </Typography>
                  </div>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            sx={{ marginTop: { xs: "0rem", md: "4rem", sm: "5rem" } }}
            xs={12}
            item
            md={8}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box display="inline-grid" width="100%">
                  <FormLabel>Name</FormLabel>
                  <TextField id="outlined-basic" variant="outlined" />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box display="inline-grid" width="100%">
                  <FormLabel>Email</FormLabel>
                  <TextField id="outlined-basic" variant="outlined" />
                </Box>
              </Grid>
              <Grid item xs={12} md={12}>
                <Box display="inline-grid" width="100%">
                  <FormLabel>Subject</FormLabel>
                  <TextField id="outlined-basic" variant="outlined" />
                </Box>
              </Grid>
              <Grid item xs={12} md={12}>
                <Box display="inline-grid" width="100%">
                  <FormLabel>Message</FormLabel>
                  <TextField id="outlined-basic" variant="outlined" />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Button
                  variant="contained"
                  style={{
                    background: "rgb(147, 192, 27)",
                    padding: "1rem",
                    color: "white",
                    marginTop: "1rem",
                  }}
                >
                  <b>Send Message</b>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default contact;
