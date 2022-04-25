import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import { DaumPostcode } from "react-daum-postcode";
import { Modal } from "antd";
import Uploads01 from "../../../commons/uploads/Upload01.container";
import { v4 as uuid4 } from "uuid";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
    return (
        <>
            {props.isOpen && (
                <Modal visible={true}>
                    <DaumPostcode onComplete={props.onCompleteAddressSearch} />
                </Modal>
            )}
            <S.Wrapper>
                <S.Title>{props.isEdit ? "게시판 수정" : "게시판 등록"}</S.Title>
                <S.WriterWrapper>
                    <S.InputWrapper>
                        <S.Label>작성자</S.Label>
                        <S.Writer
                            type="text"
                            placeholder="이름을 적어주세요."
                            onChange={props.onChangeWriter}
                            defaultValue={props.data?.fetchBoard.writer}
                            readOnly={!!props.data?.fetchBoard.writer}
                        />
                        <S.Error>{props.writerError}</S.Error>
                    </S.InputWrapper>
                    <S.InputWrapper>
                        <S.Label>비밀번호</S.Label>
                        <S.Password
                            type="password"
                            placeholder="비밀번호를 작성해주세요."
                            onChange={props.onChangePassword}
                        />
                        <S.Error>{props.passwordError}</S.Error>
                    </S.InputWrapper>
                </S.WriterWrapper>
                <S.InputWrapper>
                    <S.Label>제목</S.Label>
                    <S.Subject
                        type="text"
                        placeholder="제목을 작성해주세요."
                        onChange={props.onChangeTitle}
                        defaultValue={props.data?.fetchBoard.title}
                    />
                    <S.Error>{props.titleError}</S.Error>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.Label>내용</S.Label>
                    <S.Contents
                        placeholder="내용을 작성해주세요."
                        onChange={props.onChangeContents}
                        defaultValue={props.data?.fetchBoard.contents}
                    />
                    <S.Error>{props.contentsError}</S.Error>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.Label>주소</S.Label>
                    <S.ZipcodeWrapper>
                        <S.Zipcode placeholder="07250" />
                        <S.SearchButton onClick={props.onClickAddressSearch}>
                            우편번호 검색
                        </S.SearchButton>
                    </S.ZipcodeWrapper>
                    <S.Address />
                    <S.Address />
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.Label>유튜브</S.Label>
                    <S.Youtube
                        placeholder="링크를 복사해주세요."
                        onChange={props.onChangeYoutubeUrl}
                        defaultValue={props.data?.fetchBoard.youtubeUrl || ""}
                    />
                </S.InputWrapper>
                <S.ImageWrapper>
                    <S.Label>사진첨부</S.Label>
                    {props.fileUrls.map((el, index) => (
                        <Uploads01
                            key={uuid4()}
                            index={index}
                            fileUrl={el}
                            onChangeFileUrls={props.onChangeFileUrls}
                        />
                    ))}
                </S.ImageWrapper>
                <S.OptionWrapper>
                    <S.Label>메인설정</S.Label>
                    <S.RadioButton type="radio" id="youtube" name="radio-button" />
                    <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
                    <S.RadioButton type="radio" id="image" name="radio-button" />
                    <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
                </S.OptionWrapper>
                <S.ButtonWrapper>
                    <S.SubmitButton
                        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
                        isActive={props.isEdit ? true : props.isActive}
                    >
                        {props.isEdit ? "수정하기" : "등록하기"}
                    </S.SubmitButton>
                </S.ButtonWrapper>
            </S.Wrapper>
        </>
    );
}
