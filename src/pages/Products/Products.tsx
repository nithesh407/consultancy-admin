import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Card, Layout, theme, ConfigProvider } from "antd";
import { ProductComponent, AddProductButton, SearchButton, EmptyComponent } from "../../Components";
import { API_URL } from "../../lib";
import styles from "./Products.module.css";

const { Content } = Layout;

interface Product {
  productID: string;
  productImageUrl: string;
  productDiscountPrice: number | null;
  productOriginalPrice: number | null;
  productDescription: string;
  productRating: number | null;
}

const Products: React.FC = () => {
  const [productData, setProductData] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProductData() {
      const response = await fetch(`${API_URL}/products/`);
      const productData = await response.json();
      const { data } = productData;
      setProductData(data);
      setFilteredProducts(data);
    }
    fetchProductData();
  }, []);

  const handleSearch = (value: string) => {
    const filtered = productData.filter((product) =>
      product.productDescription.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  console.log(filteredProducts.length === 0);

  return (
    <Card
      style={{ backgroundColor: "#08142c" }}
      title={
        <ConfigProvider
          theme={{
            components: {
              Breadcrumb: {
                itemColor: "rgba(255,255,255, 0.3)",
                lastItemColor: "rgba(255,255,255, 0.3)",
                separatorColor: "rgba(255,255,255, 0.3)",
              },
            },
          }}
        >
          <Breadcrumb style={{ margin: "16px 0", color: "white" }}>
            <Breadcrumb.Item>
              <UserOutlined /> Admin
            </Breadcrumb.Item>
            <Breadcrumb.Item>Products</Breadcrumb.Item>
          </Breadcrumb>
        </ConfigProvider>
      }
      extra={
        <div style={{ display: 'flex' }}>
          <SearchButton onSearch={handleSearch} placeholder="Products" />
          <AddProductButton />
        </div>
      }
    >
      <Content
        className={styles["scrollable-list"]}
        style={{
          height: "73.3vh",
          padding: 20,
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          rowGap: 10,
          borderRadius: borderRadiusLG,
        }}
      >
        {filteredProducts && filteredProducts.map((product) => (
          <ProductComponent
            key={product.productID}
            productID={product.productID}
            productImageUrl={product.productImageUrl}
            productDiscountPrice={product.productDiscountPrice}
            productOriginalPrice={product.productOriginalPrice}
            productDescription={product.productDescription}
            productRating={product.productRating}
          />
        ))}

        {filteredProducts.length === 0 && <EmptyComponent />}

      </Content>
    </Card>
  );
};

export default Products;
