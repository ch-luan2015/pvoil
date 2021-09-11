import { Result } from 'antd';
import React, { lazy, Suspense } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import Auth from './Helper/Auth/Auth';
import { Spin } from 'antd';
import AuthLogin from './Helper/Auth/CheckLogin';
import LayOut from './Component/Common/Layout';

const HomePage = lazy(() => import('./Views/Home'))
const LoginPage = lazy(() => import('./Views/Login'))
const AdminDashBoardPage = lazy(() => import('./Views/AdminDashBoard'))
const UserManagePage = lazy(() => import('./Views/UserManagerPage'))

const PageNotFound = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Link to='/'>Back Home</Link>}
  />
);

const Routers = () => (
  <>
    <Suspense
      fallback={
        <Spin
          size='large'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            color: '#000000',
          }}
        />
      }
    >
      <Switch>
        <Route exact path="/" component={HomePage} />
        <AuthLogin path="/login">
          <LoginPage />
        </AuthLogin>
        <Redirect exact from="/admin" to="/admin/dashboard" />

        <Route exact path={['/admin/dashboard', '/admin/usermanage']} render={() =>
          <LayOut>
            <Suspense
              fallback={
                <Spin
                  size='large'
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 'calc(76.5vh - 46px)',
                    color: '#000000',
                  }}
                />
              }
            >
              <Auth path="/admin/dashboard">
                <AdminDashBoardPage />
              </Auth>
              <Auth path="/admin/usermanage">
                <UserManagePage />
              </Auth>
            </Suspense>
          </LayOut>} />

        <Route path="*" component={PageNotFound} />
      </Switch>
    </Suspense>
  </>
)

export default Routers;
