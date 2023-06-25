import React from "react";
import Slider from "infinite-react-carousel";

import "./Carousel.scss";

function Carousel({ children, slidesToShow, arrowsScroll }) {
  return (
    <div className="slider">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
