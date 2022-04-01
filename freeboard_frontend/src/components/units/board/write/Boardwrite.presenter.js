import * as My from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
    return (
        <My.Wrapper>
            <My.Title>{props.isEdit ? "게시판 수정" : "게시판 등록"}</My.Title>
            <My.WriterWrapper>
                <My.InputWrapper>
                    <My.Label>작성자</My.Label>
                    <My.Writer
                        type="text"
                        placeholder="이름을 적어주세요."
                        onChange={props.onChangeWriter}
                    />
                    <My.Error>{props.writerError}</My.Error>
                </My.InputWrapper>
                <My.InputWrapper>
                    <My.Label>비밀번호</My.Label>
                    <My.Password
                        type="password"
                        placeholder="비밀번호를 작성해주세요."
                        onChange={props.onChangePassword}
                    />
                    <My.Error>{props.passwordError}</My.Error>
                </My.InputWrapper>
            </My.WriterWrapper>
            <My.InputWrapper>
                <My.Label>제목</My.Label>
                <My.Subject
                    type="text"
                    placeholder="제목을 작성해주세요."
                    onChange={props.onChangeTitle}
                />
                <My.Error>{props.titleError}</My.Error>
            </My.InputWrapper>
            <My.InputWrapper>
                <My.Label>내용</My.Label>
                <My.Contents placeholder="내용을 작성해주세요." onChange={props.onChangeContents} />
                <My.Error>{props.contentsError}</My.Error>
            </My.InputWrapper>
            <My.InputWrapper>
                <My.Label>주소</My.Label>
                <My.ZipcodeWrapper>
                    <My.Zipcode placeholder="07250" />
                    <My.SearchButton>우편번호 검색</My.SearchButton>
                </My.ZipcodeWrapper>
                <My.Address />
                <My.Address />
            </My.InputWrapper>
            <My.InputWrapper>
                <My.Label>유튜브</My.Label>
                <My.Youtube placeholder="링크를 복사해주세요." />
            </My.InputWrapper>
            <My.ImageWrapper>
                <My.Label>사진첨부</My.Label>
                <My.UploadButton>+</My.UploadButton>
                <My.UploadButton>+</My.UploadButton>
                <My.UploadButton>+</My.UploadButton>
            </My.ImageWrapper>
            <My.OptionWrapper>
                <My.Label>메인설정</My.Label>
                <My.RadioButton type="radio" id="youtube" name="radio-button" />
                <My.RadioLabel htmlFor="youtube">유튜브</My.RadioLabel>
                <My.RadioButton type="radio" id="image" name="radio-button" />
                <My.RadioLabel htmlFor="image">사진</My.RadioLabel>
            </My.OptionWrapper>
            <My.ButtonWrapper>
                <My.SubmitButton
                    onClick={props.isEdit ? props.onClickupdate : props.onClickSubmit}
                    isActive={props.isEdit ? ture : isActive}
                >
                    {props.isEdit ? "수정하기" : "등록하기"}
                </My.SubmitButton>
            </My.ButtonWrapper>
        </My.Wrapper>
    );
}
