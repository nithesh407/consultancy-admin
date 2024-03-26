import React, { useEffect, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Card, ConfigProvider, Layout, theme } from 'antd';
import styles from './Orders.module.css'
import { OrdersComponent, SearchButton } from '../../Components';

const { Content } = Layout;


const ORDERS_DATA = [
    {
        orderNumber: 4267,
        productPrice: 3499,
        productQuantity: 2,
        productDescription: 'Average Kit for APACHE 150 Cheap and Best Kit for Honda Bikes and Tvs Bikes',
        productImageUrl: 'https://consultancy-bucket.s3.ap-south-1.amazonaws.com/products/test spare 3.jpg-1711179878096'
    },
    {
        orderNumber: 5712,
        productPrice: 9499,
        productQuantity: 7,
        productDescription: '150 Cheap and Best Kit for Honda Bikes and Tvs Bikes for TV MOTORS',
        productImageUrl: 'https://consultancy-bucket.s3.ap-south-1.amazonaws.com/products/test spare 3.jpg-1711179878096'
    },
    {
        orderNumber: 8513,
        productPrice: 7399,
        productQuantity: 5,
        productDescription: 'Cheap and Best Kit for Honda Bikes and Tvs Bikes for TV MOTORS',
        productImageUrl: 'https://consultancy-bucket.s3.ap-south-1.amazonaws.com/products/test spare 3.jpg-1711179878096'
    }
]

interface T {
    orderNumber: number
    productPrice: number
    productQuantity: number
    productDescription: string
    productImageUrl: string
}


const Orders: React.FC = () => {
    const [filteredOrders, setFilteredOrders] = useState<T[]>([]);

    const handleSearch = (value: string) => {
        const filtered = ORDERS_DATA.filter((order) =>
            order.productDescription.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredOrders(filtered);
    };
    useEffect(() => {
        setFilteredOrders(ORDERS_DATA)
    }, [])
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
                        <Breadcrumb.Item>Orders</Breadcrumb.Item>
                    </Breadcrumb>
                </ConfigProvider>
            }

            extra={<SearchButton onSearch={handleSearch} placeholder="Orders" />}
        >
            <Content
                className={styles['scrollable-list']}
                style={{
                    height: '73.4vh',
                    padding: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    overflowX: 'hidden',
                    rowGap: 20,
                    borderRadius: borderRadiusLG,
                }}
            >
                {filteredOrders.map((order) => (
                    <OrdersComponent
                        orderNumber={order.orderNumber}
                        productImageUrl={order.productImageUrl}
                        productPrice={order.productPrice}
                        productDescription={order.productDescription}
                        productQuantity={order.productQuantity}
                    />
                ))}
            </Content>
        </Card>
    );
};

export default Orders;