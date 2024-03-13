import React from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card, Image, Typography, Divider } from 'antd';
const { Text } = Typography;

const { Meta } = Card;

interface T {
    productImageUrl: string
    productPrice: number
    productOldPrice: number
    productDescripton: string
}
const Products: React.FC<T> = ({ productImageUrl, productDescripton, productOldPrice, productPrice }) => (
    <Card
        hoverable
        style={{ width: 275 }}
        cover={
            <Image
                alt="example"
                src={productImageUrl}
                width={269}
                style={{ marginLeft: 5, marginTop: 5 }}
            />
        }
        actions={[
            <EditOutlined key="edit" />,
            // <EllipsisOutlined key="ellipsis" />,
            <DeleteOutlined key="Delete" style={{ color: '#FA5F55' }} />,
        ]}
    >
        <Meta
            title={
                <div>
                    <Divider style={{ margin: 0 }} />
                    Rs. {productPrice} <Text delete>Rs. {productOldPrice}</Text>
                </div>
            }
            description={productDescripton}
        />
    </Card>
);

export default Products;