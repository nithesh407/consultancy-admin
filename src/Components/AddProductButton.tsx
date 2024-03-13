
import React, { useState } from 'react';
import { Button } from 'antd';
import { AddProductModal } from '.';
const AddProductButton: React.FC = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const handleCreatePostClick = () => {
        setModalVisible(true);
    };

    const handleModalCancel = () => {
        setModalVisible(false);
    };

    return (
        <>
            <Button
                type="primary"
                onClick={handleCreatePostClick}
            >
                Add New Product
            </Button>
            <AddProductModal visible={modalVisible} handleCancel={handleModalCancel} />
        </>
    );
};

export default AddProductButton;
