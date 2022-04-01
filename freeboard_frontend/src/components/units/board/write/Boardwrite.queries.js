import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            _id
        }
    }
`;

export const UPDATE_Board = gql`
    mutation updateBoard($updateBoardInput: UpdateBoardInput!) {
        updateBoard(updateBoardInput: $updateBoardInput, boardId: $boardId, password: $password) {
            _id
        }
    }
`;
