import * as S from "./BoardList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardListUIProps } from "./Boardlist.types";
import Paginations01 from "../../../../components/commons/pagination/01/pgaination01.container";
import { v4 as uuidv4 } from "uuid";

export default function BoardListUI(props: IBoardListUIProps) {
    return (
        <S.Wrapper>
            <S.TableTop />
            <S.SearchWrapper>
                <span>
                    <S.SearchInput
                        type="text"
                        placeholder="제목을 검색해주세요"
                        onChange={props.onChangeSearch}
                    ></S.SearchInput>
                    <S.SearchDate type="text" placeholder="YYYY.MM.DD~YYYY.MM.DD"></S.SearchDate>
                </span>
            </S.SearchWrapper>
            <S.Row>
                <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
                <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
                <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
                <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
            </S.Row>
            {props.data?.fetchBoards.map((el: any) => (
                <S.Row key={el._id}>
                    <S.ColumnBasic>{String(el._id).slice(-4).toUpperCase()}</S.ColumnBasic>
                    {/* <input type="text" id="bbb" onClick={props.onClickMoveToBoardDetail}/> */}
                    <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
                        {el.title
                            .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                            .split("#$%")
                            .map((el) => (
                                <S.Word key={uuidv4()} isMatched={props.keyword === el}>
                                    {el}
                                </S.Word>
                            ))}
                    </S.ColumnTitle>
                    <S.ColumnBasic>{el.writer}</S.ColumnBasic>
                    <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
                </S.Row>
            ))}
            <S.TableBottom />
            <S.Footer>
                <Paginations01 refetch={props.refetch} count={props.count} />
                <S.Button onClick={props.onClickMoveToBoardNew}>
                    <S.PencilIcon src="/image/penicon1.png" />
                    게시물 등록하기
                </S.Button>
            </S.Footer>
        </S.Wrapper>
    );
}
