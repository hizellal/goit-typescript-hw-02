import Modal from "react-modal";
import css from "./ImageModal.module.css";

interface IImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  children?: React.ReactNode;
}

export default function ImageModal({
  isOpen,
  onClose,
  children,
}: IImageModalProps) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        overlayClassName={css.reactModal__overlay}
        className={css.reactModal__content}
        onRequestClose={onClose}
        ariaHideApp={false}
      >
        <button className={css.btnMore} onClick={onClose}>
          close
        </button>
        {children}
      </Modal>
    </>
  );
}