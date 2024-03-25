import React from 'react';
import { CustomerDetailComponent } from '../../Components';
import { Content } from 'antd/es/layout/layout';
import { SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Card, Breadcrumb, theme, ConfigProvider } from 'antd';

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        phoneNumber: '123-456-7890',
        gender: 'Male', // Example gender
    },
    {
        key: '2',
        name: 'Joe Black',
        age: 42,
        address: 'London No. 1 Lake Park',
        phoneNumber: '987-654-3210',
        gender: 'Male', // Example gender
    },
    {
        key: '3',
        name: 'Jim Green',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        phoneNumber: '456-789-0123',
        gender: 'Female', // Example gender
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
        phoneNumber: '789-012-3456',
        gender: 'Other', // Example gender
    },
    {
        key: '5',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
        phoneNumber: '789-012-3456',
        gender: 'Other', // Example gender
    },
    {
        key: '6',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
        phoneNumber: '789-012-3456',
        gender: 'Other', // Example gender
    },
    {
        key: '7',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
        phoneNumber: '789-012-3456',
        gender: 'Other', // Example gender
    },
    {
        key: '8',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
        phoneNumber: '789-012-3456',
        gender: 'Other', // Example gender
    },
    {
        key: '9',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
        phoneNumber: '789-012-3456',
        gender: 'Other', // Example gender
    },
];

const CustomerDetails: React.FC = () => {
    const {
        token: { borderRadiusLG },
    } = theme.useToken();
    return (
        <Card

            style={{ backgroundColor: '#08142c' }}
            title={
                <ConfigProvider
                    theme={{
                        components: {
                            Breadcrumb: {
                                itemColor: 'rgba(255,255,255, 0.3)',
                                lastItemColor: 'rgba(255,255,255, 0.3)',
                                separatorColor: 'rgba(255,255,255, 0.3)'
                            }
                        }
                    }}
                >
                    <Breadcrumb style={{ margin: '16px 0', color: 'white' }}>
                        <Breadcrumb.Item><UserOutlined /> Admin  </Breadcrumb.Item>
                        <Breadcrumb.Item>Customer Details</Breadcrumb.Item>
                    </Breadcrumb>
                </ConfigProvider>
            }
            extra={<SettingOutlined style={{ color: 'white' }} />}
        >
            <Content
                style={{
                    height: '73.4vh',
                    borderRadius: borderRadiusLG,
                }}
            >
                <CustomerDetailComponent data={data} />;
            </Content>
        </Card>
    )

};

export default CustomerDetails;
