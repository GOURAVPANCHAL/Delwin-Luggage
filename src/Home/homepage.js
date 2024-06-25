import React from 'react'
import Header from './header';
import Homemain from './homemain';
import Testimonial from './testimonial';
import Products from './products';
import CenterImage from './centerImage';
const homepage = () => {
    return (
        <>
            <Header />
            <Homemain />
            <Products />
            <CenterImage/>
            <Testimonial />
        </>
    )
}

export default homepage