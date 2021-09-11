import React from 'react'
import {
    UserOutlined,
    LaptopOutlined, NotificationOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import { Layout } from 'antd';
import PropTypes from 'prop-types';

import './style.scss';
import { NavLink, useRouteMatch } from 'react-router-dom';
// import HrManager from '../../../HRManagerPage';
// import Cards from '../Card';


  const { SubMenu } = Menu;
  const { Sider } = Layout;

  const SideBar = (props) => {

    const match = useRouteMatch();
   return(
      <>
        <Sider trigger={null} collapsible collapsed={props.collapsed}>
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                  <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                      <Menu.Item key="1">
                        <NavLink exact to={{
                          pathname:`${match.url}`
                        }}>
                          DashBoard
                        </NavLink>
                      </Menu.Item>
                      <Menu.Item key="2">
                        <NavLink exact to={{
                          pathname:`${match.url}/quanly`
                        }}>
                          Quản Lý Nhân Sự
                        </NavLink>
                      </Menu.Item>
                      <Menu.Item key="3">option3</Menu.Item>
                      <Menu.Item key="4">option4</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                      <Menu.Item key="5">option5</Menu.Item>
                      <Menu.Item key="6">option6</Menu.Item>
                      <Menu.Item key="7">option7</Menu.Item>
                      <Menu.Item key="8">option8</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                      <Menu.Item key="9">option9</Menu.Item>
                      <Menu.Item key="10">option10</Menu.Item>
                      <Menu.Item key="11">option11</Menu.Item>
                      <Menu.Item key="12">option12</Menu.Item>
                  </SubMenu>
              </Menu>
        </Sider>
        {/* <Switch>
          <Route
            exact
            path="/admin/dashboard"
            component={Cards}
          />
          <Route
            path="/admin/dashboard/quanly"
            component={HrManager}
          />
        </Switch> */}
      </>
    )
}

SideBar.propTypes = {
    collapsed: PropTypes.any
};

export default SideBar;
