import React from 'react';
import { Button, Col, Form, Input, Row, Space } from 'antd';
import './Login.scss'
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../Actions/User';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const Login = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const onFinishLogin = (values) => {
    dispatch(getUsers(values, callBack));
  }

  const callBack = () => {
    history.push("/admin/dashboard");
  }

  return (
    <Row>
      <Col span={24} xl={8}>
        <Row>
          <div className='contain-aside' style={{ backgroundImage: 'url("/asset/image/bg-4.jpg")' }}>
            <Col>
              <h1>TEST</h1>
            </Col>
            <Col>
              <Space size='large'>
                <h3>HPP Incorporation Company</h3>
                <p>Office website</p>
              </Space>
            </Col>
            <Col>
              <div className='list-link'>
                <p>© 2020 BBCIncorp</p>
                <Space size='large' align='end' className='link'>
                  <Link to='#'> Privacy </Link>
                  <Link to='#'> Legal of Agreement </Link>
                  <Link to='#'> Contact </Link>
                </Space>
              </div>
            </Col>
          </div>
        </Row>
      </Col>
      <Col span={24} xl={16}>
        <div className='contain-form'>
          <div className='form-title'>
            <Space align='center' className='title'>
              <h1>LTP</h1>
              <p>Enter your username and password</p>
            </Space>
          </div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            size='large'
            onFinish={onFinishLogin}
            layout='vertical'
          // validateMessages={validateMessages}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, type: 'email' }]}
              hasFeedback
            >
              <Input prefix={<UserOutlined style={{ color: '#1890FF' }} className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              hasFeedback
              rules={[
                { required: true },
                { min: 6, message: 'mật khẩu 6 kí tự trở lên' },
                // {validator: checkPassword}
              ]}
            >
              <Input.Password
                prefix={<LockOutlined style={{ color: '#1890FF' }} className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" size='large' className="login-form-button">
                Sign In
                </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
