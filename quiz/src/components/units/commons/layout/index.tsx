import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import Layoutfooter from "./footer";
import { ReactNode } from "react";
import Layoutheader from "./header";
import { useRouter } from "next/router";

const Body = styled.div`
    height: 500px;
`;

const LayoutSidebar = styled.div`
    width: 450px;
    height: 500px;
    background-color: blue;
`;

const HIDDEN_HEADER = ["/12-05-modal-refactoring"];

const BodyWrapper = styled.div`
    display: flex;
`;

interface ILayoutProps {
    children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
    const router = useRouter();
    console.log(router);

    const isHidden = HIDDEN_HEADER.includes(router.asPath);

    return (
        <>
            {!isHidden && <Layoutheader />}
            <LayoutBanner />
            <LayoutNavigation />
            <BodyWrapper>
                <LayoutSidebar></LayoutSidebar>
                <Body>{props.children}</Body>
            </BodyWrapper>
            <Layoutfooter />
        </>
    );
}

// 특정페이지에선 배너 혹은 네비게이션을 안쓰고 숨시고 싶다 그러면 조건부 랜더링을 하면된다 .
