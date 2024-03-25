import React, { useEffect, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Card, Layout, theme, ConfigProvider } from 'antd';
const { Content } = Layout;
import { ProductComponent, AddProductButton } from '../../Components';
import { API_URL } from '../../lib';
import styles from "./Products.module.css"

const Products: React.FC = () => {
    const [ProductData, setProductData] = useState([
        {
            productID: '',
            productImageUrl: '',
            productDiscountPrice: null,
            productOriginalPrice: null,
            productDescription: null,
            productRating: null
        }
    ])
    useEffect(() => {
        async function fetchProductData() {
            const response = await fetch(`${API_URL}/products/`)
            const productData = await response.json();
            const { data } = productData
            setProductData(data)
        }
        fetchProductData();
    }, [])
    console.log(ProductData)
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
                        <Breadcrumb.Item>Products</Breadcrumb.Item>
                    </Breadcrumb>
                </ConfigProvider>
            }

            extra={<AddProductButton />}
        >
            <Content
                className={styles['scrollable-list']}
                style={{
                    // height: '73.4vh',
                    padding: 20,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3,1fr)',
                    overflowX: 'hidden',
                    rowGap: 20,
                    borderRadius: borderRadiusLG,
                }}
            >
                {ProductData.map(product => (
                    <ProductComponent
                        productID={product.productID}
                        productImageUrl={product.productImageUrl}
                        productDiscountPrice={product.productDiscountPrice}
                        productOriginalPrice={product.productOriginalPrice}
                        productDescription={product.productDescription}
                        productRating={product.productRating}
                    />
                ))}
            </Content>
        </Card>
    );
};

export default Products;