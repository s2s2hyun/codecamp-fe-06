import { useState } from "react";
import { Modal, Button } from "antd";

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

    return (
        <>
            <Button type="primary" onClick={showModal}>
                모달열기
            </Button>
            <Modal title="게시글등록" visible={isOpen} onOk={handleOk} onCancel={handleCancel}>
                <div>게시글 등록이 되었습니다.</div>
            </Modal>
        </>
    );
}

// export default function << const  App () 을 함수형으로 바꿔주는 거다
// p타입에 input 이나 패스워드 등등 사용기능추가 가능
