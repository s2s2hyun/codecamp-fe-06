import React from "react";
import "antd/dist/antd.css";
import { DatePicker, Space } from "antd";

export default function onChange(date, dateString) {
    return (
        <Space direction="vertical">
            <DatePicker onChange={onChange} />
            <div></div>
        </Space>
    );
}
console.log("ㅎㅇ");
