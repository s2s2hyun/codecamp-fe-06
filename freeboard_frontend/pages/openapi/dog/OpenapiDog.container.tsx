import axios from "axios";
import { useEffect, useState } from "react";
import IOpenapiDogUI from "./OpenapiDog.presenter";

export default function OpenapiWithUseEffectPage() {
    const [imgUrls, setimgUrls] = useState("");

    useEffect(() => {
        const aaa = async () => {
            const result = await axios.get("https://dog.ceo/api/breeds/image/random ");
            setimgUrls(result.data.message);
        };
        aaa();
    }, []);

    return <IOpenapiDogUI imgUrls={imgUrls} />;
}
