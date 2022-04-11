import { atom } from "recoil";

export const isEditState = atom({
  key: "isEditState",
  default: false,
});
// 글로벌 스테이트 isEditState 로 만든다 아톰으로
