import React, { useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card, Image, Typography, Popconfirm, message, Form, Input, Button, Space, Rate } from 'antd';
import { API_URL } from '../../lib';
const { Text } = Typography;
const { Meta } = Card;

interface T {
    productID: string
    productImageUrl: string
    productDiscountPrice: number | null
    productOriginalPrice: number | null
    productDescription: string | null
    productRating: number | null
}

const ProductComponent: React.FC<T> = ({ productID, productImageUrl, productDescription, productOriginalPrice, productDiscountPrice, productRating }) => {
    const [editMode, setEditMode] = useState(false);

    const confirmEdit = () => {
        setEditMode(true);
    };

    const handleEditCancel = () => {
        setEditMode(false);
        message.error('Edit cancelled');
    };

    const onFinish = async (values: any) => {
        const response = await fetch(`${API_URL}/products/${productID}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        const data = await response.json()
        if (data.status === 'success') {
            message.success(data.message)
            setTimeout(() => {
                window.location.reload()
            }, 1500)
        }
        if (data.status === 'fail') {
            message.error(data.message)
        }
        setEditMode(false);
    };

    const handleDelete = async () => {
        const response = await fetch(`${API_URL}/products/${productID}`, {
            method: 'DELETE'
        })
        const data = await response.json();
        if (data.status === 'success') {
            message.success(data.message)
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        }
        if (data.status === 'fail') {
            message.error(data.message)
        }
    }
    return (
        <Card
            hoverable
            style={{ width: 269 }}
            cover={<Image alt="example" src={productImageUrl} width={269} />}
            actions={[
                <Popconfirm
                    title="Edit Product"
                    description="Are you sure you want to edit this product?"
                    onConfirm={confirmEdit}
                    onCancel={() => message.error('Edit cancelled')}
                    okText="Yes"
                    cancelText="No"
                >
                    <EditOutlined key="edit" />
                </Popconfirm>,
                <Popconfirm
                    title="Delete Product"
                    description="Are you sure to delete this Product?"
                    onConfirm={handleDelete}
                    onCancel={() => message.error('Delete cancelled')}
                    okText="Yes"
                    cancelText="No"
                >
                    <DeleteOutlined key="Delete" style={{ color: '#FA5F55' }} />
                </Popconfirm>,
            ]}
        >
            <Meta
                title={
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <Text style={{ fontSize: 17 }}>₹{productDiscountPrice}</Text> <Text type='secondary' style={{ fontSize: 11 }} delete>₹ {productOriginalPrice}</Text>
                            </div>
                            <Rate allowHalf style={{ fontSize: 15, marginTop: 5 }} count={5} value={Number(productRating as number)} disabled />
                        </div>
                    </div>
                }
                description={productDescription}
            />
            {editMode && (
                <Form
                    style={{ marginTop: 20 }}
                    name="editProductForm"
                    onFinish={onFinish}
                    initialValues={{ productDescription, productOriginalPrice, productDiscountPrice, productRating }}
                    layout="vertical"
                >
                    <Form.Item
                        name="productDescription"
                        label="Product Description"
                        rules={[{ required: true, message: 'Please enter product description!' }]}
                    >
                        <Input.TextArea rows={4} />
                    </Form.Item>
                    <Space>
                        <Form.Item
                            name="productOriginalPrice"
                            label="Old Price"
                            rules={[{ required: true, message: 'Please enter product old price!' }]}
                        >
                            <Input type="number" />
                        </Form.Item>
                        <Form.Item
                            name="productDiscountPrice"
                            label="Price"
                            rules={[{ required: true, message: 'Please enter product price!' }]}
                        >
                            <Input type="number" />
                        </Form.Item>
                    </Space>
                    <Form.Item
                        name="productRating"
                        label="Rating"
                        rules={[
                            {
                                validator: (_, value) => {
                                    if (value >= 1 && value <= 5) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('Rating must be between 1 and 5');
                                },
                                required: true,
                            },
                        ]}
                    >
                        <Input type="number" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                        <Button onClick={handleEditCancel} style={{ marginLeft: 10 }}>
                            Cancel
                        </Button>
                    </Form.Item>
                </Form>
            )}
        </Card>
    );
};

export default ProductComponent;
