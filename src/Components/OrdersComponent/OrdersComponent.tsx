import { TruckOutlined, DeleteOutlined } from '@ant-design/icons';
import React from 'react';
import { Card, Typography, Image, Button } from 'antd';
import ruppeeImg from "../../assets/rupee.png"
const { Text } = Typography

interface T {
    orderNumber: number,
    productPrice: number,
    productQuantity: number,
    productDescription: string,
    productImageUrl: string
}

const OrdersComponent: React.FC<T> = ({ orderNumber, productDescription, productImageUrl, productPrice, productQuantity }) => {
    return (
        <Card
            hoverable
            style={{ width: 950, height: 200 }}
            title={
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 17 }} code>Order No: {orderNumber}</Text>
                    <Text style={{ marginLeft: -25 }} underline>Product Price</Text>
                    <Text style={{ marginLeft: -30 }} underline>No of Quantity</Text>
                    <Text style={{ marginLeft: -30 }} underline>Description</Text>
                    <TruckOutlined style={{ fontSize: 20 }} />
                </div>
            }
        >
            <div style={{ display: 'flex', gap: 50, justifyContent: 'space-between' }}>
                <Image style={{ height: 100 }} width={100} src={productImageUrl} />
                <div style={{ display: 'flex', gap: 10 }}>
                    <img src={ruppeeImg} style={{ width: 30, height: 30, marginTop: 30 }} />
                    <Text style={{ marginTop: 30, fontSize: 18 }} >{productPrice}</Text>
                </div>
                <Text style={{ fontSize: 20, marginTop: 20, marginLeft: 20 }} >{productQuantity}</Text>
                <Text style={{ width: 140 }} >{productDescription}</Text>
                <Button danger style={{ marginTop: 20, height: 40, width: 40, marginLeft: -50 }}><DeleteOutlined style={{ fontSize: 15, marginLeft: -3 }} /></Button>
            </div>
        </Card>
    );
};

export default OrdersComponent;