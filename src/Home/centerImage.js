import React from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import image1 from '../images/1.jpg'
import { Typography } from '@mui/material'
// import image2 from '../images/2.jpg'
// import image3 from '../images/3.jpg'
// import image4 from '../images/1.jpg'

const centerImage = () => {
  return (
    <>
    <Typography mt={5}>
      <img width='100%' height='100%' src={image1} />
    </Typography>
       {/* <Carousel autoPlay showThumbs={false} data-bs-interval="true" showArrows={false}>
        <div style={{height:'100vh'}}>
          <img height='100%' src={image1} />
        </div>
        <div style={{height:'100vh'}}>
          <img height='100%' src={image2} />
        </div>
        <div style={{height:'100vh'}}>
          <img height='100%' src={image3} />
        </div>
        <div style={{height:'100vh'}}>
          <img height='100%' src={image4} />
        </div>
      </Carousel> */}
    </>
  )
}

export default centerImage