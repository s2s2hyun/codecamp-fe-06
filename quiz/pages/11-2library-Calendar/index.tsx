import React from "react";
import "antd/dist/antd.css";
import { DatePicker, Space, Alert } from "antd";

export default function onChange(date, dateString) {
    return (
        <Space direction="vertical">
            <DatePicker onChange={onChange} />
        </Space>
    );
}
