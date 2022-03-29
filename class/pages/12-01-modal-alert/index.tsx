import { Modal } from "antd";

export default function ModalAlertPage() {
  const onClickSuccessButton = () => {
    Modal.success({ content: "게시물 등록에 성공했습니다!" });
  };

  const onClickFailButton = () => {
    Modal.error({ content: "돌아가" });
  };

  return (
    <div>
      <button onClick={onClickSuccessButton}>성공맨!!</button>
      <button onClick={onClickFailButton}>실패맨!!</button>
    </div>
  );
}
