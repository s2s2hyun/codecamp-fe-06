import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
        createProduct(seller: $seller, createProductInput: $createProductInput) {
            _id
            number
            message
        }
    }
`;

export default function GraphqlMutationPage() {
    const [createProduct] = useMutation(CREATE_PRODUCT);
    const router = useRouter();

    const [productSeller, setProductSeller] = useState("");
    const [productName, setProductName] = useState("");
    const [productDetail, setProductDetail] = useState("");
    const [productPrice, setProductPrice] = useState("");

    const onChangeProductSeller = (event) => {
        setProductSeller(event.target.value);
    };

    const onChangeProductName = (event) => {
        setProductName(event.target.value);
    };
    const onChangeProductDetail = (event) => {
        setProductDetail(event.target.value);
    };

    const onChangeProductPrice = (event) => {
        setProductPrice(parseInt(event.target.value));
    };

    const onClickSubmit = async () => {
        try {
            const result = await createProduct({
                variables: {
                    seller: productSeller,
                    createProductInput: {
                        name: productName,
                        detail: productDetail,
                        price: productPrice,
                    },
                },
            });
            alert("상품등록완료");
            alert("상세 페이지로 이동해볼까요 ?");
            router.push(`/05-2/${result.data.createProduct._id}`);

            console.log(result);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            판매자:
            <input type="text" onChange={onChangeProductSeller} />
            <br />
            상품이름:
            <input type="text" onChange={onChangeProductName} />
            <br />
            상품설명:
            <input type="text" onChange={onChangeProductDetail} />
            <br />
            상품가격:
            <input type="text" onChange={onChangeProductPrice} />
            <br />
            <button onClick={onClickSubmit}>상품등록하기</button>
        </div>
    );
}
