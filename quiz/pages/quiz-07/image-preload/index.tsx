import { useEffect, useRef, useState } from "react";
import React from "react";
// import LazyLoad from "react-lazyload";

export default function imagePreloadPage() {
    const [imgTag, setImgTag] = useState<HTMLImageElement>();
    const divRef = useRef<HTMLDivElement>(null);
    // const [isLoaded, setIsLoaded] = useState(false);

    // <img src=""> 이미지 태그가 있다 .

    useEffect(() => {
        const img = new Image();
        img.src =
            "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/003/903/81003903_1510904521637_1_600x600.JPG/dims/resize/Q_80,0";
        img.onload = () => {
            setImgTag(img);
        };
    }, []);

    const onClickPreload = () => {
        if (imgTag) divRef.current?.appendChild(imgTag);
        // document.getElementById("aaa")?.appendChild(imgTag);
    };

    return (
        <div>
            <div ref={divRef}></div>
            <button onClick={onClickPreload}>이미지 프리로드</button>
        </div>
    );
}
