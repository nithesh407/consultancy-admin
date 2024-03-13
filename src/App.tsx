import React from 'react';
import { UserOutlined, LockOutlined, SettingOutlined, ProductOutlined, TruckOutlined, LogoutOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Breadcrumb, Card, Image, Layout, Menu, theme } from 'antd';
import styles from './app.module.css'
import { AddProductButton } from './Components';

const { Header, Content, Sider } = Layout;
import img from './assets/logo.png'
import { Products } from './pages';
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

const ProductData = [
  {
    productImageUrl: 'https://cdn.shopify.com/s/files/1/0415/7846/3390/products/stator-coil-plate-assembly-for-bajaj-platina-753_300x.jpg?v=1663149834',
    productPrice: 12000,
    productOldPrice: 23000,
    productDescripton: 'qwertyuiolkjhgfdsaxcvbnmhrtestrdyfugih'
  },
  {
    productImageUrl: 'https://cdn.shopify.com/s/files/1/0415/7846/3390/products/stator-coil-plate-assembly-for-bajaj-platina-kick-start-new-289_300x.jpg?v=1663151206',
    productPrice: 17000,
    productOldPrice: 23000,
    productDescripton: 'ers45yfughilbhgcytugff'
  },
  {
    productImageUrl: 'https://cdn.shopify.com/s/files/1/0415/7846/3390/products/cam-shaft-assembly-for-bajaj-platina-ct-100-deluxe-discover-112-805_300x.webp?v=1673416277',
    productPrice: 15000,
    productOldPrice: 42000,
    productDescripton: 'jhfxtdrdyufutxcyjvhcgukytftygu'
  },
  {
    productImageUrl: 'https://cdn.shopify.com/s/files/1/0415/7846/3390/products/rear-brake-drum-for-bajaj-platina-130_300x.jpg?v=1675759581',
    productPrice: 20000,
    productOldPrice: 38000,
    productDescripton: 'bfgxtfyjgghvubghctyfjvgchfxytug'
  },
  {
    productImageUrl: 'https://cdn.shopify.com/s/files/1/0415/7846/3390/products/387B_300x.jpg?v=1687875130',
    productPrice: 16000,
    productOldPrice: 33000,
    productDescripton: 'jhfxtdrdyufutxcyjvhcgukytftygu'
  },
  {
    productImageUrl: 'https://cdn.shopify.com/s/files/1/0415/7846/3390/products/rr-unit-for-bajaj-discover-100-4gear-platina-es-boxer-bm-150-5-pin-jn00-regulator-rectifier-920_300x.jpg?v=1663070447',
    productPrice: 14000,
    productOldPrice: 25000,
    productDescripton: 'jhfxtdrdyufutxcyjvhcgukytftygu'
  }
]

const App: React.FC = () => {
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
              {ProductData.map(product => (
                <Products
                  productImageUrl={product.productImageUrl}
                  productPrice={product.productPrice}
                  productOldPrice={product.productOldPrice}
                  productDescripton={product.productDescripton}
                />
              ))}
            </Content>
          </Card>
        </Layout>
      </Layout>
    </Layout >
  );
};

export default App;