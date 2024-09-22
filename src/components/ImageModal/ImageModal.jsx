import Modal from "react-modal";
import s from "./ImageModal.module.css";
import { useEffect } from "react";
Modal.setAppElement("#root");
const ImageModal = ({ isOpen, imageUrl, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return (
      () => {
        window.removeEventListener("keydown", handleKeyDown);
      },
      [onClose]
    );
  });
  return (
    <>
      <Modal
        className={s.modal}
        overlayClassName={s.overlay}
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Image Modal"
        shouldCloseOnOverlayClick={true}
      >
        <button className={s.closeBtn} onClick={onClose}>
          <img className={s.closeIcon} src={imageUrl} alt="close button" />
        </button>
      </Modal>
    </>
  );
};

export default ImageModal;
