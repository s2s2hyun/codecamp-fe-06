import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 1200px;
    border: 1px solid black;
    margin: 100px;
    padding-top: 80px;
    padding-bottom: 100px;
    padding-left: 102px;
    padding-right: 102px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    box-shadow: 0px 0px 10px gray;
`;

export const Title = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 36px;
    font-weight: bold;
`;

export const WriterWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 40px;
`;

export const InputWrapper = styled.div`
    padding-top: 40px;
`;

export const Label = styled.div`
    padding-bottom: 16px;
    font-size: 16px;
    font-weight: 500;
`;

export const Writer = styled.input`
    width: 486px;
    height: 52px;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
`;

export const Password = styled.input`
    width: 486px;
    height: 52px;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
`;

export const Subject = styled.input`
    width: 996px;
    height: 52px;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
`;

export const Contents = styled.textarea`
    width: 996px;
    height: 480px;
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
    background: #FFFFF;
`;

export const ZipcodeWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Zipcode = styled.input`
    width: 77px;
    height: 52px;
    border: 1px solid #bdbdbd;
    padding-left: 16px;
`;
export const SearchButton = styled.button`
    width: 124px;
    height: 52px;
    cursor: pointer;
    background-color: black;
    margin-left: 16px;
    color: white;
`;
export const Address = styled.input`
    width: 996px;
    height: 52px;
    margin-top: 16px;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
`;

export const Youtube = styled.input`
    width: 996px;
    height: 52px;
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
`;

export const ImageWrapper = styled.div`
    width: 996px;
    padding-top: 40px;
`;

export const UploadButton = styled.button`
    width: 78px;
    height: 78px;
    background: #bdbdbd;
    margin-right: 24px;
    cursor: pointer;
    outline: none;
    border: none;
`;

export const OptionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 40px;
`;

export const RadioButton = styled.button`
    cursor: pointer;
`;
export const RadioLabel = styled.div`
    margin-left: 8px;
    margin-right: 20px;
    font-size: 16px;
    line-height: 24px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 80px;
`;

export const SubmitButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 14px 60px;
    background-color: yellow;
    cursor: pointer;
`;

export const CancelButton = styled.button`
    display: flex;
    flex-direction: fow;
    justify-content: center;
    align-items: center;
    padding: 14px 60px;
    background-color: silver;
    cursor: pointer;
`;
