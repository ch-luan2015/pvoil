import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

import './HeaderBar.scss';

const { Header } = Layout;

const HeaderBar = (props) => (
  <Header className="site-layout-background"  style={{ position: 'fixed', zIndex: 1, width: '100%',padding: 0 }}>
      {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: props.toggle,
      })}
  </Header>
);

HeaderBar.propTypes = {
  collapsed: PropTypes.number,
  toggle: PropTypes.func
};

export default HeaderBar;
