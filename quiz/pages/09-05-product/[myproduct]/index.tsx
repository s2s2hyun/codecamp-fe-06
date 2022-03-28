//상세보기 페이지
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
    console.log("router 결과 : " + router.query);

    const { data } = useQuery(FETCH_PRODUCT, {
        variables: { productId: router.query.myproduct },
    });

    console.log("data 콘솔 : " + data);

    const onClickMove = () => {
        router.push(`/09-05-product/${router.query.myproduct}/edit`);
    };

    return (
        <div>
            <div>{data?.fetchProduct.myproductid}환영합니다</div>
            <div>판매자: {data?.fetchProduct.seller}</div>
            <div>이름: {data?.fetchProduct.name}</div>
            <div>내용: {data?.fetchProduct.detail}</div>
            <div>가격: {data?.fetchProduct.price}</div>
            <button onClick={onClickMove}>수정하러 이동하기</button>
        </div>
    );
}
