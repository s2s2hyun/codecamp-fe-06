import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
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

// const HIDDEN_HEADER = ["/12-05-modal-refactoring"];

const BodyWrapper = styled.div`
    display: flex;
`;

interface ILayoutProps {
    children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
    const router = useRouter();
    console.log(router);

    // const isHidden = HIDDEN_HEADER.includes(router.asPath);

    return (
        <>
            {/* {!isHidden && <Layoutheader />} */}
            <Layoutheader />
            <LayoutBanner />
            <LayoutNavigation />
            <BodyWrapper>
                <LayoutSidebar></LayoutSidebar>
                <Body>{props.children}</Body>
            </BodyWrapper>
        </>
    );
}
