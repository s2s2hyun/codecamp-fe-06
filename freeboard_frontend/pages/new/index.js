import { useState } from "react";
import {
    Wrapper,
    Title,
    WriterWrapper,
    InputWrapper,
    Label,
    Writer,
    Password,
    Subject,
    Contents,
    Youtube,
    ZipcodeWrapper,
    Zipcode,
    SearchButton,
    Address,
    ImageWrapper,
    UploadButton,
    OptionWrapper,
    RadioButton,
    RadioLabel,
    ButtonWrapper,
    SubmitButton,
    CancelButton,
} from "../../styles/emotion";

export default function NewPage() {
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [subject, setSubject] = useState("");
    const [contents, setcontents] = useState("");

    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [subjectError, setSubjectError] = useState("");
    const [contentsError, setcontentsError] = useState("");

    const onChangerWirter = (event) => {
        setWriter(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const onChangeSubject = (event) => {
        setSubject(event.target.value);
    };

    const onChangeContents = (event) => {
        setcontents(event.target.value);
    };

    const onClickSubmit = async () => {
        try {
            const result = await createBoard({
                variables: {
                    writer: writer,
                    password: password,
                    subject: subject,
                    contents: contetns,
                },
            });
            alert("게시글 등록완료");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <Wrapper>
            <Title>게시판 등록하기</Title>
            <WriterWrapper>
                <InputWrapper>
                    <Label>작성자</Label>
                    <Writer type="text" placeholder="이름을 적어주세요 " />
                </InputWrapper>
                <InputWrapper>
                    <Label>비밀번호</Label>
                    <Password type="password" placeholder="비밀번호를 입력해주세요" />
                </InputWrapper>
            </WriterWrapper>
            <InputWrapper>
                <Label>제목</Label>
                <Subject type="text" placeholder="제목을 입력해주세요" />
            </InputWrapper>
            <InputWrapper>
                <Label>내용</Label>
                <Contents type="text" placeholder="내용을 입력해주세요" />
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
                <Label>유투브</Label>
                <Youtube type="text" placeholder="링크를 복사해주세요" />
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
                <RadioLabel htmlFor="youtube">유투브</RadioLabel>
                <RadioButton type="radio" id="사진" name="radio-button" />
                <RadioLabel htmlFor="image">사진</RadioLabel>
            </OptionWrapper>
            <ButtonWrapper>
                <CancelButton>취소하기</CancelButton>
                <SubmitButton>등록하기</SubmitButton>
            </ButtonWrapper>
        </Wrapper>
    );
}
