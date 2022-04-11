import { css } from "@emotion/react";

export const globalStyles = css`
    * {
        margin: 0;
        box-sizing: boder-box;
        font-size: 30px;
        font-family: "myfont";
    }

    @font-face {
        font-family: "myfont";
        src: url("/fonts/NotoSansKR-Bold.otf");
    }
`;
