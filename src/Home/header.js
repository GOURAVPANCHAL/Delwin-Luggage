import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bannerImage1 from '../images/banner1.jpg'
import bannerImage2 from '../images/banner2.webp'
import bannerImage3 from '../images/banner5.webp.jpg'
import bannerImage4 from '../images/banner6.webp.jpg'

const header = () => {
  return (
    <>
      <Carousel autoPlay showThumbs={false}>
      <div>
          <img src={bannerImage4} />
        </div>
        <div>
          <img src={bannerImage3} />
        </div>
        <div>
          <img src={bannerImage1} />
        </div>
        <div>
          <img src={bannerImage2} />
        </div>
      </Carousel>
    </>
  )
}

export default header