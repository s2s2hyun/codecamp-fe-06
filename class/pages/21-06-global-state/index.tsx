import GlobalStateContatiner from "../../src/components/units/21-global-state/BoardWrite.container";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../src/commons/store";

export default function GlobalState() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  }, []);

  return <GlobalStateContatiner />;
}
