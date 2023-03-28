import React from "react";
import Carousel from "react-bootstrap/Carousel";
import student from "./images/student.jpg";
import slide2 from "./images/slide2.jpg";
import slide3 from "./images/slide3.jpg";

const Carousels = () => {
  return (
    <div className="carasoulcontainer">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 imageHeight"
            src={student}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imageHeight"
            src={slide2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imageHeight"
            src={slide3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Carousels;
