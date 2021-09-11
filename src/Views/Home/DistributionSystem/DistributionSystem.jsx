import React from 'react'
import Slider from "react-slick";
import PropTypes from 'prop-types';
import "./DistributionSystem.scss";
import { EnvironmentTwoTone, PhoneTwoTone, HomeTwoTone, ShopTwoTone, HomeFilled } from '@ant-design/icons'



function DistributionSystem() {

  const disSystem = [
    { url: "/image/Haiphat/HP-01.jpg", name: "CHXD HẢI PHÁT SỐ 01", address: "Đường 10/3, Phường Tân Lợi, Tp. Buôn Mê Thuột, Tỉnh Đắk Lắk", phone: "091 157 6789" },
    { url: "/image/Haiphat/HP-02.png", name: "CHXD HẢI PHÁT SỐ 02", address: "Đường 10/3, Phường Tân Lợi, Tp. Buôn Mê Thuột, Tỉnh Đắk Lắk", phone: "091 157 6789" },
    { url: "/image/Haiphat/HP-03.png", name: "CHXD HẢI PHÁT SỐ 03", address: "Đường 10/3, Phường Tân Lợi, Tp. Buôn Mê Thuột, Tỉnh Đắk Lắk", phone: "091 157 6789" },
    { url: "/image/Haiphat/HP-04.png", name: "CHXD HẢI PHÁT SỐ 04", address: "Đường 10/3, Phường Tân Lợi, Tp. Buôn Mê Thuột, Tỉnh Đắk Lắk", phone: "091 157 6789" },
    { url: "/image/Haiphat/HP-05.jpg", name: "CHXD HẢI PHÁT SỐ 05", address: "Đường 10/3, Phường Tân Lợi, Tp. Buôn Mê Thuột, Tỉnh Đắk Lắk", phone: "091 157 6789" },
    { url: "/image/Haiphat/HP-06.png", name: "CHXD HẢI PHÁT SỐ 06", address: "Đường 10/3, Phường Tân Lợi, Tp. Buôn Mê Thuột, Tỉnh Đắk Lắk", phone: "091 157 6789" },
  ]


  const settingsDisSystem = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 769,
        settings: {
          className: "center",
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
          centerPadding: "0px",
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "0px"
        }
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
          centerMode: true,
          infinite: true,
          className: "center",
        }
      }
    ]
  };
  const renderCarousel = () => {
    return disSystem.map((item) => {
      return <figure key={item.url} >
        <img src={`${item.url}`} style={{ objectFit: "fill", width: "100%", height: "200px", borderRadius: "8px" }} />
        <figcaption className="disCarousel-caption">
          <h3><ShopTwoTone twoToneColor="#52c41a" />{" "}{item.name}</h3>
          <p><EnvironmentTwoTone twoToneColor="#E0494C" />{" "}{item.address}</p>
          <p><PhoneTwoTone />{" "}{item.phone}</p>
        </figcaption>
      </figure >
    })
  }
  return (
    <>
      <div className="PC-Title">
        <a href="/tintuc-sukien.html">Hệ Thống</a>
      </div>
      <Slider {...settingsDisSystem} style={{ margin: "0 auto", borderRadius: "8px" }} className="disCarousel">
        {renderCarousel()}
      </Slider>
    </>
  )
}


// DistributionSystem.propTypes = {
//   arrayImage: PropTypes.array,
//   settings: PropTypes.data,
//   style: PropTypes.object,
//   widthSlide: PropTypes.object,
// };

export default DistributionSystem;
