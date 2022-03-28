import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
    Wrapper,
    TopWrapper,
    Header,
    ProfileWrapper,
    Profile,
    Info,
    Writer,
    CreatedAt,
    Body,
    Title,
    Contents,
    BottonWrapper,
    Button,
} from "../../../styles/boardsId";

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId) {
            _id
            writer
            title
            contents
            createAt
        }
    }
`;

export default function BoardDetail() {
    const router = useRouter();
    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: string(router.query.boardId) },
    });

    console.log(data);

    return (
        <Wrapper>
            <TopWrapper>
                <Header>
                    <ProfileWrapper>
                        <Profile src="/images/profile_01.png" />
                        <Info>
                            <Writer>{data?.fetchBoard?.writer}</Writer>
                            <CreatedAt>{data?.fetchBoard?.createdAt}</CreatedAt>
                        </Info>
                    </ProfileWrapper>
                </Header>
                <Body>
                    <Title>{data?.fetchBoard?.title}</Title>
                    <Bigpicture src="/images/worlds.png" />
                    <Contents>{data?.fetchBoards?.contents}</Contents>
                </Body>
            </TopWrapper>
            <BottonWrapper>
                <Button>목록으로</Button>
                <Button>수정하기</Button>
                <Button>삭제하기</Button>
            </BottonWrapper>
        </Wrapper>
    );
}
