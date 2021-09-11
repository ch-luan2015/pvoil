import React, { useState } from 'react'
import {
    UserOutlined,
    LaptopOutlined, NotificationOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import {  NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import './Sidebar.scss';

SideBar.propTypes = {
    collapsed: PropTypes.any,
    titleBar: PropTypes.string
};

export default function SideBar(props) {
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState(checkTitleBar);

  function checkTitleBar() {
    let result;
    switch (location.pathname) {
      case "/admin/dashboard":
        result= '1';
        break;
      case "/admin/usermanage":
        result= '2';
        break;
    }
    return result;
  }

  function handleClick(e) {
    setSelectedKey(e.key);
  }
    const { SubMenu } = Menu;
    const { Sider } = Layout;
    return (
        <Sider trigger={null} collapsible collapsed={props.collapsed}>
            <div className="logo" />
            <Menu
        defaultSelectedKeys={selectedKey}
        selectedKeys={[selectedKey]}
        mode="inline"
        theme="dark"
        onClick={handleClick}
      >
        <Menu.Item key="1" icon={<UserOutlined />}>
        <NavLink to="/admin/dashboard"/> Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
        <NavLink to="/admin/usermanage"/> Quản lý nhân sự
        </Menu.Item>
        <SubMenu key="sub1" icon={<NotificationOutlined />} title="Navigation Two">
          <Menu.Item key="3">
          <NavLink to="/admin/usermanage"/> Quản lý nhân sự
          </Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
          <SubMenu key="sub1-2" title="Submenu">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub2" icon={<LaptopOutlined />} title="Navigation Three">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
        </SubMenu>
      </Menu>
        </Sider>
    )
}
