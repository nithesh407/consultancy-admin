import React from 'react';
import { Button, Card, Input, Typography, Image } from 'antd';
import { EditOutlined, UserOutlined, SaveOutlined } from '@ant-design/icons';

const { Text } = Typography;

interface AccountProps {
    name: string;
    email: string;
    phone: string;
    onEdit: () => void;
    onSave: () => void;
    onNameChange: (value: string) => void;
    onEmailChange: (value: string) => void;
    onPhoneChange: (value: string) => void;
    editing: boolean;
}

const AccountComponent: React.FC<AccountProps> = ({ name, email, phone, onEdit, onSave, onNameChange, onEmailChange, onPhoneChange, editing }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card
                style={{ width: '55%' }}
                title={
                    <div style={{ display: 'flex', gap: 8 }}>
                        <UserOutlined />
                        <Text>Account </Text>
                    </div>
                }
                extra={
                    editing ? (
                        <Button onClick={onSave}><SaveOutlined /> Save</Button>
                    ) : (
                        <Button onClick={onEdit}><EditOutlined /> Edit</Button>
                    )
                }
            >
                <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', height: '100%' }}>
                    <div style={{ borderRadius: '50%', overflow: 'hidden' }}>
                        <Image height={100} width={100} src={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        <Text underline style={{ fontSize: 20 }}>{editing ? <Input value={name} onChange={e => onNameChange(e.target.value)} /> : name}</Text>
                        <Text keyboard>{editing ? <Input variant='borderless' value={email} onChange={e => onEmailChange(e.target.value)} /> : email}</Text>
                        <Text type='secondary'>{editing ? <Input value={phone} onChange={e => onPhoneChange(e.target.value)} /> : phone}</Text>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default AccountComponent;
