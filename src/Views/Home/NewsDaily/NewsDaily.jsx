import React from "react";
import { Row, Col } from 'antd';
import styles from './NewsDaily.module.scss'

export default function NewsDaily() {
  return (
    <section className={styles.Portal_main}>

      <Row gutter={[16, 16]} className={styles.PC_Left}>

        <Col xs={24} sm={24} md={24} lg={16} xl={16} >
          <Row className={styles.PC_Title1}>
            <a href="/tintuc-sukien.html">Tin tức</a>
          </Row>
          <Row className="caption_news">
            <Col md={12} className={styles.content_1}>
              <figure>
                <a href="/nd/tin-chuyen-nganh/tu-hao-tien-xa-cung-viet-nam.html">
                  <img
                    data-src="https://fs.petrolimex.com.vn/ThumbnailBigPngs/6783DC1271FF449E95B74A9520964169/0/120/0/8B192D63849E463CAF31EE439F748E17/0/223525/Tu-hao-tien-xa-cung-Viet-Nam.png"
                    alt
                    className="vie-lazy"
                    src="https://fs.petrolimex.com.vn/ThumbnailBigPngs/6783DC1271FF449E95B74A9520964169/0/120/0/8B192D63849E463CAF31EE439F748E17/0/223525/Tu-hao-tien-xa-cung-Viet-Nam.png"
                  />
                </a>
                <h3>
                  <a href="/nd/tin-chuyen-nganh/tu-hao-tien-xa-cung-viet-nam.html">
                    Petrolimex tự hào tiến xa cùng Việt Nam
                  </a>
                  <p>15/01/2021&nbsp;06:30 CH</p>
                </h3>

                <caption>
                  Chào mừng 65 năm thành lập Tập đoàn Xăng dầu Việt Nam
                  (12.01.1956 - 12.01.2021)
                  Ban biên tập www.petrolimex.com.vn
                  trân trọng gửi đến quý bạn đọc Phim 65 năm Petrolimex Tự hào
                  tiến xa cùng Việt Nam
                </caption>
              </figure>
            </Col>

            <Col md={12} className={styles.content_1}>
              <figure>
                <a href="/nd/tin-chuyen-nganh/tu-hao-tien-xa-cung-viet-nam.html">
                  <img
                    data-src="https://fs.petrolimex.com.vn/ThumbnailBigPngs/6783DC1271FF449E95B74A9520964169/0/120/0/8B192D63849E463CAF31EE439F748E17/0/223525/Tu-hao-tien-xa-cung-Viet-Nam.png"
                    alt
                    className="vie-lazy"
                    src="https://fs.petrolimex.com.vn/ThumbnailBigPngs/6783DC1271FF449E95B74A9520964169/0/120/0/8B192D63849E463CAF31EE439F748E17/0/223525/Tu-hao-tien-xa-cung-Viet-Nam.png"
                  />
                </a>
                <h3>
                  <a href="/nd/tin-chuyen-nganh/tu-hao-tien-xa-cung-viet-nam.html">
                    Petrolimex tự hào tiến xa cùng Việt Nam
                  </a>
                  <p>15/01/2021&nbsp;06:30 CH</p>

                </h3>

                <caption>
                  Chào mừng 65 năm thành lập Tập đoàn Xăng dầu Việt Nam
                  (12.01.1956 - 12.01.2021)
                  Ban biên tập www.petrolimex.com.vn
                  trân trọng gửi đến quý bạn đọc Phim 65 năm Petrolimex Tự hào
                  tiến xa cùng Việt Nam
                </caption>
              </figure>
            </Col>

          </Row>
        </Col>

        <Col xs={24} sm={24} md={24} lg={8} xl={8} >
          <Row className={styles.PC_Title2}>
            <a href="/tintuc-sukien.html">Video</a>
          </Row>
          <Row>
            <Col className={styles.Information__Video}>
              <figure>
                <iframe loading="lazy" title="Forge Lubricant - TechKool" width={1020} height={574} src="https://www.youtube.com/embed/s_AXbAaTT1o?feature=oembed" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen data-rocket-lazyload="fitvidscompatible" data-lazy-src="https://www.youtube.com/embed/s_AXbAaTT1o?feature=oembed" __idm_frm__={1897} className="lazyloaded" data-was-processed="true" />
                <figcaption>Đồng hành cùng Hải Phát</figcaption>
              </figure>
            </Col>
          </Row>
        </Col>

      </Row>

    </section >
  );
}
