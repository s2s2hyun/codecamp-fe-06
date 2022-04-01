import * as My from "./BoardDetail.styles";

export default function BoardDetailUI(props) {
    return (
        <My.Wrapper>
            <My.CardWrapper>
                <My.Header>
                    <My.ProfileWrapper>
                        <My.Profile src="/images/profile_01.png" />
                        <My.Info>
                            <My.Writer>{props.data?.fetchBoard?.writer}</My.Writer>
                            <My.CreatedAt>{props.data?.fetchBoard?.createdAt}</My.CreatedAt>
                        </My.Info>
                    </My.ProfileWrapper>
                </My.Header>
                <My.Body>
                    <My.Title>{props.data?.fetchBoard?.title}</My.Title>
                    <My.Contents>{props.data?.fetchBoard?.contents}</My.Contents>
                </My.Body>
            </My.CardWrapper>
            <My.BottomWrapper>
                <My.Button>목록으로</My.Button>
                <My.Button>수정하기</My.Button>
                <My.Button>삭제하기</My.Button>
            </My.BottomWrapper>
        </My.Wrapper>
    );
}
