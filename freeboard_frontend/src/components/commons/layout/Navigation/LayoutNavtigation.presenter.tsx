import { Fragment } from "react";
import { MenuItem, Wrapper } from "./LayoutNavtigation.styles";
import { ILayoutNavigationUIProps } from "./LayoutNavtigation.types";

const NAVIGATION_MENUS = [
    { name: "댕댕이사진", page: "/openapis" },
    { name: "캠프게시판", page: "/boards" },
    { name: "라이브상품", page: "/markets" },
    { name: "마이페이지", page: "/mypages" },
];

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {
    return (
        <Wrapper>
            {NAVIGATION_MENUS.map((el) => (
                <Fragment key={el.page}>
                    <MenuItem id={el.page} onClick={props.onClickMenu}>
                        {el.name}
                    </MenuItem>
                </Fragment>
            ))}
        </Wrapper>
    );
}
