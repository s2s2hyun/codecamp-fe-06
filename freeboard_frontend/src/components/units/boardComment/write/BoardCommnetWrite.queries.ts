import { gql } from "@apollo/client";

export const CREATE_BOARD_COMMNET = gql`
    mutation createBoardCommnet($createBoardCommentInput: CreateBoardCommentInput!, $boardId: ID!) {
        createBoardCommnetInput(
            createBoardCommentInput: $createBoardCommentInput
            boardId: $boardId
        ) {
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
        updateBoardCommentInput(
            updateBoardCommentInput: $updateBoardCommnetInput
            password: $password
            boardCommentId: $boardCommendId
        ) {
            _id
        }
    }
`;
