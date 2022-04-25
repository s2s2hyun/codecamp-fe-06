import BoardCommentListUIItem from "./BoardCommnetList.presenterItem";
import InfiniteScroll from "react-infinite-scroller";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
    if (!props.data) return <div />;
    return (
        <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
            {props.data?.fetchBoardComments.map((el) => (
                <BoardCommentListUIItem key={el._id} el={el} />
            ))}
        </InfiniteScroll>
    );
}
