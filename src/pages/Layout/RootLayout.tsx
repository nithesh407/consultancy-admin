import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Products, Account, CustomerDetails, Orders } from '..';
import { HeaderComponent, SiderComponent } from '../../Components';



const RootLayout: React.FC = () => {

    return (
        <Layout style={{ height: '99vh', margin: -7.5 }}>
            <HeaderComponent />
            <Layout style={{ backgroundColor: '#efebe6' }}>
                <SiderComponent />
                <Layout style={{ backgroundColor: '#efebe6' }}>
                    <Outlet />
                </Layout>
            </Layout>
        </Layout >
    );
};

export default RootLayout;