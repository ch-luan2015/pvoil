import React from 'react'
import { Layout, Drawer, Col, Row} from 'antd';
import { enquireScreen, unenquireScreen } from 'enquire-js'
import SideBar from './Components/SideBar';
import HeaderBar from '../../Component/Common/HeaderBar';
import FooterBar from '../../Component/Common/FooterBar';
import './Admin.scss';
import BreadCrumb from '../../Component/Common/BreadCrumb';
import CardItem from './Components/Card';
const { Content } = Layout;

export default class Admin extends React.Component {
    state = {
        collapsed: false,
        isMobile: false,
    };

    componentDidMount() {
        this.enquireHandler = enquireScreen(mobile => {
            const { isMobile } = this.state
            if (isMobile !== mobile) {
                this.setState({
                    isMobile: mobile,
                })
            }
        })
    }

    componentWillUnmount() {
        unenquireScreen(this.enquireHandler)
    }

    toggle = () => {
        this.setState({
            ...this.state,
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const { isMobile, collapsed } = this.state;
        return (
            <Layout style={{ padding: 0, height: '100vh' }}>
                {isMobile ? (
                    <Drawer
                        maskClosable
                        closable={false}
                        onClose={this.toggle}
                        visible={!collapsed}
                        placement="left"
                        width={200}
                        className="drawer_Custom"
                        style={{
                            padding: 0,
                            height: '100vh',
                        }}
                    >
                        <SideBar collapsed={collapsed} />
                    </Drawer>
                ) : (
                        <SideBar collapsed={collapsed} />
                    )}

                <Layout className="site-layout">
                    <HeaderBar collapsed={collapsed ? 1 : 0} toggle={this.toggle} />
                    <Content
                        style={{
                            marginTop: 64,
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <BreadCrumb />
                        <div style={{ padding: 0, marginTop: 24 }}>
                        <Row gutter={24, 24}>
                            <Col  span={6} lg={6} md={12} sm={12} xs={24}>
                                <CardItem />
                            </Col>
                            <Col  span={6} lg={6} md={12} sm={12} xs={24}>
                                <CardItem />
                            </Col>
                            <Col  span={6} lg={6} md={12} sm={12} xs={24}>
                                <CardItem />
                            </Col>
                            <Col  span={6} lg={6} md={12} sm={12} xs={24}>
                                <CardItem />
                            </Col>
                        </Row>
                      </div>
                    </Content>
                    <FooterBar />
                </Layout>
            </Layout>
        );
    }
}
