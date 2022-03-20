import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
    query fetchProduct($productId: ID) {
        fetchProduct(productId: $productId) {
            seller
            name
            detail
            price
        }
    }
`;

export default function StaticRoutedPage() {
    const router = useRouter();
    console.log(router);

    const { data } = useQuery(FETCH_PRODUCT, {
        variables: { productId: router.query.productId },
    });

    console.log(data);

    return (
        <div>
            <div>{data?.fetchProduct.seller} 판매점에 오신걸 환영합니다.</div>
            <div>판매자:{data?.fetchProduct.seller}</div>
            <div>상품이름:{data?.fetchProduct.name}</div>
            <div>상품설명:{data?.fetchProduct.detail}</div>
            <div>가격:{data?.fetchProduct.price}</div>
        </div>
    );
}
