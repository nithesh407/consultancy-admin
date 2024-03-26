import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Search } = Input;

interface Props {
    onSearch: (value: string) => void;
    placeholder: string
}

const SearchButton: React.FC<Props> = ({ onSearch, placeholder }) => {
    return (
        <Search
            placeholder={`Search ${placeholder}`}
            allowClear
            enterButton={<SearchOutlined />}
            onSearch={onSearch}
            style={{ marginRight: 20 }}
        />
    );
};

export default SearchButton;
