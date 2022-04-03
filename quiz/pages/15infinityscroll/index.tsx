import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int) {
        fetchBoards(page: $page) {
            writer
            _id
            title
            contents
        }
    }
`;

const MyRow = styled.div`
    display: flex;
    flex-direction: row;
`;

const Column = styled.div`
    width: 25%;
`;

const MapBoardPage = () => {
    const { data, fetchMore } = useQuery(FETCH_BOARDS);

    const onLoadMore = () => {
        if (!data) return;

        fetchMore({
            variables: { page: Math.ceil(data.fetchBoards.length / 10) + 1 },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult.fetchBoards) return { fetchBoards: [prev.fetchBoards] };

                return {
                    fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
                };
            },
        });
    };

    return (
        <div style={{ height: 500, overflow: "auto" }}>
            <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true} useWindow={false}>
                {data?.fetchBoards.map((el) => (
                    <MyRow key={el._id}>
                        <Column>{el._id}</Column>
                        <Column>{el.writer}</Column>
                        <Column>{el.title}</Column>
                    </MyRow>
                ))}
            </InfiniteScroll>
        </div>
    );
};

export default MapBoardPage;
