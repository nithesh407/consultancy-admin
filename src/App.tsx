import React, { useEffect, useState } from 'react';
import { UserOutlined, LockOutlined, SettingOutlined, ProductOutlined, TruckOutlined, LogoutOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Breadcrumb, Card, Image, Layout, Menu, theme } from 'antd';
import styles from './app.module.css'
import { AddProductButton } from './Components';

const { Header, Content, Sider } = Layout;
import img from './assets/logo.png'
import { Orders, Products } from './pages';
import { API_URL } from './lib';
const items1: MenuProps['items'] = [{
  key: '/logout',
  icon: <LogoutOutlined />,
  label: 'Logout'
}]

const items2 = [
  {
    key: "/Products",
    icon: <ProductOutlined />,
    label: "Products",
  },
  {
    key: "/Orders",
    icon: <TruckOutlined />,
    label: "Orders"
  },
  {
    key: "/Users",
    icon: <UserOutlined />,
    label: "Customer Details"
  },
  {
    key: "/Account",
    icon: <LockOutlined />,
    label: "Account"
  }
];

const App: React.FC = () => {
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
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ height: '100vh', margin: -8 }}>
      <Header style={{ backgroundColor: 'white', display: 'flex' }}>
        <div className="demo-logo">
          <Image width={60} src={img} />
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{ display: 'flex', flexDirection: 'row-reverse', width: '100%' }}
        />
      </Header>
      <Layout >
        <Sider width={240} style={{ background: colorBgContainer, margin: '14px 14px 14px 14px ', height: '64vh' }}>
          <Avatar src={"https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg"} alt='avatar image' size={80} style={{ marginLeft: 80, marginTop: 30, marginBottom: 30 }} />

          <Menu
            mode="inline"
            defaultSelectedKeys={['/Products']}
            style={{ height: '100%' }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: '14px 14px 14px 1px' }}>

          <Card

            style={{ height: '100vh' }}
            title={<Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Admin</Breadcrumb.Item>
              <Breadcrumb.Item><AddProductButton /></Breadcrumb.Item>
            </Breadcrumb>}
            extra={<SettingOutlined />}
          >
            <Content
              className={styles['scrollable-list']}
              style={{
                height: '70vh',
                padding: 24,
                display: 'grid',
                gridTemplateColumns: 'repeat(3,1fr)',
                overflowX: 'hidden',
                rowGap: 20,
                borderRadius: borderRadiusLG,
              }}
            >
              {/* {ProductData.map(product => (
                <Products
                  productID={product.productID}
                  productImageUrl={product.productImageUrl}
                  productDiscountPrice={product.productDiscountPrice}
                  productOriginalPrice={product.productOriginalPrice}
                  productDescription={product.productDescription}
                  productRating={product.productRating}
                />
              ))} */}
              <Orders />
            </Content>
          </Card>
        </Layout>
      </Layout>
    </Layout >
  );
};

export default App;