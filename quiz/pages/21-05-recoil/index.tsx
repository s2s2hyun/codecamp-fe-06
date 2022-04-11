import { useEffect, useState } from "react";
import GlobalStateContainer from "../../src/components/units/21-recoilcomponents/write.container";
import { useRecoilState } from "recoil";
import { isEditState } from "../../src/commons/store/index";

export default function GlobalState() {
    const [isEdit, setIsEdit] = useRecoilState(isEditState);

    useEffect(() => {
        setIsEdit(true);
    }, []);

    return <GlobalStateContainer />;
}
