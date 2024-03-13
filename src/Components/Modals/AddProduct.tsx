import React, { useState, useEffect } from 'react';
import { Modal, message, Button, Typography, Input } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';


const { Dragger } = Upload;

interface AddProductModalProps {
    visible: boolean;
    handleCancel: () => void;
}

const AddProductModal: React.FC<AddProductModalProps> = ({ visible, handleCancel }) => {
    const [uploadedFile, setUploadedFile] = useState<any>(null);
    const [file, setFile] = useState<File | null>(null);
    const [productDescription, setProductDescription] = useState<string | null>(null);
    const [productOriginalPrice, setProductOriginalPrice] = useState<string | null>(null);
    const [productDiscountPrice, setProductDiscountPrice] = useState<string | null>(null);
    const [showDragger, setShowDragger] = useState<boolean>(true);
    useEffect(() => {
        if (!visible) {
            setUploadedFile(null);
            setShowDragger(true);
        }
    }, [visible]);

    const handleUploadChange = (info: any) => {
        const { status, originFileObj } = info.file;
        // if (status === 'done') {
        setUploadedFile(originFileObj);
        setFile(originFileObj);
        setShowDragger(false);
        // } else if (status === 'error') {
        // message.error(`${info.file.name} file upload failed.`);
        // }
    };

    const handleOk = async () => {
        if (file && productDescription && productDiscountPrice && productOriginalPrice) {
            try {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('productDescription', productDescription);
                formData.append('productOriginalPrice', productOriginalPrice);
                formData.append('productDiscountPrice', productDiscountPrice);
                const response = await fetch('http://localhost:4000/api/v1/products', {
                    method: 'POST',
                    body: formData
                })
                const res = await response.json()
                if (res.status == "success") {
                    message.success(res.message)
                    setTimeout(() => {
                        window.location.reload()
                    }, 1000)
                } else {
                    message.error(res.message)
                }
                console.log(res)
            } catch (err) {
                message.error(`${err}`)
                console.log(err);
            }
            handleCancel();
            // window.location.reload()
        } else {
            message.error('Please upload a file and provide a valid description.');
        }
    };


    const handleButtonCancel = () => {
        setUploadedFile(null);
        setProductDescription(null);
        setShowDragger(true);
        handleCancel();
    };

    return (
        <Modal
            title="Upload Files"
            open={visible}
            onCancel={handleButtonCancel}
            footer={null}
        >
            {showDragger && (
                <ImgCrop aspect={5 / 4}>
                    <Dragger onChange={handleUploadChange} showUploadList={false}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    </Dragger>
                </ImgCrop>
            )}
            {uploadedFile && (
                <>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src={URL.createObjectURL(uploadedFile)}
                            alt="Uploaded File"
                            style={{ maxWidth: '100%', maxHeight: '500px', marginBottom: '10px' }}
                        />
                    </div>
                    <div>
                        <Typography.Title level={5}>Original Price</Typography.Title>
                        <Input
                            count={{
                                show: true,
                                max: 300,
                            }}
                            placeholder='Product Original Price'
                            onChange={(e) => setProductOriginalPrice(e.target.value)}
                        />
                    </div>
                    <div>
                        <Typography.Title level={5}>Discount Price</Typography.Title>
                        <Input
                            count={{
                                show: true,
                                max: 300,
                            }}
                            placeholder='Product Discount Price'
                            onChange={(e) => setProductDiscountPrice(e.target.value)}
                        />
                    </div>
                    <div>
                        <Typography.Title level={5}>Description</Typography.Title>
                        <Input
                            count={{
                                show: true,
                                max: 300,
                            }}
                            placeholder='Post Description'
                            onChange={(e) => setProductDescription(e.target.value)}
                        />
                    </div>
                </>
            )}

            <div style={{ textAlign: 'right', marginTop: '20px' }}>
                <Button onClick={handleButtonCancel} style={{ marginRight: '10px' }}>Cancel</Button>
                <Button type="primary" onClick={handleOk}>OK</Button>
            </div>
        </Modal>
    );
};

export default AddProductModal;
