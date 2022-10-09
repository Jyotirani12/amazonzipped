import React from 'react';
// import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const ImageSlider=()=> {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/wcVWS1c/Capture1.jpg" alt="Capture1"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/vjz74Zf/Capture2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/gSt0cFF/Capture3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;