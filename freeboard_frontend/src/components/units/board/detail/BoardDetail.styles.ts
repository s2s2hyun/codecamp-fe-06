import styled from "@emotion/styled";
import ReactPlayer from "react-player";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
    width: 1200px;
    margin: 100px;
`;

export const CardWrapper = styled.div`
    border: 1px solid black;
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

export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #bdbdbd;
    padding-bottom: 20px;
`;

export const AvatarWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Avatar = styled.img`
    margin-right: 10px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Writer = styled.div``;

export const CreatedAt = styled.div``;

export const Body = styled.div`
    width: 100%;
    min-height: 800px;
`;

export const ImageWrapper = styled.div`
    display: flex;

    & div {
        width: 220px;
        height: 115px;
        margin-bottom: 30px;
        padding-right: 12px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Title = styled.h1`
    padding-top: 80px;
`;

export const Youtube = styled(ReactPlayer)`
    margin: auto;
`;

export const LikeWrapper = styled.div`
    padding-top: 160px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const IconWrapper = styled.div`
    text-align: center;
`;

// export const LinkIcon = styled.img``;

export const LikeIconButton = styled.img`
    width: 40px;
    height: 40px;
    color: #ffd600;
    margin: 0px 20px;
    cursor: pointer;
`;

export const LikeCount = styled.div`
    color: #ffd600;
    width: auto;
    height: auto;
`;

export const DislikeIconButton = styled.img`
    width: 40px;
    height: 40px;
    color: #828282;
    margin: 0px 20px;
    cursor: pointer;
`;

export const DislikeCount = styled.div`
    color: #828282;
    width: auto;
    height: auto;
`;

export const Contents = styled.div`
    padding-top: 40px;
    padding-bottom: 120px;
`;

export const BottomWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 80px;
`;

export const Button = styled.button`
    width: 179px;
    height: 45px;
    background-color: white;
    border: 1px solid gray;
    margin: 0px 12px 80px 12px;
    cursor: pointer;
    :hover {
        background-color: gold;
        border-color: white;
    }
`;
