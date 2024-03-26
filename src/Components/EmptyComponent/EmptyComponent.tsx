import React from 'react';
import { Empty, Typography } from 'antd';

const { Text } = Typography

const EmptyComponent: React.FC = () => (
    <Empty
        imageStyle={{ height: 200 }}
        style={{ alignSelf: 'center', width: '120ch' }}
        description={
            <Text style={{ color: '#1874fc', fontSize: 16 }}>No Products Found</Text>
        }
    >
    </Empty>
);

export default EmptyComponent;