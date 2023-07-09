import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Kitchen from "../../assets/images/Kitchen.jpg";
import Beauty from "../../assets/images/Beauty.jpg";
import Shop from "../../assets/images/Shop.jpg";
import Toys from "../../assets/images/Toys.jpg";
import Gaming from "../../assets/images/Gaming .jpg";

function HomeCarousel() {
  return (
    <Carousel fade={true} pause={false} indicators={false}>
      <Carousel.Item interval={2000}>
        <img
          className="home__image d-block w-100"
          src={Kitchen}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="home__image d-block w-100"
          src={Beauty}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="home__image d-block w-100"
          src={Gaming}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="home__image d-block w-100"
          src={Shop}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="home__image d-block w-100"
          src={Toys}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
