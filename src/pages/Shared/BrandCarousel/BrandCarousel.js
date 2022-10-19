import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import jett from '../../../assests/jett 02.png';
import sage from '../../../assests/sage 01.jpg';
import sova from '../../../assests/sova 02.jpg';
import viper from '../../../assests/viper 02.png';

const BrandCarousel = () => {
    return (
        <div>
            <Carousel fade indicators={false} controls={false} interval={2000}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={jett}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sova}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sage}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={viper}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BrandCarousel;