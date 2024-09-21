import Modal from "react-modal";
import s from "./ImageModal.module.css";
Modal.setAppElement("#root");
const ImageModal = ({ isOpen, image: { urls, alt_description }, onClose }) => {
  return (
    <>
      <Modal
        className={s.modal}
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Image Modal"
        shouldCloseOnOverlayClick={true}
      >
        <div>
          <img src={urls.regular} alt={alt_description} />
        </div>
      </Modal>
    </>
  );
};

export default ImageModal;
