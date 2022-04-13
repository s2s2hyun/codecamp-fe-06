import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    background: url("image/worlds_champ.png");
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const EnterButton = styled.button`
    width: 170px;
    height: 70px;
    border: 1px solid white;
    background: none;
    color: white;
    border-radius: 50px;
    cursor: pointer;

    &:hover {
        font-weight: bold;
        background: white;
        opacity: 30%;
        color: black;
    }
`;

export default function Home() {
    const router = useRouter();
    const aaa = () => {
        router.push("/boards/");
    };

    return (
        <Wrapper>
            <EnterButton onClick={aaa}>enter page</EnterButton>
        </Wrapper>
    );
}
