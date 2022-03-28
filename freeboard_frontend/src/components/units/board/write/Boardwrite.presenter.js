import { CREATE_BOARD } from "./BoardWrite.styles";
export default function BoardWriteUI(){}

export default function BoardsNewPage(props:)
return (
    <Wrapper>
        <Title>게시판 등록</Title>
        <WriterWrapper>
            <InputWrapper>
                <Label>작성자</Label>
                <Writer
                    type="text"
                    placeholder="이름을 적어주세요."
                    onChange={onChangeWriter}
                />
                <Error>{writerError}</Error>
            </InputWrapper>
            <InputWrapper>
                <Label>비밀번호</Label>
                <Password
                    type="password"
                    placeholder="비밀번호를 작성해주세요."
                    onChange={onChangePassword}
                />
                <Error>{passwordError}</Error>
            </InputWrapper>
        </WriterWrapper>
        <InputWrapper>
            <Label>제목</Label>
            <Subject type="text" placeholder="제목을 작성해주세요." onChange={onChangeTitle} />
            <Error>{titleError}</Error>
        </InputWrapper>
        <InputWrapper>
            <Label>내용</Label>
            <Contents placeholder="내용을 작성해주세요." onChange={onChangeContents} />
            <Error>{contentsError}</Error>
        </InputWrapper>
        <InputWrapper>
            <Label>주소</Label>
            <ZipcodeWrapper>
                <Zipcode placeholder="07250" />
                <SearchButton>우편번호 검색</SearchButton>
            </ZipcodeWrapper>
            <Address />
            <Address />
        </InputWrapper>
        <InputWrapper>
            <Label>유튜브</Label>
            <Youtube placeholder="링크를 복사해주세요." />
        </InputWrapper>
        <ImageWrapper>
            <Label>사진첨부</Label>
            <UploadButton>+</UploadButton>
            <UploadButton>+</UploadButton>
            <UploadButton>+</UploadButton>
        </ImageWrapper>
        <OptionWrapper>
            <Label>메인설정</Label>
            <RadioButton type="radio" id="youtube" name="radio-button" />
            <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
            <RadioButton type="radio" id="image" name="radio-button" />
            <RadioLabel htmlFor="image">사진</RadioLabel>
        </OptionWrapper>
        <ButtonWrapper>
            <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
        </ButtonWrapper>
    </Wrapper>
);

