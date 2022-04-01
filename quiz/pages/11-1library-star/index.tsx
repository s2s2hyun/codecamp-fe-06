import { useState } from "react";
import { Rate } from "antd";

export default function LibraryStarPage() {
    const [value, setValue] = useState(3);

    const handleChange = (value: number) => {
        setValue(value);
        alert(`${value}점`);
    };

    // antdesign의 onChange임.
    return (
        <>
            <Rate onChange={handleChange} value={value} />
            <div>{value}점</div>
        </>
    );
}
