
import React, { useState } from 'react';
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { AddProductModal } from '..';
const AddProductButton: React.FC = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const handleCreateProductClick = () => {
        setModalVisible(true);
    };

    const handleModalCancel = () => {
        setModalVisible(false);
    };

    return (
        <>
            <Button
                type="primary"
                onClick={handleCreateProductClick}
            >
                Add Product <ShoppingCartOutlined />
            </Button>
            <AddProductModal visible={modalVisible} handleCancel={handleModalCancel} />
        </>
    );
};

export default AddProductButton;
