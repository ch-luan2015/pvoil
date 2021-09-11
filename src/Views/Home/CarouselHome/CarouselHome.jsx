import React from 'react';
import "./CarouselHome.scss"
import Slider from "react-slick";
import PropTypes from 'prop-types';



const CarouselHome = ({ arrayImage, settings, style, widthSlide }) => {

  const renderCarousel = () => {
    return arrayImage.map((item) => {
      return <div key={item.url} style={style}>
        <img src={`${item.url}`} style={{ objectFit: "cover", width: "100%", borderRadius: "8px" }} />
      </div>
    })
  }

  return (
    <Slider {...settings} style={{ maxWidth: widthSlide.width, margin: "0 auto", borderRadius: "8px" }} >
      {renderCarousel()}
    </Slider>
  );
};


CarouselHome.propTypes = {
  arrayImage: PropTypes.array,
  settings: PropTypes.data,
  style: PropTypes.object,
  widthSlide: PropTypes.object,
};

export default CarouselHome;
