import React from 'react'
import Grid from '@mui/material/Grid'
import newimage from '../images/newbag.webp'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Slider from "react-slick";
import testimonial1 from '../images/image9.png'
import testimonial2 from '../images/image10.png'
import testimonial3 from '../images/image11.png'
import testimonial4 from '../images/image12.png'
import testimonial5 from '../images/image13.png'
import testimonial6 from '../images/image14.png'


const testimonial = () => {
    const content = [
        {
            image: testimonial1,
            heading: 'Traveling Luggage Suitcase',
            title: 'Delwin Luggage',
            desc: 'Delwin Company`s latest luggage bag, designed for the modern traveler.',
        },
        {
            image: testimonial2,
            heading: 'PP Luggage Trolley',
            title: 'Delwin Luggage',
            desc: 'Delwin Company`s latest luggage bag, designed for the modern traveler.',
        },
        {
            image: testimonial3,
            heading: 'Delwin Cabin Size Trolley Suitcase',
            title: 'Delwin Luggage',
            desc: 'Delwin Company`s latest luggage bag, designed for the modern traveler.',
        },
        {
            image: testimonial4,
            heading: 'Everbest Imported hardside zipperless PC 22 inch',
            title: 'Delwin Luggage',
            desc: 'Delwin Company`s latest luggage bag, designed for the modern traveler.',
        },
        {
            image: testimonial5,
            heading: 'Trolley suitcase',
            title: 'Delwin Luggage',
            desc: 'Delwin Company`s latest luggage bag, designed for the modern traveler.',
        },
        {
            image: testimonial6,
            heading: 'Luggage trolley suitcase ',
            title: 'Delwin Luggage',
            desc: 'Delwin Company`s latest luggage bag, designed for the modern traveler.',
        }
    ]
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>

            <Typography variant="h3" align='center' mt={2} mb={5} fontWeight={800}>
                <span className='getcolor'>S</span>uitcase
            </Typography>
            <Container style={{ marginBottom: '5rem'}} >
                <div className="slider-container">
                        <Slider {...settings}>
                    {content.map((item) =>
                            <div className='testimonialcard'>
                                <div style={{display:'flex', justifyContent:'center'}}>
                                    <img sx={{ borderRadius: { xs: '20px', md: '50%', sm: '50%' }, height:{xs: '40vh', md: '40vh%', sm: '40vh'}}} style={{width:'80%'}} src={item.image} />
                                </div>
                                <Typography marginBottom='1rem' p='2rem 1rem 0rem 2rem' color='rgb(36 56 65)' fontWeight='600' variant="h6">{item.heading}<div>
                                    <Typography color='darkcyan' variant="subtitle1">
                                       {item.title}
                                    </Typography>
                                    <Typography variant="subtitle2">
                                       {item.desc}
                                    </Typography>
                                </div>
                                </Typography>
                            </div>
                        )}
                        </Slider>
                </div>
            </Container>
            {/* <Grid container spacing={2}>
                {testimonial.map((item) =>
                    <Grid item xs={6} md={3}>
                        <img src={item.image} alt='testimonial section image' style={{ width: '100%', height: '80%' }} />
                    </Grid>
                )}
            </Grid> */}

            <Container style={{ marginBottom: '5rem' }}>

                <Grid container>
                    <Grid sx={{ padding: { xs: '35px 10px', md: '35px 85px', sm: '35px 10px' }}}  style={{ background: '#363a42', textAlign: 'center' }} item xs={12} md={6}>
                        <div>
                            <Typography variant="h5" color="white" fontWeight='800' mb={5} letterSpacing='4px'>
                                WE LOVE DELWIN BAGS
                            </Typography>
                            <Typography variant="subtitle1" color='lightgray' lineHeight='2' marginBottom='3rem'>
                                A professional-looking tote for your everyday needs! This Wilsons Leather tote has a canvas look with genuine leather trim and a structured silhouette. Its shiny gold-tone hardware and two-tone design give it extra fashionable flair.
                            </Typography>
                            <Button variant="outlined" color="secondary">
                                Discover +
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={newimage} width='100%' height='100%' alt='bag brand' />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default testimonial