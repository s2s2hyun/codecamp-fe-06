import { useMutation } from "@apollo/client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import UsedWriteUI from "./UsedWrite.presenter";
import { CREAT_PRODUCT_ITEM, UPDATE_PRODUCT_ITEM } from "./UsedWrite.queries";
// import { IUsedWriteProps } from "./UsedWrite.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { useRecoilState } from "recoil";
// import { usedProductDataState } from "../../../../commons/libraries/store";

const schema = yup.object({
  name: yup.string().required("상품명은 필수 입력 사항"),
  remarks: yup.string().required("한줄 요약은 필수 입력 사항"),
  price: yup
    .number()
    .max(10000000000, "금액입력이 너무 큽니다 ")
    .required("판매가격은 필수 입력 사항입니다."),

  contents: yup
    .string()
    .min(5, "상품설명을 5자 이상 작성")
    .required("상품설명은 필수 입력 사항입니다."),
});

const nonSchema = yup.object({});

export default function UsedWrite(props) {
  const router = useRouter();
  const [hashArr, setHashArr] = useState([]);
  const [fileUrls, setFileUrls] = useState([]);
  // const [usedProductData, setusedProductData] = useRecoilState(usedProductDataState);

  const {
    handleSubmit,
    register,
    setValue,
    trigger,
    getValues,
    formState,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(props.isEdit ? nonSchema : schema),
  });

  const [createUseditem] = useMutation(CREAT_PRODUCT_ITEM);
  const [updateUseditem] = useMutation(UPDATE_PRODUCT_ITEM);

  const onClickSubmit = async (data) => {
    try {
      const result = await createUseditem({
        variables: {
          reateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: parseInt(data.price),
            tags: hashArr,
            images: fileUrls,
            useditemAddress: {
              zipcode: data.zipcode,
              address: data.address,
              addressDetail: data.addressDetail,
              lat: data.lat,
              lng: data.lng,
            },
          },
        },
      });
      alert("상품 등록에 성공했습니다");
      router.push(`/${result.data.createUseditem._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickUpdate = async (data) => {
    const updateVariables = {
      name: data.name ? data.name : props.data?.name,
      remarks: data.remarks ? data.remarks : props.data?.remarks,
      contents: data.contents ? data.contents : props.data?.contents,
      price: data.price ? data.price : props.data?.price,
      tags: hashArr,
      images: fileUrls,
      useditemAddress: {
        zipcode: data.zipconde
          ? data.zipcode
          : props.data?.useditemAddress.zipcode,
        address: data.address
          ? data.address
          : props.data?.useditemAddress.address,
        addressDetail: data.addressDetail
          ? data.addressDetail
          : props.data?.useditemAddress.addressDetail,
        lat: data.lat ? data.lat : props.data?.useditemAddress.lat,
        lng: data.lng ? data.lng : props.data?.useditemAddress.lng,
      },
    };
    try {
      await updateUseditem({
        variables: {
          updateUseditemInput: updateVariables,
          useditemId: String(router.query.usedId),
        },
      });
      alert("상품 수정에 성공하였습니다.");
      router.push(`/${router.query.usedId}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br><p>" ? "" : value);
    trigger("contents");
  };
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    if (props.data?.images?.length) {
      setFileUrls([...props.data?.images]);
    }
  }, [props.data]);

  const onChangeTags = (event) => {
    const tagArr = event.target.value.split(" ");
    setHashArr(tagArr);
  };

  const onKeyUpHash = (event) => {
    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashArr([...hashArr, "#" + event.target.value]);
      //  실제 서비스에서는 #을 우리가 직접 추가하기 때문에 #을 지우고 글쓴이가 쓰도록 하자

      event.target.value = "";
    }
  };

  return (
    <UsedWriteUI
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      onChangeContents={onChangeContents}
      onChangeTags={onChangeTags}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      onKeyUpHash={onKeyUpHash}
      register={register}
      data={props.data}
      handleSubmit={handleSubmit}
      setValue={setValue}
      getValues={getValues}
      hassArr={hashArr}
    />
  );
}
