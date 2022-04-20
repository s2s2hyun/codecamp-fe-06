import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";
// import { IHandleCompleteProps } from "./lib.types";

export default function ModalAddressPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [address, setAddress] = useState("");

    const onToggleModal = () => {
        setIsOpen((prev) => !prev);
    };

    const handleComplete = (data: any) => {
        onToggleModal();
        setAddress(data.address);
    };

    return (
        <>
            <Button type="primary" onClick={onToggleModal}>
                모달열기
            </Button>
            {isOpen ? (
                <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
                    <DaumPostcode onComplete={handleComplete} />
                </Modal>
            ) : (
                <span>{address}</span>
            )}
        </>
    );
}
