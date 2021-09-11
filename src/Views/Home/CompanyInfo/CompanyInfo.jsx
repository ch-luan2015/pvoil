import React from 'react'
import { Row, Col } from 'antd';
import { Table } from 'antd';
import styles from './CompanyInfo.module.scss';





export default function CompanyInfo() {
  const columns = [
    {
      title: 'Gía Bán Lẻ Xăng Dầu',
      children: [
        {
          title: 'Sản phẩm',
          dataIndex: 'sp',
          key: 'sp',
          // eslint-disable-next-line react/display-name
          return: text => <p style={{ textAlign: "center" }}>{text}</p>,
        },
        {
          title: 'Vùng 1',
          dataIndex: 'v1',
          key: 'v1',

        },
        {
          title: 'Vùng 2',
          dataIndex: 'v2',
          key: 'v2',
        },
      ]
    }
  ];

  const data = [
    {
      key: 'sp',
      sp: 'Xăng RON 95-III',
      v1: "15.350 ₫/l",
      v2: "15.650 ₫/l",
    },
    {
      key: 'sp',
      sp: 'Xăng E5 RON 92',
      v1: "15.350 ₫/l",
      v2: "15.650 ₫/l",
    },
    {
      key: 'sp',
      sp: 'Xăng RON 95-III',
      v1: "15.350 ₫/l",
      v2: "15.650 ₫/l",
    },
  ];
  return (
    <section className={styles.Information}>
      <Row style={{ margin: "0 auto" }}>
        <Col xs={24} sm={24} md={24} lg={14} xl={16} className={styles.Information_Left}>
          <h1>Công Ty Cổ Phần Thương Mại Dịch Vụ Dầu Khí Hải Phát</h1>
          <p>Được thành lập từ tháng 01/2015, tọa lạc tại địa chỉ 26E, Khu phố 1, phường Quang Vinh, thành phố Biên Hòa, tỉnh Đồng Nai.</p>
          <p>Hoạt động trong lĩnh vực bán buôn, bán lẻ xăng dầu nhớt. Với đội ngũ nhân viên kinh doanh giàu kinh nghiệm trong lĩnh vực kinh doanh xăng dầu, hoạt động theo phương châm chất lượng và uy tín luôn đặt lên hàng đầu, chúng tôi cam kết cung cấp cho khách hàng nguồn xăng dầu đảm bảo chất lượng và số lượng. Nguồn xăng dầu cung cấp cho khách hàng được lấy trực tiếp từ các kho của nhà nước như: Petrolimex, Saigon Petro, Petimex, PV Oil,…</p>
          <p>Để đảm bảo chất lượng nguồn hàng, ngoài ra khách hàng hoàn toàn yên tâm về phương tiện vận chuyển xăng dầu, hệ thống barem bồn chuẩn đảm bảo về số lượng cung cấp cho khách hàng, tạo dựng niềm tin vào Hải Phát ngay từ lần hợp tác đầu tiên.</p>
          <p>Ngoài ra, Hải Phát hiện đang là nhà nhập khẩu và phân phối độc quyền sản phẩm nhớt FORGE – Sản phẩm của ÚC – được sản xuất và đóng gói tại Singapore phù hợp với các phương tiện và thiết bị trong lĩnh vực vận tải, tàu thuyền và công trình xây dựng với chất lượng tốt và giá cả hợp lý phù hợp với thị trường Việt Nam.</p>


        </Col>
        <Col xs={24} sm={24} md={24} lg={10} xl={8} className={styles.Information_Right}>
          <div className={styles.Information__OilPrice}>
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              tableLayout="fixed"
              bordered={true}
            />
          </div>

          <div className={styles.Information__Video}>
            <iframe loading="lazy" title="Forge Lubricant - TechKool" width={1020} height={574} src="https://www.youtube.com/embed/s_AXbAaTT1o?feature=oembed" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen data-rocket-lazyload="fitvidscompatible" data-lazy-src="https://www.youtube.com/embed/s_AXbAaTT1o?feature=oembed" __idm_frm__={1897} className="lazyloaded" data-was-processed="true" />
          </div>

        </Col>
      </Row>
    </section>
  )
}

