import { useState } from "react";
import { Rate } from "antd";

export default function LibraryStarPage() {
  const [value, setValue] = useState(3);

  const handleChange = (value) => {
    setValue(value);
  };

  return <Rate onChange={handleChange} value={value} />;
}

// HTML onchange 가 아니다 antd 디자인분들이 만든 용어이다
// 스코프 체인 공부
// value  스코프체인
