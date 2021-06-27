import React, { Children } from 'react'
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

function AppLayout({children}) {
    console.log(children)
    return (
        <div>
            <Layout className="vh-100">
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
                >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                            <Link to="/Add-data" style={{ color: 'white', textDecoration: 'none' }}>ADD DATA</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />}>
                            <Link to="/All-data" style={{ color: 'white', textDecoration: 'none' }}>UPDATE DATA</Link>
                    </Menu.Item>
                </Menu>
                </Sider>
                <Layout>
                    <Content>
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default AppLayout
