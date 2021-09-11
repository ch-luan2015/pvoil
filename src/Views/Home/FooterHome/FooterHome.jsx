import React from 'react'
import styles from './FooterHome.module.scss'
import { Row, Col } from 'antd';
import { List } from 'antd';
const data1 = [
  "About Us",
  "Site News",
  "Sitemap",
  "Advertise with us"
];

const data2 = [
  "Terms & Conditions",
  "Disclaimer",
  "Privacy Policy",
  "Contact Us"

];



const FooterHome = () => {
  return (
    <div className={styles.footer_main}>
      <div className={styles.footer_top}>
        <div className={styles.footer_top__logo}>
          <img src="https://d1o9e4un86hhpc.cloudfront.net/a/img/oilprice-logo-footer.png" alt="Oilprice - The No. 1 Source for Oil &amp; Energy News" title="Oilprice - The No. 1 Source for Oil &amp; Energy News" />

        </div>

      </div>
      <div className={styles.footer_bottom}>
        <Row gutter={[24]} className={styles.footer_bottom__container}>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <List
              header={<div className={styles.headerList}>More About Us</div>}
              bordered={false}
              dataSource={data1}
              renderItem={item => (
                <List.Item>
                  <a href="#" className={styles.itemList}>{item}</a>
                </List.Item>
              )}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <List
              header={<div className={styles.headerList}>Site info</div>}
              bordered={false}
              dataSource={data2}
              renderItem={item => (
                <List.Item >
                  <a href="#" className={styles.itemList}>{item}</a>
                </List.Item>
              )}
            />
          </Col>
          <Col xs={0} sm={0} md={0} lg={8} xl={8}>
            <div className={styles.footer_bottom__copyright}>
              <p className={styles.copyrightText}>© <a href="/">OilPrice.com</a><a href="https://plus.google.com/100818571694606454377/posts" rel="external nofollow">Google+</a></p>
              <p className="smallprint">The materials provided on this Web site are for informational and educational purposes only and are not intended to provide tax, legal, or investment advice.</p>
              <p className="smallprint">Nothing contained on the Web site shall be considered a recommendation, solicitation, or offer to buy or sell a security to any person in any jurisdiction.</p>
              <p className="smallprint">Trading and investing carries a high risk of losing money rapidly due to leverage. Individuals should consider whether they can afford the risks associated to trading.</p>
              <p className="smallprint">Merchant of Record: A Media Solutions trading as Oilprice.com</p>
            </div>

          </Col>
        </Row>
      </div>
    </div>
  )
}

export default FooterHome;
