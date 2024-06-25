import React from 'react'
import blogimage from '../images/blog.webp'
import { Box, Grid, Typography, Container } from '@mui/material'
const blog = () => {
  return (
    <>
      <Box marginTop={10}>
        <img src={blogimage} width='100%' />
      </Box>
      <Container>
        <Grid container spacing={5} mt={5} mb={5}>
          <Grid item md={6}>
            <Typography color='rgb(0 0 0 / 72%)' variant="h3" letterSpacing='1px'>
              Come let’s explore
            </Typography>
          </Grid>
          <Grid item md={6} mb={5}>
            <Typography variant="h6" letterSpacing='1px' color='gray' maxWidth='80%' lineHeight='28px'>
              Every journey is a story out in the open where every step uncovers the truths about soul, mind, body, heart, travel and a little about the world we live in.
            </Typography>
          </Grid>


          <Grid item md={6} >
            <Box sx={{padding:{xs:'1rem', md:'3rem', sm:'3rem'}, borderRadius:{xs:'1rem', md:'2rem', sm:'2rem'}}} style={{ backgroundColor: 'black'}}>
              <Typography variant="h5" fontWeight={800} color='white' mb={5} letterSpacing='1px'>

                What goes into making the best hard luggage? A Complete Breakdown

              </Typography>
              <Typography letterSpacing='1px' color='white' maxWidth='100%' lineHeight='28px' variant="h6">
                Introduction In today’s time no traveller can think about vacation and not think about luggage. From classic suitcases to uber cool travel bags we’ve come a long way. But did you know? The first hard luggage was invented in the Kingdom of Britain in 1153 during the Crusades. The Royal Army used to transfer weaponry from one place to another; switch to 2023, and hard luggage has become a part.
              </Typography>
            </Box>
          </Grid>

          <Grid item md={6} >
            <Box sx={{ padding: { xs: '1rem', md: '3rem', sm: '3rem' }, borderRadius: { xs: '1rem', md: '2rem', sm: '2rem' } }} style={{ backgroundColor: '#000000cc' }} >
              <Typography variant="h5" fontWeight={800} color='white' mb={5} letterSpacing='1px'>

                Who's got time to pack? Helpful laptop bags for metro life.

              </Typography>
              <Typography letterSpacing='1px' color='white' maxWidth='100%' lineHeight='28px' variant="h6">
                Introduction From Netflix and chill to virtual meetings to keeping up with deadlines and more. Our laptops have taken center stage in today’s modern lifestyle. It becomes one of most sought-after accessories while you’re travelling. In our story today we’re breaking down laptop bags and which type can be the most helpful to you. Laptop bags: A Definition Now it’s not rocket science to figure.
              </Typography>
            </Box>
          </Grid>


          <Grid item md={6} >
            <Box sx={{ padding: { xs: '1rem', md: '3rem', sm: '3rem' }, borderRadius: { xs: '1rem', md: '2rem', sm: '2rem' } }} style={{ backgroundColor: '#000000e8' }}>
              <Typography variant="h5" fontWeight={800} color='white' mb={5} letterSpacing='1px'>
                Trolley Bags
              </Typography>
              <Typography letterSpacing='1px' color='white' maxWidth='100%' lineHeight='28px' variant="h6">
                Trolley Bags Online: 5 reasons they are your sturdy travel pal “To Move, To breathe, To breathe, To gain all while you can, to roam the land of remote: To travel is to live..” - Hans Christian AndersenHaven’t we all tried to look for trolley bags online? In today’s story, find out how they became our first travel pals. Haven't we all resonated with the quote above? Week in and week out hustling...
              </Typography>
            </Box>
          </Grid>



        </Grid>
      </Container>
    </>
  )
}

export default blog