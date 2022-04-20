import axios from "axios";
import { useEffect, useState } from "react";
import IOpenapiDogUI from "./OpenapiDog.presenter";

export default function OpenapiWithUseEffectPage() {
    const [imgUrls, setImgUrls] = useState<string[]>([]);

    useEffect(() => {
        const getImg = async () => {
            // [1, 1, 1, 1, 1, 1, 1, 1, 1]
            new Array(3).fill(1).map(async (_) => {
                const result: any = await axios.get("https://dog.ceo/api/breeds/image/random");
                setImgUrls((prev) => [...prev, result.data.message]);
            });
        };
        getImg();
    }, []);

    return <IOpenapiDogUI imgUrls={imgUrls} />;
}
