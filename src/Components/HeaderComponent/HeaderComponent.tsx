import React from 'react';
import { LogoutOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Image, Layout, Menu } from 'antd';

const { Header } = Layout;
import img from '../../assets/logo.png'
import { handleLogout } from '../../lib';



const items1: MenuProps['items'] = [{
    key: '/logout',
    icon: <LogoutOutlined />,
    label: 'Logout',
    onClick: handleLogout
}]




const HeaderComponent: React.FC = () => {

    return (

        <Header style={{ display: 'flex', borderBottom: '1px solid white' }}>
            <div className="demo-logo">
                <Image preview={false} width={40} src={img} />
            </div>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={items1}
                style={{ display: 'flex', flexDirection: 'row-reverse', width: '100%' }}
            />
        </Header>
    );
};

export default HeaderComponent;