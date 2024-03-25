import React, { useState } from 'react';
import { AccountComponent } from '../../Components';
import { Card, Breadcrumb, theme, ConfigProvider } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { SettingOutlined, UserOutlined } from '@ant-design/icons';


const Account: React.FC = () => {
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState('Nithesh Ravikumar');
    const [email, setEmail] = useState('nitheshravikumar13631@gmail.com');
    const [phone, setPhone] = useState('+91 7010340865');

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleSaveClick = () => {
        setEditing(false);
    };
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
                        <Breadcrumb.Item>Account</Breadcrumb.Item>
                    </Breadcrumb>
                </ConfigProvider>
            }
            extra={<SettingOutlined style={{ color: 'white' }} />}
        >
            <Content

                style={{
                    height: '73.4vh',
                    padding: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    overflowX: 'hidden',
                    rowGap: 20,
                    borderRadius: borderRadiusLG,
                }}
            >
                <AccountComponent
                    name={name}
                    email={email}
                    phone={phone}
                    onEdit={handleEditClick}
                    onSave={handleSaveClick}
                    onNameChange={setName}
                    onEmailChange={setEmail}
                    onPhoneChange={setPhone}
                    editing={editing}
                />
            </Content>
        </Card>

    );
};

export default Account;
