import { useMutation, useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "6267af69a8255b002988cc79" },
  });

  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickOptimisticUI = () => {
    // 버튼 누르면 뮤테이션 실행
    likeBoard({
      variables: { boardId: "6267af69a8255b002988cc79" },

      // 방법 1. state 활용

      // 방법 2. 쿼리 두 번
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARD,
      //     variables: { boardId: "6269ece4a8255b002988d633" }
      //   }
      // ]

      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1, // undefined면 0 + 1 해줘~!
      },
      // 3. 캐시(글로벌 스테이트)를 직접 수정 -> optimisticResponse와 같이 사용 가능
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "6267af69a8255b002988cc79" },
          data: {
            fetchBoard: {
              // 공식처럼 입력하는 것 두 가지(_id, __typename). 나머지는 옵션.
              _id: "6267af69a8255b002988cc79",
              __typename: "Board",
              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
  };

  return (
    <>
      <h1>Optimistic-UI</h1>
      <div>현재 좋아요 카운트: {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickOptimisticUI}>좋아요 + 1</button>
    </>
  );
}
