import { gql } from "@apollo/client";

export const CREATE_BOARD_COMMENT = gql`
    mutation createBoardComment($createBoardCommentInput: CreateBoardCommentInput!, $boardId: ID!) {
        createBoardComment(createBoardCommentInput: $createBoardCommentInput, boardId: $boardId) {
            _id
        }
    }
`;

export const UPDATE_BOARD_COMMENT = gql`
    mutation updateBoardComment(
        $updateBoardCommentInput: UpdateBoardCommentInput!
        $password: String
        $boardCommentId: ID!
    ) {
        updateBoardComment(
            updateBoardCommentInput: $updateBoardCommentInput
            password: $password
            boardCommentId: $boardCommentId
        ) {
            _id
        }
    }
`;

export const DELETE_BOARD_COMMENT = gql`
    mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
        deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
    }
`;

export const FETCH_BOARD_COMMENTS = gql`
    query fetchBoardComments($boardId: ID!, $page: Int) {
        fetchBoardComments(boardId: $boardId, page: $page) {
            _id
            writer
            contents
            rating
            createdAt
            updatedAt
        }
    }
`;
