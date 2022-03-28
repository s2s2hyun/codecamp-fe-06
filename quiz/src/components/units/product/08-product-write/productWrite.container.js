// 여기는 컨테이너 컴포넌트
import { useState } from "react";
import { useMutation } from "@apollo/client";
import ProductWriteUI from "./productWrite.presenter";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./productWrite.queries";
import { useRouter } from "next/router";

export default function ProductWrite(props) {
    const router = useRouter();
    const [isActive] = useState(false);

    const [mySeller, setMySeller] = useState("");
    const [myName, setMyName] = useState("");
    const [myDetail, setMyDetail] = useState("");
    const [myPrice, setMyPrice] = useState("");

    const [data, setData] = useState("");
    const [createProduct] = useMutation(CREATE_PRODUCT);
    const [updateProduct] = useMutation(UPDATE_PRODUCT);

    const callGraphqlApi = async () => {
        // const result = await axios.get("https://koreanjson.com/posts/1") // rest-api 방식!!
        // const result = await axios.get("https://koreanjson.com/users/1")
        // const result = await axios.get("https://koreanjson.com/products/1")

        const result = await createProduct({
            variables: {
                seller: mySeller,
                createProductInput: {
                    name: myName,
                    detail: myDetail,
                    price: Number(myPrice),
                },
            },
        }); // graphql-api 방식
        // console.log(result)
        // console.log(result.data.createBoard.message)
        // setData(result.data.createBoard.message)
        console.log("컨테이너 결과 : " + result);
        alert("게시글 등록에 성공하였습니다!!!");
        router.push(`/08-05-product/${result.data.createProduct._id}`);
    };

    const onClickUpdate = async () => {
        await updateProduct({
            variables: {
                productId: router.query.myproduct,
                updateProductInput: {
                    name: myName,
                    detail: myDetail,
                    price: Number(myPrice),
                },
            },
        });
        alert("게시글 수정에 성공하였습니다!!!");
        router.push(`/08-05-product/${router.query.myproduct}`);
    };

    const onChangeSeller = (event) => {
        setMySeller(event.target.value);
    };
    const onChangeName = (event) => {
        setMyName(event.target.value);
    };
    const onChangeDetail = (event) => {
        setMyDetail(event.target.value);
    };
    const onChangePrice = (event) => {
        setMyPrice(event.target.value);
    };

    return (
        <ProductWriteUI
            onChangeSeller={onChangeSeller}
            onChangeName={onChangeName}
            onChangeDetail={onChangeDetail}
            onChangePrice={onChangePrice}
            callGraphqlApi={callGraphqlApi}
            onClickUpdate={onClickUpdate}
            isActive={isActive}
            isEdit={props.isEdit}
        />
    );
}
