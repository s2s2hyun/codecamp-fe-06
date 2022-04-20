import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
    return (
        <S.Wrapper>
            <S.CardWrapper>
                <S.Header>
                    <S.AvatarWrapper>
                        <S.Avatar src="/image/profile_01.png" />
                        <S.Info>
                            <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
                            <S.CreatedAt>{getDate(props.data?.fetchBoard?.createdAt)}</S.CreatedAt>
                        </S.Info>
                    </S.AvatarWrapper>
                </S.Header>
                <S.Body>
                    <S.Title>{props.data?.fetchBoard?.title}</S.Title>
                    <S.ImageWrapper>
                        {props.data?.fetchBoard.images
                            ?.filter((el: string) => el)
                            .map((el: string) => (
                                <div key={el}>
                                    <S.Image src={`https://storage.googleapis.com/${el}`} />
                                </div>
                            ))}
                    </S.ImageWrapper>
                    <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
                </S.Body>
            </S.CardWrapper>
            <S.BottomWrapper>
                <S.Button onClick={props.onClickMoveToBoardList}>목록으로</S.Button>
                <S.Button onClick={props.onClickMoveToBoardEdit}>수정하기</S.Button>
                <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
            </S.BottomWrapper>
        </S.Wrapper>
    );
}
