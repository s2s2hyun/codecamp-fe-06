import LayoutBanner from "";
import LayoutHeader from "";
import LayoutNavigation from "";
import styled from "@emotion/styled";
import { ReactNode } from "react";

const Body = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

interface ILayoutProps {
    children: ReactNode;
}
export default function Layout(props: ILayoutProps) {
    return (
        <>
            <LayoutHeader />
            <LayoutBanner />
            <LayoutNavigation />
            <Body>{props.children}</Body>
        </>
    );
}
