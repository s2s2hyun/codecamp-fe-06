import { useQuery, gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { Fragment } from "react";

const FETCH_PRODUCTS = gql`
    query fetchProducts {
        fetchProducts {
            _id
            seller
            name
            detail
            price
        }
    }
`;

const DELETE_PRODUCT = gql`
    mutation deleteProduct($productId: ID) {
        deleteProduct(productId: $productId) {
            message
        }
    }
`;

const Row = styled.div`
    display: flex;
`;

const Column = styled.div`
    width: 20%;
`;

export default function MapProductPage() {
    const [deleteProduct] = useMutation(DELETE_PRODUCT);
    const { data } = useQuery(FETCH_PRODUCTS);

    const onClickDelete = (event) => {
        deleteProduct({
            variables: { productId: event.target.id },
            refetchQueries: [{ query: FETCH_PRODUCTS }],
        });
    };

    return (
        <Fragment>
            {data?.fetchProducts.map((el) => (
                // <Fragment key={el.number}>
                <Row key={el._id}>
                    <Column>
                        <input type="checkbox" />
                    </Column>
                    <Column>아이디{el._id}</Column>
                    <Column>판매자{el.seller}</Column>
                    <Column>이름{el.name}</Column>
                    <Column>설명{el.detail}</Column>
                    <Column>가격{el.price}</Column>
                    <Column>
                        <button id={el._id} onClick={onClickDelete}>
                            삭제
                        </button>
                    </Column>
                </Row>
            ))}
        </Fragment>
    );
}
