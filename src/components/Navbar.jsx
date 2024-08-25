import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link, NavLink } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const items = [
    {
        key: 1,
        label: (
            <NavLink
                to={`/`}
                className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
                Home
            </NavLink>
        ),
    },
    {
        key: 2,
        label: (
            <NavLink
                to={`/about`}
                className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
                About
            </NavLink>
        ),
    },
    {
        key: 3,
        label: (
            <NavLink
                to={`/contact`}
                className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
                Contact
            </NavLink>
        ),
    },
];

const Navbar = ({ Outlet }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" />
                <div className='mr-[40px]'>
                    <Link to={`/`}>
                        <img src="../assets/favico.png" className='w-[50px]' alt="logo" />
                    </Link>
                </div>
                <Menu
                    theme='dark'
                    mode="horizontal"
                    items={items}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                />
            </Header>
            <Content
                style={{
                    padding: '0 48px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {Outlet}
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                    marginTop: 'auto',
                    height: `50px`,
                    marginBlockStart: '10px',
                }}
            >
                Created by ME ©{new Date().getFullYear()}
            </Footer>
        </Layout>
    );
};

export default Navbar;