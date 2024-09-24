import React from 'react';
import { Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
    {
        id: 1,
        src: 'Images/pancakes integrales.jpeg',
        alt: 'Promocion 1'
    },
    {
        id: 2,
        src: 'Images/yogurt.jpeg',
        alt: 'Promocion 2'
    },
    {
        id: 3,
        src: 'Images/pancakes integrales.jpeg',
        alt: 'Promocion 3'
    },
    {
        id: 4,
        src: 'Images/yogurt.jpeg',
        alt: 'Promocion 4'
    }
];

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1
    };

    return (
        <Box sx={{ width: '100%', maxWidth: '800px', mx: 'auto', marginTop: '30px'}}>
            <Slider {...settings}>
                {images.map((img) => (
                    <Box key={img.id}>
                        <img
                            src={img.src}
                            alt={img.alt}
                            style={{
                                width: '100%',
                                height: '600px',
                                borderRadius: '20px',
                                objectFit: 'cover',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                            }}
                        />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

export default Carousel;
