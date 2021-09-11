import React from 'react'
import CarouselHome from '../CarouselHome/CarouselHome'
import styles from './Customer.module.scss'

const imgBrand = [
  { url: "/image/Brand/1.jpg" },
  { url: "/image/Brand/2.jpg" },
  { url: "/image/Brand/3.jpg" },
  { url: "/image/Brand/4.jpg" },
  { url: "/image/Brand/5.jpg" },
  { url: "/image/Brand/6.jpg" },
  { url: "/image/Brand/7.jpg" },
  { url: "/image/Brand/8.jpg" },
  { url: "/image/Brand/9.jpg" },
  { url: "/image/Brand/10.jpg" },

]

var settingsBrand = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  variableWidth: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
export default function Customer() {
  return (
    <section className={styles.customer}>
      <div className={styles.customer_container}>
        <div className={styles.customer_container__Title}>
          <h2>KHÁCH HÀNG THÂN THIẾT</h2>
          <p>Trên chặng đường phát triển của doanh nghiệp, một đối tác thích hợp là tài sản quý giá.
          PPV rất vinh hạnh khi được nhiều khách hàng tin tưởng chọn lựa và gắn bó lâu dài.</p>
        </div>
        <div className={styles.customer_container__partnerList}>
          <CarouselHome arrayImage={imgBrand} settings={settingsBrand} style={{ padding: "10px" }} widthSlide={{ width: "100%" }} />
        </div>
      </div>
    </section>
  )
}
