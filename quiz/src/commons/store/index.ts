import { atom } from "recoil";

export const isEditState = atom({
    key: "isEditState",
    default: false,
});

export const accessTokenState = atom({
    key: "accessTokenState",
    default: "",
});

export const userInfoState = atom({
    key: "InfoState",
    default: {
        email: "",
        name: "",
    },
});

export const visitedPageState = atom({
    key: "visitedPageState",
    default: "/",
});
