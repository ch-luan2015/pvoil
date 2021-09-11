import React from 'react'
import { Layout, Drawer } from 'antd';
import { enquireScreen, unenquireScreen } from 'enquire-js'
import PropTypes from 'prop-types';

import './index.scss';
import SideBar from './SideBar/SideBar';
import HeaderBar from '../HeaderBar';
import FooterBar from '../FooterBar';
import BreadCrumb from '../BreadCrumb';
const { Content } = Layout;

export default class LayOut extends React.Component {
    constructor(props) {
        super(props)
    }
    static propTypes = {
        children: PropTypes.any,
        titleBar: PropTypes.string
      }
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
                            {this.props.children}
                        </div>
                    </Content>
                    <FooterBar />
                </Layout>
            </Layout>
        );
    }
}
