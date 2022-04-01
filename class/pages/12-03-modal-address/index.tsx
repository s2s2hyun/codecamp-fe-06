import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ModalCustomPage() {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleComplete = (data: any) => {
    console.log(data);
    setIsOpen(false);
    //setIsopen(false) 가 되어야만 basic modal 창까지 꺼진다
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      {/* 모달 숨겼다가 나타나게 하는 방법
      <Modal
        title="Basic Modal"
        visible={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DaumPostcode onComplete={handleComplete} />
      </Modal> */}
      {/* 모달 삭제하고 새로 만드는 방법 */}
      {isOpen && (
        <Modal
          title="Basic Modal"
          visible={isOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}

// export default function << const  App () 을 함수형으로 바꿔주는 거다
// p타입에 input 이나 패스워드 등등 사용기능추가 가능
//modal를 삭제했다가 다시 켜는 방법  /감추는방식 {isOpen}
//코드를 줄일수가 있다 = 리팩토링

//
//
