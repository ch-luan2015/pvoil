import React from 'react';
import HeaderHome from "./HeaderHome"
import CarouselHome from './CarouselHome/CarouselHome';
import CompanyOverview from './CompanyOverview/CompanyOverview';
import Customer from './Customer/Customer';
import CompanyInfo from './CompanyInfo/CompanyInfo';
import NewsDaily from './NewsDaily/NewsDaily'
import DistributionSystem from './DistributionSystem/DistributionSystem'
import FooterHome from './FooterHome/FooterHome';
import { BackTop } from 'antd';
import { CaretUpFilled } from '@ant-design/icons';


import styles from "./Home.module.scss"

const imgCarousel = [
  { url: "/image/Banner/1banner.jpg" },
  { url: "/image/Banner/123.jpg" },
  { url: "/image/Banner/b-003.jpg" },
  { url: "/image/Banner/banner01.jpg" },
  { url: "/image/Banner/banner02.jpg" },
]
var settingsBanner = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};




const Home = () => {

  return (
    <div className={styles.home}>
      <HeaderHome />
      <CarouselHome arrayImage={imgCarousel} settings={settingsBanner} widthSlide={{ width: "1280px" }} />
      <CompanyInfo />
      <NewsDaily />
      <DistributionSystem />
      <CompanyOverview />
      <Customer />
      <BackTop />
      <FooterHome />
      <BackTop>
        <div className={styles.backTop}><CaretUpFilled /></div>
      </BackTop>
    </div>
  );
};
export default Home;
