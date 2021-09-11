import React from 'react'
import { Row, Col, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import styles from './CompanyOverview.module.scss';


const aOverView = [
  {
    img: "/image/News/home_icon_1.png",
    title: "80.294 tỷ VNĐ",
    caption: "doanh thu năm 2019"
  },
  {
    img: "/image/News/home_icon_2.png",
    title: "5.762",
    caption: "nhân viên"
  },
  {
    img: "/image/News/home_icon_3.png",
    title: "10.342 tỷ VNĐ",
    caption: "vốn điều lệ"
  },
  {
    img: "/image/News/home_icon_4.png",
    title: "952.000 m3",
    caption: "Tổng sức chứa kho xăng dầu"
  },
  {
    img: "/image/News/home_icon_5.png",
    title: "3,2 triệu m3, tấn/năm",
    caption: "Phân phối xăng dầu, chiếm 20% thị phần"
  },
  {
    img: "/image/News/home_icon_6.png",
    title: "580",
    caption: "Cửa hàng xăng dầu trực thuộc"
  }
]


function CompanyOverview() {

  const renderItemView = () => {
    return aOverView.map((item, index) => {
      return (
        <Col xs={12} sm={12} md={12} lg={8} xl={8} key={index} >
          <figure className={styles.ViewItem}>
            <div className={styles.ViewItem_Logo} >
              <img src={item.img} alt={item.img} title={item.img} />
            </div>
            <figcaption className={styles.ViewItem_Caption} style={{ textAlign: "center" }}>
              <h5 className={styles.ViewItem_Caption__Title}>{item.title}</h5>
              <p className={styles.ViewItem_Caption__Caption}>{item.caption}</p>
            </figcaption>
          </figure>
        </Col>
      )
    })
  }


  return (
    <section className={styles.CompanyOverview} style={{ backgroundImage: 'url("./image/media/home_bg_6.png")' }}>
      <Row span={24} className={styles.CompanyOverview_Grid}>

        <div className={styles.pv_title}>
          <p>Tổng quan PPV</p>
        </div>

        <Row className={styles.CompanyOverview_Grid__Content}>
          {renderItemView()}
        </Row>


        <Row span={24} className={styles.btn_ViewMore}>
          <Button type="danger" shape="round" size="large" >
            Xem Thêm <RightOutlined />
          </Button>
        </Row>

      </Row>
    </section>
  )
}

export default CompanyOverview
