import React, { useState } from "react";

import Logo from "./logo.svg";
import classNames from "classnames";
import { Drawer, Button, Space } from 'antd';
import { Menu } from 'antd';
import { HomeTwoTone, MenuOutlined, DoubleLeftOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import styles from "./styles.module.scss";

const menuItem = [
  { key: 1, name: 'Giới thiệu', url: '#', icon: < HomeTwoTone /> },
  { key: 2, name: 'Lĩnh vực hoạt động', url: '#', icon: null },
  { key: 3, name: 'Mạng lưới', url: '#', icon: null },
  { key: 4, name: "Truyền thông", url: '#', icon: null },
]
const HeaderMobile = (props) => {

  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState(0)

  const showDrawer = () => setVisible(true)
  const onClose = () => setVisible(false)


  function handleClick(e) {
    setCurrent(e.key);
  }

  function renderMenu(menuItem) {
    return menuItem.map((item) => {
      return <Menu.Item key={item.key} style={{
        fontSize: "1rem", fontWeight: "500",
      }} icon={item.icon}>
        < a href={item.href} target="_blank" rel="noopener noreferrer" >
          {item.name}
        </a >
      </Menu.Item >
    })
  }



  function HeaderD() {
    return <div className={styles.sideNav}>

      <Button
        type="text"
        ghost
        size="small"
        icon={<DoubleLeftOutlined />}
        onClick={onClose}
      />


      <div className={styles.welcome}>
        Hải Phát kính chúc quý khách một ngày tốt lành
      </div>
    </div>
  }

  function FooterD() {
    return <div className={styles.footer}>
      <div className={styles.welcome}>
        <div>Công ty TNHH SX&TM Dầu&nbsp;Khí&nbsp;Hải&nbsp;Phát</div>
        <div >
          Quận&nbsp;8 Thành&nbsp;phố
          Hồ&nbsp;Chí&nbsp;Minh
        </div>
      </div>
    </div>
  }


  return (
    <div className={classNames(props.className)}>
      <Space className={styles.navSticky}>
        <div className={styles.left}>
          <Button
            color="#c2b4a8"
            type="text"
            ghost
            icon={<MenuOutlined />}
            onClick={showDrawer}
          />
        </div>
        <div className={styles.center}>
          <a href="/">
            <div className={styles.logo}>
              <img src={Logo} width={30} style={{ width: 30 }} />
            </div>
          </a>
        </div>

        <div className={styles.right} />


      </Space>
      <Drawer
        headerStyle={{ backgroundColor: "#F7F7F7", margin: "0", boxSizing: "border-box", padding: "0.5rem", textAlign: "right" }}
        title={HeaderD()}
        bodyStyle={{ margin: "0", padding: "0", textAlign: "center", height: "100vh" }}
        placement={"left"}
        closable={false}
        onClose={onClose}
        visible={visible}
        footer={FooterD()}
        footerStyle={{ backgroundColor: "#F7F7F7", margin: "0", boxSizing: "border-box", padding: "0.5rem", textAlign: "center" }}
      >
        <Menu theme="light" mode="vertical" selectedKeys={[current]} onClick={handleClick} style={{ marginTop: "1rem", padding: "1rem" }} >
          {renderMenu(menuItem)}
        </Menu>

      </Drawer>
    </div>
  );
}

HeaderMobile.propTypes = {
  className: PropTypes.any,

};


export default HeaderMobile;
