import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import {
//   MDBCarousel,
//   MDBCarouselItem,
// } from 'mdb-react-ui-kit';

export default function Slider() {
  return (
    // <div>
    //   <div
    //     className='w-100 d-block'
    //     itemId={1}
    //     src='https://res.cloudinary.com/uploadimgvvv/image/upload/v1677342449/phk33nv5gwrcogbhe9zz.png'
    //     alt='...'
    //   />
    //   <UsbDrive
    //     className='w-100 d-block'
    //     itemId={2}
    //     src='https://res.cloudinary.com/uploadimgvvv/image/upload/v1677341859/fxbbgsatycizvuys7z4g.png'
    //     alt='...'
    //   />
    //   <div
    //     className='w-100 d-block'
    //     itemId={3}
    //     src='https://res.cloudinary.com/uploadimgvvv/image/upload/v1677342449/phk33nv5gwrcogbhe9zz.png'
    //     alt='...'
    //   />
    // </div>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/uploadimgvvv/image/upload/v1677342449/phk33nv5gwrcogbhe9zz.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/uploadimgvvv/image/upload/v1677341859/fxbbgsatycizvuys7z4g.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/uploadimgvvv/image/upload/v1677342449/phk33nv5gwrcogbhe9zz.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}