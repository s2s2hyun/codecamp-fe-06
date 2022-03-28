import { useState } from "react";
import { Rate } from "antd";
import "antd/dist/antd.css";

export default function LibraryStarPage() {
    const [value, setValue] = useState(2);

    function onClickValue() => {
        setValue(event.target)
    }

    const handleChange = (value: number) => {
        setValue(value);
    };

    return <Rate onChange={handleChange} value={value} />;
}
