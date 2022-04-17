import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/slider/slider-1.jpg';
import banner2 from '../../../images/slider/slider-2.jpg';
import banner3 from '../../../images/slider/slider-3.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100" height={500}
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Fitness Heroes</h3>
            <p>Welcome To Fitness Heroes</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" height={500}
            src={banner2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Fitness Heroes</h3>
            <p>Welcome To Fitness Heroes</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" height={500}
            src={banner3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Fitness Heroes</h3>
            <p>
            Welcome To Fitness Heroes
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;