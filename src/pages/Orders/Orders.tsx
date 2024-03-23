import { EditOutlined, EllipsisOutlined, SettingOutlined, TruckOutlined, DeleteOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar, Card, Typography, Flex, Image, Button } from 'antd';
import ruppeeImg from "../../assets/rupee.png"
const { Text } = Typography

const Orders: React.FC = () => {
    return (
        <Card
            hoverable
            style={{ width: 900, height: 200 }}
            title={
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 17 }} code>Order No: 31523</Text>
                    <Text style={{ marginLeft: -25 }} underline>Product Price</Text>
                    <Text style={{ marginLeft: -30 }} underline>No of Quantity</Text>
                    <Text style={{ marginLeft: -30 }} underline>Description</Text>
                    <TruckOutlined style={{ fontSize: 20 }} />
                </div>
            }
        >
            <div style={{ display: 'flex', gap: 50, justifyContent: 'space-between' }}>
                <Image style={{ height: 100 }} width={100} src='https://consultancy-bucket.s3.ap-south-1.amazonaws.com/products/test spare 3.jpg-1711179878096' />
                <div style={{ display: 'flex', gap: 10 }}>
                    <img src={ruppeeImg} style={{ width: 30, height: 30, marginTop: 30 }} />
                    <Text style={{ marginTop: 30, fontSize: 18 }} >42,330</Text>
                </div>
                <Text style={{ fontSize: 20, marginTop: 20, marginLeft: 20 }} >5</Text>
                <Text style={{ width: 140 }} >Average Kit for APACHE 150\nCheap and Best Kit for Honda Bikes and Tvs Bikes</Text>
                <Button danger style={{ marginTop: 20, height: 40, width: 40, marginLeft: -50 }}><DeleteOutlined style={{ fontSize: 15, marginLeft: -3 }} /></Button>
            </div>
        </Card>
    );
};

export default Orders;