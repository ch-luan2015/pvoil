import React from 'react'
import { Breadcrumb } from 'antd';

import {
  HomeOutlined,
  UserOutlined,
} from '@ant-design/icons';

 const BreadCrumb = () => (
  <Breadcrumb style={{textAlign:'left'}}>
    <Breadcrumb.Item href="">
      <HomeOutlined />
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
      <UserOutlined />
      <span>Application List</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item>Application</Breadcrumb.Item>
  </Breadcrumb>
)

export default BreadCrumb
